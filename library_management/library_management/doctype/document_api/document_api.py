import frappe
from frappe.model.document import Document

class DocumentAPI(Document):
    pass

@frappe.whitelist()
# ------------------------------------------------
#----------------------------frappe.get_doc-----------------------------------

# def myDoc():
#     doc = frappe.get_doc("Document API", "Mari")
#     doc.reload()
#     return doc.as_dict()

# -----------------------------frappe.get_last_doc-----------------------------------

# def myDoc():
#     doc = frappe.get_last_doc("Document API", filters={"status": "Paid"})
#     return doc.as_dict()

# -----------------------------frappe.get_all----------------------------------------

#  def myDoc():
#     doc = frappe.get_cached_doc("Document API", 'Sanjesh')       ## Doubt

#-------------------------------frappe.new_doc---------------------------------------
# Document Method
# -----------------------------------doc.insert------------------------------------------

# def myDoc():
#     doc = frappe.new_doc("Document API") 
#     doc.name1 = 'Raghu'                  
#     doc.salary = '20000'
#     doc.working_hours = '5'
#     doc.status = 'Paid'
#     doc.insert()            ------------------------------------ # Document Method
#     return doc.name1

# --------------------------------farppe.delete_doc-----------------------------------

# def myDoc():
#     frappe.delete_doc("Document API" , "Raghu")
#     return "Your Document is deleted"

# ---------------------------------frappe.rename_doc-----------------------------------


# def myDoc():
#     frappe.rename_doc("Document API" , "Gurusundar" , "Sundar")
#     return "Rename is done"


# ---------------------------------frappe.get_meta--------------------------------------

# def myDoc():
#     meta = frappe.get_meta("Document API")      
#     has_status = meta.has_field('status')           
#     custom_fields = meta.get_custom_fields()  

#     return {
#         "has_status": has_status,
#         "custom_fields": custom_fields
#     }

# ====================================================================================================
# Document Method

# -----------------------------------doc.get_doc_before_save ------------------------------------------
# def myDoc():
#     doc = frappe.get_doc("Document API" , 'Sudha')
#     old_doc = doc.get_doc_before_save()
#     if old_doc and doc.status != old_doc.status:
#         frappe.msgprint(f"Status changed from {old_doc.status} to {doc.status}")
#     return doc.name

# ----------------------------------------------Append--------------------------------------------------


# def myDoc():
#     doc = frappe.get_doc( "Document API", "Sudha" )
#     doc.append( "details",{
#         "age" : "45",
#         "field" : "Manager"
#     } )
#     doc.save()
#     frappe.db.commit()
#     return f"Your Child Table is Updated {doc.name} "

# ------------------------------------------------doc.get_url -------------------------------------------

# def myDoc():
#     doc = frappe.get_doc( "Document API", 'Sundar')
#     url = doc.get_url()
    
#     return url

# ------------------------------------------------  doc.add_comment ---------------------------------------

# def myDoc():
#     doc = frappe.get_doc( "Document API" , 'Sundar')
#     doc.add_comment("Comment", "Hii this is Khaira")
    
#     return "Success"

# ------------------------------------------------- doc.add_seen -----------------------------------------
# def myDoc():
#     doc = frappe.get_doc("Document API", "Sundar")
#     doc.add_seen()
    
#     seen_by = getattr(doc, "_seen_by", [])      

#     return {
#         "message": "Added seen successfully",
#         "seen_by": seen_by
#     }
    
# ------------------------------------------------- doc.add_viewed ---------------------------------------
# def myDoc():
#     doc = frappe.get_doc("Document API", "Sundar")
#     doc.add_viewed()
#     return f"Total views: {doc.total_views}"



















# ------------------------------------------------------------------------------







def my():
    doc = frappe.get_last_doc("Document API", filters={"status": "Paid"})
    return doc.as_dict()