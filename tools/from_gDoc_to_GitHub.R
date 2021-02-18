# from_gDoc_to_GitHub.R
# Link roles to pages in the plain text.


# Use a library for piping.
library(magrittr)

# Set the working directory to the directory of the script.
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# Load gDoc input as txt.
gDoc <- readLines(con = "gDoc.txt",
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
    # Catch and move the original name.
    title <- gDoc_role[[1]] %>%
      stringr::str_replace("\\(.+\\)$", "")
    original_name <- gDoc_role[[1]] %>%
      stringr::str_extract("\\(.+\\)$") %>%
      stringr::str_replace("\\(", "") %>%
      stringr::str_replace("\\)", "") %>%
      paste0("Nom original : ", .)
    gDoc_role <- c(title, original_name, gDoc_role[2:length(gDoc_role)])
    # Put the first line as title.
    gDoc_role[[1]] <- paste0("#", gDoc_role[[1]])
    # Put the second, third and fourth line as title 2.
    gDoc_role[[2]] <- paste0("##", gDoc_role[[2]])
    gDoc_role[[3]] <- paste0("##", gDoc_role[[3]])
    gDoc_role[[4]] <- paste0("##", gDoc_role[[4]])
    # Put title 3.
    gDoc_role[stringr::str_detect(gDoc_role, "^Description$")] <-
      paste0(
        "###",
        gDoc_role[stringr::str_detect(gDoc_role, "^Description$")]
      )
    gDoc_role[stringr::str_detect(gDoc_role, "^Exemples$")] <-
      paste0(
        "###",
        gDoc_role[stringr::str_detect(gDoc_role, "^Exemples$")]
      )
    gDoc_role[stringr::str_detect(gDoc_role, "^Mécaniques et Conseils$")] <-
      paste0(
        "###",
        gDoc_role[stringr::str_detect(gDoc_role, "^Mécaniques et Conseils$")]
      )
    gDoc_role[stringr::str_detect(gDoc_role, "^Bluffer le rôle")] <-
      paste0(
        "###",
        gDoc_role[stringr::str_detect(gDoc_role, "^Bluffer le rôle")]
      )
    gDoc_role[stringr::str_detect(gDoc_role, "^Jouer contre")] <-
      paste0(
        "###",
        gDoc_role[stringr::str_detect(gDoc_role, "^Jouer contre")]
      )

    # Export text of the role.
    return(gDoc_role)
  }
)

# Export one Mark Down file for each role.
names(markDown_perRole) %>% plyr::l_ply(
  function(role) {
      writeLines(markDown_perRole[[role]],
                 con = paste0("new_roles/", role, ".mdx"),
                 useBytes = TRUE)
  }
)
