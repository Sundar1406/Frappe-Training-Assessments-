# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import qrcode
import base64
from io import BytesIO


class OrderBill(Document):
	pass

# ----------------------------- QR code -----------------------------
@frappe.whitelist()
def generate_qr_code(data):
	# Generate QR code image
	qr = qrcode.QRCode(version=1, box_size=10, border=5)
	qr.add_data(data)
	qr.make(fit=True)
	img = qr.make_image(fill_color="black", back_color="white")
	# Convert image to base64
	buffered = BytesIO()
	img.save(buffered, format="PNG")
	img_str = base64.b64encode(buffered.getvalue()).decode()
	return f"data:image/png;base64,{img_str}"

