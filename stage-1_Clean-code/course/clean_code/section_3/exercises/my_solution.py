# (c) Jose Contreras
from os import path, makedirs
from pathlib import Path

class DiskStorage:
    def __init__(self, storage_directory_name):
        self.storage_directory_name = storage_directory_name

    def get_directory_path(self):
        return Path(self.storage_directory_name)

    def create_directory(self):
        path_exists = path.exists(self.get_directory_path())
        if (not path_exists):
            makedirs(self.storage_directory_name)

    # WARNING: Directory must exist in advance
    def insert_file(self, file_name, content):
        # TODO: Add proper error handling
        file_path = self.get_directory_path() / file_name
        file = open(file_path, 'w')
        file.write(content)
        file.close()

log_storage = DiskStorage('logs')

log_storage.create_directory()
log_storage.insert_file('test.txt', 'Test')