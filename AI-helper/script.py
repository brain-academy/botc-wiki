from glob import glob
import os
import shutil


def get_files_to_format():
    path = "../docs/**/*.mdx"
    ignored = ["legendaires.mdx",
               "roles.mdx",
               "index.mdx",
               "/fiches/",
               "guide_laissez_un_faire.mdx",
               "/modules/"]

    files = glob(path, recursive=True)
    for file in files:
        if any(ign in file for ign in ignored):
            continue  # skip this file
        yield file


def remove_unwanted_lines(file_path):
    file_content = open(file_path, 'r')
    return file_content


dest_path = "./formatted-files"
if os.path.exists(dest_path):
    shutil.rmtree(dest_path)

for file_path in get_files_to_format():
    file_content = remove_unwanted_lines(file_path)
    file_path = file_path.replace("../docs", dest_path)

    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, 'w')as file:
        file.write(file_content)
