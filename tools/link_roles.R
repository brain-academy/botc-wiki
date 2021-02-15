# link_roles.R
# Link roles to pages in the plain text.


# Use a library for piping.
library(magrittr)


# Set the working directory to the directory of the script.
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))


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
  stringr::str_replace("^Pooka$", "Pukka")

# Add a suffix to avoid matching "Po" in whole word as "Pour" or "Pouvoir".
tags_input <- list_roles %>% paste0("\\b", ., "\\b")


# Load Tags File.
list_tags <- readLines(con = "../src/components/role/role-component.tsx",
                       encoding = "UTF-8")
# Extract Tags.
tags_output <- list_tags %>%
  .[stringr::str_detect(., "export const ")] %>%
  stringr::str_replace("^export const ", "") %>%
  stringr::str_extract("[A-Z_]+") %>%
# Convert into links.
  paste0("<Role.", ., " />")


# Apply on each role file.
plyr::l_ply(
  list_files,
  function(role_file) {
    # Get the path of the input file.
    input_file <- paste0("../docs/roles_prep/", role_file)
    # Open the role file.
    role_text <- readLines(con = input_file,
                           encoding = "UTF-8")
    # Filter the lines to convert.
    #   1) Remove the title.
    lines_to_convert <- !stringr::str_detect(role_text, "title")
    # For each role, replace the plain text by its tag.
    role_text[lines_to_convert] <- purrr::reduce2(
      .x = tags_input,
      .y = tags_output,
      .f = stringr::str_replace_all,
      .init = role_text[lines_to_convert])
    # Get the path of the output file.
    output_file <- paste0("../docs/roles/", role_file)
    # Export the new role file with roles converted into tags.
    writeLines(role_text,
               con = output_file,
               useBytes = TRUE)
  })
