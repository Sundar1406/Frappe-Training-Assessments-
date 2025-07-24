import frappe
from frappe import _
from frappe.model.document import Document

# @frappe.whitelist(allow_guest=True)
# def create_new_food_order():
#     """Create a new Food Order document and return the URL"""
#     try:
#         food_order = frappe.new_doc("Food Order")
#         food_order.insert(ignore_permissions=True)
#         frappe.db.commit()
#         return {"name": food_order.name, "url": f"/app/food-order/{food_order.name}"}
#     except Exception as e:
#         frappe.log_error(f"Error creating new food order: {str(e)}")
#         frappe.throw(_("Failed to create new food order"))

# @frappe.whitelist(allow_guest=True)
# def create_food_order(name1=None, select_items=None, quantity=None, total_amount=None, delivery_address=None):
#     """Create a complete food order with all details"""
#     if not all([name1, select_items, quantity, total_amount, delivery_address]):
#         frappe.throw(_("All fields are required to create a food order."))
        
#     try:
#         food_order = frappe.new_doc("Food Order")
#         food_order.name1 = name1
#         food_order.select_items = select_items
#         food_order.quantity = quantity
#         food_order.total_amount = total_amount
#         food_order.delivery_address = delivery_address
#         food_order.insert(ignore_permissions=True)
#         frappe.db.commit()
#         return {"name": food_order.name, "url": f"/app/food-order/{food_order.name}"}
#     except Exception as e:
#         frappe.log_error(f"Error creating food order: {str(e)}")
#         frappe.throw(_("Failed to create food order"))



