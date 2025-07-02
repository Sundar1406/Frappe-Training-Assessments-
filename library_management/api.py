# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

# @frappe.whitelist()
# def movieName():
#     doc = frappe.get_doc({
#         "doctype": "Events",
#         "movie_name": "Kubera",
#         "theater": "Ram Muthuram cinimas",
#         "count": 4,
#         "ticket_price": 1000
#     })
#     doc.insert()
#     frappe.db.commit()
#     return doc.name
