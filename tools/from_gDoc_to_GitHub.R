# from_gDoc_to_GitHub.R
# Link roles to pages in the plain text.


# Use a library for piping.
library(magrittr)

# Set the working directory to the directory of the script.
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# Load gDoc input as txt.
gDoc <- readLines(con = "gDoc/BMR.txt",
                  encoding = "UTF-8")

# Remove empty lines.
gDoc <- gDoc[gDoc != ""]

# Remove blank at the begging and the end.
gDoc <- trimws(gDoc)

# List the list of the role files.
list_files <- list.files("../docs/roles/")

# Get the list of the roles.
list_roles <- list_files %>%
  # Remove the extension.
  tools::file_path_sans_ext() %>%
  # Replace hyphens with spaces.
  stringr::str_replace_all("-", " ") %>%
  # Capitalize the first letter.
  stringr::str_to_title() %>%
  # Remove the uppercase of link words as "De" or "Du".
  stringr::str_replace(" De ", " de ") %>%
  stringr::str_replace(" Du ", " du ") %>%
  # Fix "Croqueuse d'hommes".
  stringr::str_replace("^Croqueuse D Homme$", "Croqueuse d'hommes") %>%
  # Fix "Pukka".
  stringr::str_replace("^Pooka$", "Pukka") %>%
  # Fix names with French accents.
  stringr::str_replace("^Commere$", "Commère") %>%
  stringr::str_replace("^Enqueteur$", "Enquêteur") %>%
  stringr::str_replace("^Menestrel$", "Ménestrel") %>%
  stringr::str_replace("^Sorciere$", "Sorcière") %>%
  stringr::str_replace("^Soûlard$", "Soûlard") %>%
  stringr::str_replace("^Sorciere$", "Sorcière") %>%
  stringr::str_replace("^Traitre$", "Traître") %>%
  # Fix new names.
  stringr::str_replace("^Bonne$", "Femme de Chambre") %>%
  stringr::str_replace("^Bricoleur$", "Inventeur")

# Build the regex for catching a role.
catch_role <- list_roles %>%
  paste0(collapse = "|") %>%
  paste0("(", ., ")")

# Build the regex for catching the title.
catch_title <- paste0("^", catch_role, " \\(.+\\)$")

# Get lines corresponding to titles.
# gDoc %>%
#   .[stringr::str_detect(., "^.+ \\(.+\\)$")]
# gDoc %>%
#   .[stringr::str_detect(., catch_title)]

# Get role list of Bad Moon Rising.
list_roles_BMR <- gDoc %>%
  .[stringr::str_detect(., catch_title)] %>%
  stringr::str_extract("^.+ \\(") %>%
  stringr::str_replace(" \\(", "")

# Split gDoc per role.
gDoc_perRole <- stringr::str_detect(gDoc, catch_title) %>%
  cumsum() %>%
  split(gDoc, .)
names(gDoc_perRole) <- list_roles_BMR


