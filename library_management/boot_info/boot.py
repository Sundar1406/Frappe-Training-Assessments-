import frappe

def custom_boot_secssion(bootinfo):
    bootinfo.custom_message = "Welcome to Food Order App!"
    bootinfo.food_order = frappe.get_all("Food Order", fields = ["name1", "email_address", "phone_number", "delivery_address"])  