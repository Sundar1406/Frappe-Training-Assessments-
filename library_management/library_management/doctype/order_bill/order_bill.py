# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import qrcode
import base64
from io import BytesIO
from frappe import _


class OrderBill(Document):
	pass

# ----------------------------- QR code -----------------------------
@frappe.whitelist()
def generate_qr_code(data):
    
	qr = qrcode.QRCode(version=1, box_size=10, border=5)
	qr.add_data(data)                                           # Generate QR code image
	qr.make(fit=True)
	img = qr.make_image(fill_color="black", back_color="white")
	
	buffered = BytesIO()
	img.save(buffered, format="PNG")                         # Convert image to base64
	img_str = base64.b64encode(buffered.getvalue()).decode()
	return f"data:image/png;base64,{img_str}"


# ----------------------------- Create Order Bill from Food Order -----------------------------

@frappe.whitelist(allow_guest=True)
def create_order_bill(food_order_name):
    if not frappe.db.exists("Food Order", food_order_name):
        frappe.throw(_("Please save the Food Order before creating a bill."))

    # Fetch the existing Food Order
    food_order = frappe.get_doc("Food Order", food_order_name)
    
    # Create a new Order Bill
    order_bill = frappe.new_doc("Order Bill")
    order_bill.name1 = food_order.name1
    order_bill.email_address = food_order.email_address
    order_bill.phone_number = food_order.phone_number
    order_bill.delivery_address = food_order.delivery_address
    order_bill.select_items = food_order.select_items
    order_bill.item_price = food_order.item_price
    order_bill.quantity = food_order.quantity
    order_bill.total_amount = food_order.total_amount

    # Copy child table items
    for item in food_order.food_child:
        order_bill.append("food_child", {
            "our_rules": item.our_rules,
            "todays_offer": item.todays_offer,
            "our_duration": item.our_duration
        })

    # Save the new bill
    order_bill.insert()

    # Return the Order Bill name
    return order_bill.name




