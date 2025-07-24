# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
import requests
import qrcode
import re
from frappe.model.document import Document
from frappe import _


class FoodOrder(Document):
    #--------------------------------------------------Item Selected-------------------
    # def validate(self):
    #     self.calculate_price()

    # def calculate_price(self):
    #     item_prices = {
    #         "Butter Chicken with Naan": 250,
    #         "Chicken Biryani": 180,
    #         "Paneer Butter Masala": 200,
    #         "Chicken Fried Rice": 170,
    #         "Dal Tadka with Jeera Rice": 160
    #     }
    #     selected_item = self.select_items
    #     quantity = self.quantity or 0
    #     if selected_item and selected_item in item_prices:
    #         price = item_prices[selected_item]
    #         self.item_price = price
    #         self.total_amount = price * quantity
    #     else:
    #         self.item_price = 0
    #         self.total_amount = 0

# -----------------------------------validation for the email-------------------------------------------------
    def validate(self): 
        self.validate_email_address()

    def validate_email_address(self):
        if self.email_address and not re.fullmatch(r"[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+", self.email_address):
            frappe.throw("Enter a valid email address.")
    
# ----------------------------- Geolocation Mapping to Address -----------------------------

def reverse_geocode(lat, lon):
    try:
        url = f"https://nominatim.openstreetmap.org/reverse?format=json&lat={lat}&lon={lon}"
        headers = {'User-Agent': 'FrappeApp'}
        response = requests.get(url, headers=headers, timeout=5)

        if response.status_code == 200:
            data = response.json()
            return data.get('display_name', 'Unknown location')
        else:
            frappe.throw("Failed to fetch location data from OpenStreetMap.")
    except Exception as e:
        frappe.log_error(frappe.get_traceback(), "Reverse Geocode Error")
        frappe.throw("Something went wrong while fetching the address.")
    
            
        
#  ----------------------------- Select Items -----------------------------



# ----------------------------- Scan Api -----------------------------

# def save_scanned_value(scanned_text, docname):
#     if docname and scanned_text:
#         frappe.db.set_value('Food Order', docname, 'scanned_result', scanned_text)
#         return "Scanned value saved successfully"






# -----------------------------------validation for the email-2 -------------------------------------------------
# def validation(self):
#     self.fetch_customer_details()
    
# def fetch_customer_details():
#     if self.regular_customer:
#         customer = frappe.get_doc('Regular Customer', self.regular_customer)
#         self.email_address = customer.email_address or ""
#         self.phone_number = customer.phone_number or ""
#         self.delivery_address = customer.delivery_address or ""




