# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Baseapi(Document):
	pass

@frappe.whitelist()
#---------------------------------------------------------------------------------------
#----------------------------------------frappe.db.get_list-----------------------------

# def myData():
# 	data = frappe.db.get_list('Database API',
# 	filters = {
#       'location': ['like', '%Nellai%']
# },
               
        
# 		# filters=[
# 		# 	['received_date','between', ['2025-07-03','2025-07-07']]
# 		# ],
# 		# fields = ['name1','status','working_hours', 'received_date'],
# 		order_by = 'received_date asc'



# 		# filters= {
# 		# 	'received_date':[ '<','2025-07-03']
# 		# },
							
# 		)
	
# 	return data

#----------------------------------------frappe.db.get_list-----------------------------
    
# def myData():
#     data = frappe.db.get_all('Database API')
#     return data

# ---------------------------------------frappe.db.get_value-------------------------------

# def myData():
# #single Value
#     data = frappe.db.get_value('Database API', 'Tharun', 'salary')
#     return data

# #Multiple value
# 	status , location = frappe.get_value('Database API', 'Tharun', ['status' , 'location'])
# 	return status , location

# #as dict
# 	task_dict = frappe.get_value('Database API', 'Tharun', ['status' , 'location' ],as_dict=1)
# 	# task_dict.status
# 	return task_dict

# # with filters, will return the first record that matches filters
# 	status , location = frappe.get_value('Database API',{'status':'Paid'},['status' , 'location' ])
# 	return status , location  


# ---------------------------------------frappe.db.set_value-------------------------------

# update a field value
# def myData():
#     value = frappe.db.set_value('Database API', 'Ramesh', 'status', 'Paid',update_modified=False)
#     return value


# ---------------------------------------frappe.db.exists -------------------------------



# def myData():
#     value = frappe.db.exists('Database API',{'name':'Caldwell'})
#     return value

# ---------------------------------------frappe.db.count -------------------------------
# def myData():
#     value = frappe.db.count('Database API',{'status':'Paid'})
#     return value

# ---------------------------------------frappe.db.delete -------------------------------
# def myData():
#     value = frappe.db.delete('_Database API_')
#     return value

# ---------------------------------------frappe.db.truncate  -------------------------------

# def myData():
#     value = frappe.db.truncate('Database API')         #-----It will delet ethe datas in the table
    # return value

# ---------------------------------------frappe.db.commit  -------------------------------

# def myData():
#     frappe.db.set_value('Database API', 'Ramesh', 'status', 'Paid')
#     frappe.db.commit()   
#     return "Status updated and committed."

# ---------------------------------------frappe.db.savepoint -------------------------------
# def myData():
#     frappe.db.savepoint("before_update")
    
#     frappe.db.set_value('Database API', 'Suresh', 'status','Pending')
    
#     frappe.db.commit()
    
#     return 'You Got Save Point'


# ---------------------------------------frappe.db.rollback -------------------------------

# def myData():
    
    #Just Know what is roll Back
    
    
# ---------------------------------------frappe.db.sql -------------------------------------

#Fetching all the data through SQL
# def myData():
#     value = frappe.db.sql("SELECT * FROM `tabDatabase API`",as_dict=1)
#     return value

# ---------------------------------------frappe.db.multisql----------------------------------

# frappe.db.multisql is used to do all sql,mariadb, mysql, postger 

# ---------------------------------------frappe.db.rename_table ----------------------------------

# def myData():
#     frappe.db.rename_table("_Database API_", "Database api")
#     return "Message Change Successfully"       --------------------------Don't Use

# ---------------------------------------frappe.db.describe ----------------------------------
    
# def myData():
#     base = frappe.db.describe("Base api")
#     for i in base:
#         print(i, "------------------------")
#     return base

# ---------------------------------------frappe.db.change_column_type ----------------------------------
# we can change the data type of the particular field name but it will never change in UI it will chanege only in Data base 
# for Example
# frappe.db.change_column_type("tabBook", "isbn_number", "varchar(50)")



    









































#---------------------------------------------------------------------------------------
def my():
    doc = frappe.get_doc('Database API', 'Sundar')
    return doc.as_dict()	


