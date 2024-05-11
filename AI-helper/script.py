from glob import glob
import os
import re
from utils import get_dest_path
from utils import reset_path


def main():
    reset_path()

    # For all files to format
    for file_path in get_files_to_format():
        dest_path = get_dest_path(file_path)

        file_content = remove_unwanted_lines(file_path)

        if '/roles/' in file_path:
            # If it is a role, save its description
            save_role_description(file_path)

            # Remove the role's description
            file_content = re.search(r'(?P<NotDesc>Exemples(.|\n)+)',
                                    file_content).group('NotDesc').strip()

        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with open(dest_path, 'w') as file:
            file.write(file_content)

    with open(dest_path + "/regles/Explication_regles.txt", 'w') as file:
        file.write(open("./Explication_regles.txt", 'r').read())


def save_role_description(file_path):
    file_content = remove_unwanted_lines(file_path)

    # Filters only the description
    role_description = re.match(r'(?P<Description>(.|\n)+(?=Exemples))',
                            file_content).group('Description').strip()

    file_path = get_dest_path(file_path).replace(
        '/roles/', '/roles/descriptions/')

    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path.replace('-', ''), 'w') as file:
        file.write(role_description)


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
    file_content = open(file_path, 'r').read()

    def link_setter(pat, str): return '<' + str + \
        pat.group(1).lower().replace("_", " ") + '/>'

    def role_setter(pat): return link_setter(pat, 'Role')
    def fabled_setter(pat): return link_setter(pat, 'Fabled')
    def module_setter(pat): return link_setter(pat, 'Module')

    regex_to_replace = [('###(.+)', '\\1 :'),
                        ('<Role(.+?)/>', role_setter),
                        ('<Fabled(.+?)/>', fabled_setter),
                        ('<Module(.+?)/>', module_setter)]

    regex_patterns_to_delete = ['---\\n',
                                'title.+\\n',
                                'import .+\\n',
                                '\*\*',
                                '<Role ',
                                '<Fabled ',
                                '<Module ',
                                ' />',
                                '/>',
                                '.+header.+\\n',
                                '_'
                                ]

    for r in regex_to_replace:
        file_content = re.sub(r[0], r[1], file_content)

    file_content = re.sub(
        '|'.join(regex_patterns_to_delete), '', file_content).strip()

    return file_content


if __name__ == '__main__':
    main()
