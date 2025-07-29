# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class DialogPython(Document):
#--------------------------------------frappe.msgprint----------------------------------------------------
	def before_save(self):
# #Normal Message
# 		frappe.msgprint("This Message is printed")
# #Normal Message with Title
# 		frappe.msgprint(msg = "Done", title = "Finish😎")
# #Message with list
# 		frappe.msgprint(
# 			msg = ["Item A created", "Item B is Updated"],
# 			title = "Result",
# 			as_list = True
# 		)
# #as_table
# 		html_data = """
# 			<table class = "table table-bordered">
# 				<thead>
# 					<tr><th>Item💤</th><th>Status😶</th></tr>
# 				</thead>
# 				<tbody>
# 					<tr><td>Item A</td><td>Created</td></tr>
#     				<tr><td>Item B</td><td>Updated</td></tr>
# 				</tbody>
# 			</table>
#    """
		# frappe.msgprint(
		# 	msg = html_data,
		# 	title = "Complete Results",
   		# 	wide = True
		# )

# Creating the button
		# frappe.msgprint(
		# 	msg = """
		# 		<p>Your File is Done.</p>
		# 		<a href = "/food_order_sec.html" class = "btn btn-primary" style = "margin-top:10px;">View the page</a>
    	# 		""",
		# 	title = "Backup Status",
		# 	indicator = "green",
		# 	wide = True
		# )
  
#Primary Action
		frappe.msgprint(
			msg = "Would you like to bavck up all the data",
			title = "Backup",
			primary_action = {
				"lable" : "Create Backup",
				"server_action" : "library_management.library_management.doctype.dialog_python.dialog_python.create_query_builder_record",
				"hide_on_success" : True
			}
		)
  
#======================================frappe.throw==============================================
#Basic Error
		# frappe.throw("This is a Dummy Error")
#Custom Exception Class
		# frappe.throw(
		# 	msg = 'This is a Validation Error',
		# 	exc = frappe.ValidationError 
		# )
#Custom Title
		# frappe.throw(
		# 	title = "Alert🚩",
		# 	msg = "You Have the limited access..."
		# )
#Minimize the message box
		# frappe.throw(
		# 	title = "Minimize",
		# 	msg = "It can Minimizable", #-------It'll only works in js 
		# 	is_minimizable = True
		# )
#Wide message Box
		# frappe.throw(
		# 	title = "Wide",
		# 	msg = "It can wide",
		# 	wide = True
		# )s
#Mesage as a List
		# frappe.throw(
		# 	msg = [
		# 		"This is the first message.",
		# 		"This is ths second message.",
		# 		"This is the third message."
		# 	],
		# 	title = "This is the Validation Error",
		# 	as_list = True
		# )
#Primary Action in Error

		frappe.throw(
			msg = "Primary Action Error",
			title = "Error Primary",
			primary_action = {
				"label" : "Retry Backup",
				"server_action" : "library_management.library_management.doctype.dialog_python.dialog_python.create_query_builder_record",
				"hide_on_success" : True 
			}
		)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
@frappe.whitelist()
def create_query_builder_record():
	new_record = frappe.get_doc({
		"doctype": "Dialog Python",
		"name1": "Sundar Mariappan",
	})

	new_record.insert()
	frappe.db.commit()
	return {"name": new_record.name}

