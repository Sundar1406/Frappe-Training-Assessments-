def on_file_uploaded(doc, method):
    if doc.file_name == "http://127.0.0.1:8123/private/files/Screenshot%20(27).png":
        print("🔊 'Error http://127.0.0.1:8123/private/files/Screenshot%20(27).png' was uploaded!")

def on_file_deleted(doc, method):
    if doc.file_name == "http://127.0.0.1:8123/private/files/Screenshot%20(27).png":
        print("🗑️ 'Error http://127.0.0.1:8123/private/files/Screenshot%20(27).png' was deleted!")
