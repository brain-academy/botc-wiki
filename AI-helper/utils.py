import os
import shutil

DEST_PATH = "./data"


def reset_path():
    '''Removes all files to import them anew'''
    if os.path.exists(DEST_PATH):
        shutil.rmtree(DEST_PATH)


def get_dest_path(file_path):
    path = ''
    if any(fn in file_path for fn in ["regles", "deroulement", "glossaire"]):
        path = DEST_PATH + "/regles"

    path = DEST_PATH

    return file_path.replace('../docs', path).replace('-', '')
