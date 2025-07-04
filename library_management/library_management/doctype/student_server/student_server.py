# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class StudentServer(Document):
    def validate(self):
        try:
            frappe.db.sl("""SELECT * FROM `tabFakeTable`""")
        except Exception as e:
            error_message = frappe.get_traceback()
            frappe.log_error(error_message, "Intentional Validation Error")
            frappe.msgprint(f"❌ Error occurred:\n<pre>{str(e)}</pre>")

    # Before Save - change pana pana wrk agum
    # def before_save(self):
    #     if self.first_name and self.last_name:
    #         self.full_name= self.first_name +" "+self.last_name
    
    # # After Save - save button click panadhum work agum
    # def after_save(self):
    #     if self.first_name and self.last_name:
    #         self.full_name= self.first_name +" "+self.last_name

# 	#Before Insert - the message will print bfr we click the save btn
#  def before_insert(self):
#     frappe.msgprint("Your record inserted successfully")

# #After Insert - the message will print afr we click the save btn
#  def after_insert(self):
#     frappe.msgprint("Your record inserted successfully")

# # Before Validate - condition badi mention panirukura field enter agalana save panuradhuku manadiyea and field la ena 
# # kudukuromo adhu op ah varum
#   def before_validate(self):
#     if not self.first_name:
#         self.first_name = "enter the name da dai"
        
# # After Validate - condition badi mention panirukura field enter agalana save panuradhuku manadiyea and field la ena 
# # kudukuromo adhu op ah varum
#   def after_validate(self):                #--------------------------------Work Agala
#     if not self.first_name:
#         self.first_name = "enter the name da thango"


#Before Submit-
# def before_submit(self):
#         frappe.msgprint("Your record inserted successfully")
        
# #After Submit- 
# def after_submit(self):                     #---------------------------work agala
#         frappe.msgprint("Your record inserted successfully")


##Brfore cancel - cancel panuradhuku manadi msg varum
# def before_cancel(self):
#     frappe.msgprint("Your record is about to be cancelled.")

# On cancel- after cancel
    # def on_cancel(self):
    # 	frappe.msgprint("Your record is about to be cancelled.")

# ## Before Delete
#    def on_trash(self):
#     	frappe.msgprint("Your record is about to be cancelled.")

##After Delete
#    def on_trash(self):
#     	frappe.msgprint("Your record is about to be cancelled.")

# ##Before Print
# def before_print(self, print_settings):
#         frappe.msgprint("Before print triggered via backend")



            