# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt




import frappe
from frappe import _

def execute(filters):
    columns, data = get_columns(), get_values(filters or {})
    return columns, data

def get_columns():
    columns = [
        {
            'fieldname': 'article',
            'label': _('Article'),
            'fieldtype': 'Link',
            'options': 'Article',
            'width': 200
        },
        {
            'fieldname': 'library_member',
            'label': _('Library Member'),
            'fieldtype': 'Link',
            'options': 'Library Member',
            'width': 200
        },
        {
            'fieldname': 'age',
            'label': _('Age'),
            'fieldtype': 'Int',
            'width': 200
        }
    ]
    return columns

def get_values(filters):
    condition = "1=1"

    if filters.get("article"):
        condition += f" AND L.article = '{filters.get('article')}'"
    
    if filters.get("library_member"):
        condition += f" AND LM.library_member = '{filters.get('library_member')}'"
    
    if filters.get("age"):
        condition += f" AND C.age = {filters.get('age')}"

    query = f"""
        SELECT
    L.article,
    LM.library_member,
    C.age
FROM
    `tabLibrary Transaction` L
RIGHT JOIN
    `tabLibrary Membership` LM
    ON L.library_member = LM.library_member
LEFT JOIN
    `tabChild DT Membership` C
    ON C.parent = LM.name
WHERE
    {condition}
ORDER BY
    L.date DESC

    """
    return frappe.db.sql(query)




# import frappe
# from frappe import _


# def execute(filters):
#     columns, data = get_columns(), get_values(filters or {})
#     return columns, data

# def get_columns():
#     columns = [
#         {
#             'fieldname': 'article',
#             'label': _('Article'),
#             'fieldtype': 'Link',
#             'options': 'Article',
#             'width':200
#         },
#         {
# 			'fieldname':'library_member',
# 			'label':_('Library Member'),
# 			'fieldtype':'Link',
# 			'options': 'Library Member',
# 			'width':200
# 		},
#         {
# 			'fieldname':'age',
# 			'label':_('Age'),
# 			'fieldtype':'Int',
# 			'width':200
# 		}
#     ]
#     return columns

# def get_values(filters):
#     condition = "1=1"

#     if filters.get("article"):
#         condition += f" AND L.article = '{filters.get('article')}'"
        
#     if filters.get("library_member"):
#         condition += f" AND LM.library_member = '{filters.get('library_member')}'"
        
# 	if filters.get("library_membership"):
# 		condition += f" AND LMS.age='{filters.get('age')}'"

#     query = f"""
#         SELECT
#             L.article,
#             LM.library_member,
#             LMS.age
#         FROM
#             `tabLibrary Transaction` L
#         JOIN
# 			`tabLibrary Membership` LM
# 		ON
# 			L.library_member = LM.library_member
		
#   		JOIN
# 			`tabLibrary Membership` LMS
#    		ON
# 			LMS.age = L.name
#         WHERE
#             {condition}
#         ORDER BY
# 			L.date DESC
#     """
#     return frappe.db.sql(query)


# def execute(filters):
# 	columns,data = get_columns(),get_values(filters or {})
# 	return columns,data

# def get_columns():
# 	columns = [
# 	{
# 		'fieldname':'article',
#    		'label':_('Article'),
# 	 	'fieldtype':'Link',
# 	  	'options':'Article'
# 	}
# ]
# 	return columns

# def get_values(filters):
# 	condition = "1=1"
	
# 	if filters.get("article"):
# 		condition += f" AND L.article = '{filters.get('article')}'"
		
# 	query=f"""
# 		SELECT
# 			L.article
# 		FROM
# 			`tabLibrary Transaction`L
# 		WHERE
# 			{condition}
# 		"""
#   	return frappe.db.sql(query)
	
