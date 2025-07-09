# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

# API 3 - Upside
@frappe.whitelist()
def wake():
    frappe.msgprint("Wake")
    return "Wake"

class Showroommanagement(Document):
    # Inside Class
    @frappe.whitelist()
    def welcome(self):
        frappe.msgprint("Welcome")
        return"Welcome"
    
    # Outside Class
@frappe.whitelist()
def out():
    frappe.msgprint("This is out of the class")
    return"This is out of the class"



