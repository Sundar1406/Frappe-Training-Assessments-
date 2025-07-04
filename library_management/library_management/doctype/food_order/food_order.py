# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _  # for translation support

class FoodOrder(Document):
    pass

# @frappe.whitelist(allow_guest=True)
# def create_rec(name1=None, delivery_address=None):
#     frappe.log_error(f"name1={name1}, address={delivery_address}", "DEBUG")  # Log inputs

#     if not name1 or not delivery_address:
#         frappe.throw("name1 and delivery_address are required")

#     doc = frappe.new_doc("Food Order")
#     doc.name1 = name1
#     doc.delivery_address = delivery_address
#     doc.insert()
#     return {"message": f"{doc.name1} record created"}





    