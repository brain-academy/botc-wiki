import os
import shutil

DEST_PATH = "./data"


def reset_path():
    '''Removes all files to import them anew'''
    if os.path.exists(DEST_PATH):
        shutil.rmtree(DEST_PATH)


def get_dest_path(file_path):
    if file_path.strip() == '':
        return DEST_PATH

    path = DEST_PATH

    if any(fn in file_path for fn in ["regles", "deroulement", "glossaire"]):
        path = DEST_PATH + "/regles"

    return file_path.replace('../docs', path).replace('-', '')