# Generate Mark Down.
markDown_perRole <- plyr::llply(
  gDoc_perRole,
  function(gDoc_role) {
    # DEBUG #
    # gDoc_role <- gDoc_perRole[[1]]
    ## Catch and move the original name.
    title <- gDoc_role[[1]] %>%
      stringr::str_replace(" \\(.+\\)$", "")
    module <- "Module : Bad Moon Rising"
    original_name <- gDoc_role[[1]] %>%
      stringr::str_extract("\\(.+\\)$") %>%
      stringr::str_replace("\\(", "") %>%
      stringr::str_replace("\\)", "") %>%
      paste0("Nom original : ", .)
    gDoc_role <- c(title, module, original_name, gDoc_role[2:length(gDoc_role)])
    ## Put the first line as title.
    gDoc_role[[1]] <- paste0("# ", gDoc_role[[1]])
    ## Put the second, third and fourth line as title 2.
    gDoc_role[[2]] <- paste0("## ", gDoc_role[[2]])
    gDoc_role[[3]] <- paste0("## ", gDoc_role[[3]])
    gDoc_role[[4]] <- paste0("## ", gDoc_role[[4]])
    gDoc_role[[5]] <- paste0("## ", gDoc_role[[5]])
    ## Put title 3.
    ## Tag each line of the gDoc role.
    # Initialize each line to title.
    tag_parts <- rep("titre", length(gDoc_role))
    # Tag description lines.
    n_description <- gDoc_role %>%
      stringr::str_detect("^Description$") %>%
      which()
    tag_parts[n_description:length(tag_parts)] <- "description"
    gDoc_role[n_description] <- paste0("### ", gDoc_role[n_description])
    # Tag exemple lines.
    n_exemple <- gDoc_role %>%
      stringr::str_detect("^Exemples$") %>%
      which()
    tag_parts[n_exemple:length(tag_parts)] <- "exemple"
    gDoc_role[n_exemple] <- paste0("### ", gDoc_role[n_exemple])
    # Tag advice lines.
    n_conseil <- gDoc_role %>%
      stringr::str_detect("^Mécaniques et Conseils$") %>%
      which()
    tag_parts[n_conseil:length(tag_parts)] <- "conseil"
    gDoc_role[n_conseil] <- paste0("### ", gDoc_role[n_conseil])
    # Tag bluff lines.
    n_bluff <- gDoc_role %>%
      stringr::str_detect("^Bluffer le rôle") %>%
      which()
    if (!identical(n_bluff, integer())) {
      tag_parts[n_bluff:length(tag_parts)] <- "bluff"
      gDoc_role[n_bluff] <- paste0("### ", gDoc_role[n_bluff])
    }
    # Tag counter lines.
    n_contre <- gDoc_role %>%
      stringr::str_detect("^Jouer contre") %>%
      which()
    if (!identical(n_contre, integer())) {
      tag_parts[n_contre:length(tag_parts)] <- "contre"
      gDoc_role[n_contre] <- paste0("### ", gDoc_role[n_contre])
    }
    # Check that there is bluff or counter title 3.
    if (identical(n_bluff, logical()) & identical(n_contre, logical()))
      stop("Neither bluff nor counter title has been found.")

    ## Add bullet list to exemple part.
    bullet_lines <- which(tag_parts == "exemple") %>%
      .[2:length(.)]
    gDoc_role[bullet_lines] <-
      gDoc_role[bullet_lines] %>% paste0("- ", .)

    ## Add bold beginning for each line.
    bold_lines <- c("conseil", "bluff", "contre") %>%
      plyr::llply(function(bold_part) {
        # DEBUG #
        # bold_part <- "conseil"
        which(tag_parts == bold_part) %>%
          .[2:length(.)]
      }) %>% unlist() %>% .[!is.na(.)]
    gDoc_role[bold_lines] <- gDoc_role[bold_lines] %>%
      paste0("**", .) %>%
      stringr::str_replace("((\\.|!))", "\\1**")

    ## Add empty lines.
    gDoc_role <- c(rbind(gDoc_role, rep("", length(gDoc_role))))

    ## Export text of the role.
    return(gDoc_role)
  }
)

# Export one Mark Down file for each role.
names(markDown_perRole) %>% plyr::l_ply(
  function(role) {
    writeLines(markDown_perRole[[role]],
               con = paste0(
                 "mdx/",
                 role %>%
                   tolower() %>%
                   stringi::stri_trans_general(id = "Latin-ASCII") %>%
                   stringr::str_replace_all(" ", "_"),
                 ".mdx"),
               useBytes = TRUE)
  }
)

# Check number of titles, titles 2 and titles 3.
markDown_check <- markDown_perRole %>%
  plyr::ldply(function(markDown_role) {
    c(
      markDown_role %>%
        stringr::str_detect("^#[^#]") %>%
        sum(),
      markDown_role %>%
        stringr::str_detect("^##[^#]") %>%
        sum(),
      markDown_role %>%
        stringr::str_detect("^###[^#]") %>%
        sum()
    )
  }) %>% magrittr::set_colnames(c("Role", "#", "##", "###"))

markDown_check[, -1] %>%
  unique()
