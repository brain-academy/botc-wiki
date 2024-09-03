from glob import glob
import os
import re
from utils import get_dest_path
from utils import reset_path
from constants import *
import json


def main():
    reset_path()

    # For all roles
    parse_roles_to_json()

    # For all files to format
    for file_path in get_files_to_format():
        dest_path = get_dest_path(file_path)

        file_content = remove_unwanted_lines(file_path)

        # if '/roles/' in file_path:
        #     # If it is a role, save its description
        #     save_role_description(file_path)

        #     # Remove the role's description
        #     file_content = re.search(r'(?P<NotDesc>Exemple(.|\n)+)',
        #                              file_content).group('NotDesc').strip()

        os.makedirs(os.path.dirname(dest_path), exist_ok=True)
        with open(dest_path, 'w') as file:
            file.write(file_content)

    with open(get_dest_path("") + "/Explication_regles.txt", 'w') as file:
        file.write(open("./Explication_regles.txt", 'r').read())


# def save_role_description(file_path):
#     file_content = remove_unwanted_lines(file_path)

#     # Filters only the description
#     role_description = re.search(r'(?P<Description>(.|\n)+(?=Exemple))',
#                                  file_content).group('Description').strip()

#     role_name = re.search(
#         r'(?<=\/)([^/]+)\.mdx', file_path).group(1).replace('-', ' ')

#     # Replaces 'Description' with 'Description "roleName"'
#     role_description = re.sub(
#         'Description', 'Description ' + role_name, role_description)

#     file_path = get_dest_path(file_path).replace(
#         '/roles/', '/roles/descriptions/')

#     os.makedirs(os.path.dirname(file_path), exist_ok=True)
#     with open(file_path.replace('-', ''), 'w') as file:
#         file.write(role_description)


def parse_roles_to_json():
    roles_json_result = {}
    travellers = [
        "bouc-emissaire",
        "bureaucrate",
        "mendiant",
        "vengeur",
        "voleur",
        "apprenti",
        "archeveque",
        "magistrat",
        "matrone",
        "necromant",
        "barista",
        "boucher",
        "collecteur-d-os",
        "deviant",
        "fille-de-joie",
        "gangster"]

    roles_json = get_roles_json()

    for role_path in get_roles():
        if any(traveller in role_path for traveller in travellers):
            continue  # skip this file
        file_content = parse_file(role_path)

        # Get the real name of the role
        role_name = re.search(REGEX_ROLE_NAME, file_content).group('RoleName')

        # Matches the description content until the next '###'
        description = re.search(
            REGEX_DESCRIPTION, file_content).group("Description")

        # Exemples
        examples = re.search(REGEX_EXAMPLES, file_content).group("Examples")

        # Mécaniques & conseils
        # !!! for travellers = 'Si vous êtes gentil|maléfique ' => excluded for now
        mecanics = re.search(REGEX_MECANICS, file_content).group("Mecanics")

        # Bluffer
        re_bluff = re.search(REGEX_BLUFF, file_content)
        bluff = re_bluff.group("Bluff") if re_bluff is not None else ""

        # Combattre
        re_fight = re.search(REGEX_FIGHT, file_content)
        fight = re_fight.group("Fight") if re_fight is not None else ""

        # Comment conter
        re_storytelling = re.search(REGEX_STORYTELLING, file_content)
        storytelling = re_storytelling.group(
            "Storytelling") if re_storytelling is not None else ""

        description_type = get_description_type(role_name)

        roles_json_result[role_name] = {
            "description": description_type + " " + description.strip(),
            "examples": examples.strip(),
            "mecanics_tips": mecanics.strip(),
            "bluff": bluff.strip(),
            "fight": fight.strip(),
            "storytelling": storytelling.strip(),
        }

    data_json_path = './data/data.json'
    os.makedirs(os.path.dirname(data_json_path), exist_ok=True)
    with open(data_json_path, 'w') as file:
        file.write(json.dumps(roles_json_result, indent=4,
                   ensure_ascii=False).replace("\u00a0", ""))


def get_roles():
    path = "../docs/roles/*"

    files = sorted(glob(path, recursive=True))
    for file in files:
        yield file


def get_description_type(role_name):
    roles_json = get_roles_json()
    for element in roles_json.get("VILLAGEOIS").values():
        if element["name"] == role_name:
            return "-Villageois gentil-"

    for element in roles_json.get("ETRANGER").values():
        if element["name"] == role_name:
            return "-Etranger gentil-"

    for element in roles_json.get("SBIRE").values():
        if element["name"] == role_name:
            return "-Sbire maléfique-"

    for element in roles_json.get("DEMON").values():
        if element["name"] == role_name:
            return "-Démon maléfique-"

    return ""


def get_roles_json():
    path = "../static/api/roles.json"

    file_content = json.loads(open(path, 'r').read())

    # list(file_content.get("VILLAGEOIS").values())[0].get("name")
    return file_content


def get_files_to_format():
    path = "../docs/**/*.mdx"
    ignored = ["legendaires.mdx",
               "roles.mdx",
               "index.mdx",
               "/fiches/",
               "/roles/",
               "guide_laissez_un_faire.mdx",
               "/modules/"]

    files = glob(path, recursive=True)
    for file in files:
        if any(ign in file for ign in ignored):
            continue  # skip this file
        yield file


def parse_file(file_path):
    file_content = open(file_path, 'r').read()

    def link_setter(pat): return pat.group(1).lower().replace("_", " ")

    regex_to_replace = [('<Role(.+?)/>', link_setter),
                        ('<Fabled(.+?)/>', link_setter),
                        ('<Module(.+?)/>', link_setter),
                        ('haque nuit\*(?!\*)', 'haque nuit (sauf la première)')]

    for r in regex_to_replace:
        file_content = re.sub(r[0], r[1], file_content)

    return file_content


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
                        ('<Module(.+?)/>', module_setter),
                        ('haque nuit\*(?!\*)', 'haque nuit (sauf la première)')]

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
