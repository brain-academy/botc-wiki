# link_roles.R
# Link roles to pages in the plain text.


# Use a library for piping.
library(magrittr)


# Set the working directory to the directory of the script.
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))


# Load Tags File.
list_tags <- readLines(con = "../src/components/role/role-component.tsx",
                       encoding = "UTF-8")

# Get the list of the roles.
list_roles <- list_tags %>%
  # Extract the list of roles from the file.
  .[stringr::str_detect(., "export const ")] %>%
  stringr::str_replace("^export const ", "") %>%
  stringr::str_extract("[A-Z_]+") %>%
  # Capitalize the first letter.
  stringr::str_to_title() %>%
  # Replace underscore by space.
  stringr::str_replace_all("_", " ") %>%
  # Fix "Croqueuse d'hommes".
  stringr::str_replace("^Croqueuse D Hommes$", "Croqueuse d'hommes") %>%
  # Fix "Pukka".
  stringr::str_replace("^Pooka$", "Pukka") %>%
  # Fix names with French accents.
  stringr::str_replace("^Commere$", "Commère") %>%
  stringr::str_replace("^Enqueteur$", "Enquêteur") %>%
  stringr::str_replace("^Menestrel$", "Ménestrel") %>%
  stringr::str_replace("^Sorciere$", "Sorcière") %>%
  stringr::str_replace("^Soûlard$", "Soûlard") %>%
  stringr::str_replace("^Sorciere$", "Sorcière") %>%
  stringr::str_replace("^Traitre$", "Traître")

# Add a suffix to avoid matching "Po" in whole word as "Pour" or "Pouvoir".
tags_input <- list_roles %>% paste0("\\b", ., "\\b")
# Extract Tags.
tags_output <- list_tags %>%
  .[stringr::str_detect(., "export const ")] %>%
  stringr::str_replace("^export const ", "") %>%
  stringr::str_extract("[A-Z_]+") %>%
  # Convert into links.
  paste0("<Role.", ., " />")

# List input files.
input_files <- list.files("mdx/", full.names = TRUE)

# Apply on each role file.
plyr::l_ply(
  input_files,
  function(input_file) {
    # DEBUG #
    # input_file <- input_files[[1]]
    # Open the role file.
    role_text <- readLines(con = input_file,
                           encoding = "UTF-8")
    # Handle the title.
    title <- role_text[[1]]
    role_text <- role_text[2:length(role_text)]

    # For each role, replace the plain text by its tag.
    role_text <- purrr::reduce2(
      .x = tags_input,
      .y = tags_output,
      .f = stringr::str_replace_all,
      .init = role_text)
    # Replace the module.
    role_text <- stringr::str_replace_all(
      string = role_text,
      pattern = "Bad Moon Rising",
      replacement = "<Module.BADMOONRISING />")

    # Add header.
    header <- c(
      "---",
      paste0("title: ",
             title %>%
               stringr::str_replace("^# ", "")),
      "---",
      "",
      "import * as Module from '/src/components/module/module-component'",
      "import * as Role from '/src/components/role/role-component'",
      "",
      paste0(
        "<img src='/img/blood-on-the-clocktower/roles/",
        input_file %>%
          basename() %>%
          tools::file_path_sans_ext(),
        ".png' height='150' />"
      ),
      ""
    )
    role_text <- c(header, role_text)

    # Get the path of the output file.
    output_file <- paste0("ready/", basename(input_file))
    # Export the new role file with roles converted into tags.
    writeLines(role_text,
               con = output_file,
               useBytes = TRUE)
  })
