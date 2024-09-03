from script import *


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


roles_json = get_roles_json()


description_type = "-Villageois gentil-" if (
    x["name"] == 'Imp' for x in list(roles_json.get("VILLAGEOIS").values())) else ""

# print(roles_json.get("VILLAGEOIS").values())
# print(description_type)

# e = [x["name"] == 'Imp' for x in roles_json.get("VILLAGEOIS").values()]
# print(e)

print("result", get_description_type('Soûlard'))
