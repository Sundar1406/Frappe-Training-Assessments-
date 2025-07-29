# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from pypika.functions import Count
from pypika.functions import Sum
from pypika.functions import Avg
from pypika.functions import Min
from pypika.functions import Max
from frappe.query_builder.functions import Abs
from frappe.query_builder.functions import IfNull
from frappe.query_builder.functions import Concat
from frappe.query_builder.functions import Extract
from frappe.query_builder.functions import Now

class QueryBuilder(Document):
#----------------------------------------------------------------------------------------------------
    # query = frappe.db.sql("""
    #     SELECT `name1` `emp_name`,`age` `emp_age` FROM `tabQuery Builder`
    # """)
    # print("====================================", query)
#-----------------------------------to get the name----------------------------------
    # query = frappe.qb.get_query("Query Builder")
    # result = query.run(as_dict=True)  
    # print("------------------------------------------------", result)
    
#----------------------------------to get the name, age-------------------------------
    # query = frappe.qb.get_query("Query Builder", fields = ["name1", "age", fav_book])
    # result = query.run(as_dict=True)  
    # print("------------------------------------------------", result)
    
    
#------------------------------------changing the field name using AS-----------------------------------
    # query = frappe.qb.get_query("Query Builder", fields = ["query_child.GST as Emp_salary_gst"], filters = {"name1" : "Esakki"})
    # result = query.run(as_dict=True)
    # print("------------------------------------------------", result)
    

#------------------------------------getting all, only one the child Info----------------------------------
    
    # query = frappe.qb.get_query("Query Builder", fields = ["query_child.total_amount", "query_child.GST", "query_child.date"], filters = {"name1" : "Sundar"}, limit = (1))
    # result = query.run(as_dict = True)
    # print ("-----------------------------------------",result)
    #------------------------------------------------------------------
    # QueryBuilder = DocType("Query Builder")
    # ChildQuery = DocType("Child Query")
    # query = (
    #     frappe.qb.from_(ChildQuery)
    #  	.join(QueryBuilder)
    #  	.on(ChildQuery.parent == QueryBuilder.name)
    #  	.select(
    #     	ChildQuery.total_amount,
    #     	ChildQuery.GST,
    #     	ChildQuery.date
    #      )
    #   .where(QueryBuilder.name1 == "Sundar")
    #   .limit(1)
    #   )
    # result = query.run(as_dict=True)
    # print("========================---------------------------", result)

#------------------------------------------get the rec in linked doctype ------------------------------------------------ 
    # query = frappe.qb.get_query("Query Builder", fields = ["name1","age","fav_book.full_name"], 
    #                             filters = {"name" : "Sundar"})
    # result = query.run(as_dict = True)
    # print("---------------------------",result)
    
    
    
    
#=====================================================Pypika Functionz=====================================================

	# Child Table Total Count Of the record   
    # stu_rec = frappe.qb.DocType("Query Builder")
    # stu_chld = frappe.qb.DocType("Child Query")
    
    # query = (
	# 	frappe.qb.from_(stu_rec)
	# 	.join(stu_chld)
	# 	.on(stu_rec.name1 == stu_chld.parent)
	# 	.select(
	# 		stu_rec.name1,
	# 		Count(stu_chld.total_amount).as_("total Count"),
	# 	)
	# 	.where(stu_rec.name1 == "Sundar")
  
	# )
    # result = query.run(as_dict = True)
    # print("---------------------------------",result)
    
    
    
    # #Child Table Total Add(Sum) Of the record   
    # stu_rec = frappe.qb.DocType("Query Builder")
    # stu_chld = frappe.qb.DocType("Child Query")
    
    # query = (
	# 	frappe.qb.from_(stu_rec)
	# 	.join(stu_chld)
	# 	.on(stu_rec.name1 == stu_chld.parent)
	# 	.select(
	# 		stu_rec.name1,
	# 		Sum(stu_chld.total_amount).as_("Total Amount"),
	# 	)
	# 	.where(stu_rec.name1 == "Sundar")
	# ) 
    # result = query.run(as_dict = True)
    # print("---------------------------------",result)
    
    
    # #Child Table Finding the AVG of the records
    # std_rec = frappe.qb.DocType("Query Builder")
    # std_child = frappe.qb.DocType("Child Query")
    # query = (
	# 	frappe.qb.from_(std_rec)
  	# 	.join(std_child)
	# 	.on(std_rec.name1 == std_child.parent)
	# 	.select(
	# 		std_rec.name1,
   	# 		Avg(std_child.total_amount).as_("Average")
	# 	)
	# 	.where(std_rec.name1 == "Sundar")
	# )
    # res = query.run(as_dict = True)
    # print("---------------------------------------",res)
    
    
    # #Child Table Finding the Min of the records
    # stu_rec = frappe.qb.DocType("Query Builder")
    # stu_cild = frappe.qb.DocType("Child Query")
    
    # query = (
	# 	frappe.qb.from_(stu_rec)
	# 	.join(stu_cild)
	# 	.on(stu_rec.name1 == stu_cild.parent)
	# 	.select(
	# 		stu_rec.name1,
	# 		Min(stu_cild.total_amount).as_("Minimum Value")
	# 	)
	# 	.where(stu_rec.name1 == "Sundar")
	# )
    # result = query.run(as_dict = True)
    # print("------------------------------------", result)
    
    # #Child Table Finding the Max Value of the records
    # std_rec = frappe.qb.DocType("Query Builder")
    # std_cld = frappe.qb.DocType("Child Query")
    
    # query = (
	# 	frappe.qb.from_(std_rec)
	# 	.join(std_cld)
	# 	.on(std_rec.name == std_cld.parent)
	# 	.select(
	# 		std_rec.name1,
	# 		Max(std_cld.total_amount).as_("Maximum Value: ")
	# 	)
	# 	.where(std_rec.name1 == "Sundar")
	# )
    # res = query.run(as_dict = True)
    # print("--------------------------------",res)
    
#=================================================Scalar Functions================================================


 # #Abs Function
    # std_rec = frappe.qb.DocType("Query Builder")
    # std_child = frappe.qb.DocType("Child Query")
    
    # query = (
	# 	frappe.qb.from_(std_rec)
	# 	.join(std_child)
	# 	.on(std_rec.name1 == std_child.parent)
	# 	.select(
	# 		std_rec.name1,
	# 		Abs(std_child.total_amount).as_('It is give the value in positive event it is in negative')
	# 	)
  	# 	.where(std_rec.name1 == 'Sundar')
	# )
    # res = query.run(as_dict = True)
    # print("------------------------------------",res)


# #IfNull
#     std_rec = frappe.qb.DocType("Query Builder")
    
#     query = (
#         frappe.qb.from_(std_rec)
#         .select (
#             std_rec.name1,
# 			IfNull(std_rec.father_name,"Wilson").as_("If Null")
	# 	)
    #     .where(std_rec.name1 == "Sundar")
	# )
    # res = query.run(as_dict = True)
    # print("-----------------------------------", res)
    
    # #Concardination
    # std_rec = frappe.qb.DocType("Query Builder")
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         Concat(
    #             std_rec.name1,
    #             "(",
    #             std_rec.father_name,
    #             "-",
    #             std_rec.fav_book,
    #             ")"
    #             ).as_("Concatination")
    #         )
    #     .where(std_rec.name1 == "Sundar")
    #     )
    # res = query.run(as_dict=True)
    # print("-------------------------------", res)
    
    # #Extract
    # std_rec =  frappe.qb.DocType("Query Builder")
    # std_cld = frappe.qb.DocType("Child Query")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .join(std_cld)
    #     .on(std_rec.name1 == std_cld.parent)
    #     .select(
    #         std_rec.name1,
    #         Extract("Day", std_cld.date).as_("Month"),
    # )
    #     .where(std_rec.name1 == "Sundar")
    #     )
    # res = query.run(as_dict = True)
    # print("------------------------------",res)
    
    
    # #Now - it defines the present time
    # std_rec = frappe.qb.DocType("Query Builder")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         std_rec.name1,
    #         Now().as_("Time")
    #     )
    #     .where(std_rec.name1 == "Sundar")
    # )
    # res = query.run(as_dict = True)
    # print("--------------------------",res)
    
    # #like
    # std_rec = frappe.qb.DocType("Query Builder")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         std_rec.name1,
    #         std_rec.fav_book,
    #         std_rec.age,
    #         std_rec.father_name
    #     )
    #     .where(std_rec.name1.like('%Sundar%'))
    # )
    # res = query.run(as_dict = True)
    # print("--------------------",res)
    
    # #Greater than, Lesser Than, Equal to
    # std_rec = frappe.qb.DocType("Query Builder")
    # std_cld = frappe.qb.DocType("Child Query")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .join(std_cld)
    #     .on(std_rec.name1 == std_cld.parent)
    #     .select(
    #         std_rec.name1,
    #         std_rec.age,
    #         std_cld.date,
    #     )
    #     .where(
    #         (std_rec.name == "Sundar")&
    #         (std_cld.date <= "2025-07-24")
    #     )
    # )
    # res = query.run(as_dict = True)
    # print("-------------------------",res)
    
    # #IsIn 
    # std_rec = frappe.qb.DocType("Query Builder")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         std_rec.name1,
    #         std_rec.age,
    #         std_rec.class_sec
    #         # Count(std_rec.name1).as_("Name")
    #     )
    #     .where(std_rec.class_sec.isin(["11th" , "10th"])).groupby(std_rec.name1)
    # )
    # res = query.run(as_dict = True)
    # print("------------------------------",res)
    
    
    # # IsNot
    # std_rec = frappe.qb.DocType("Query Builder")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         std_rec.name1,
    #         std_rec.age,
    #         std_rec.class_sec
    #     )
    #     .where(std_rec.class_sec.notin(["11th" , "10th"])).groupby(std_rec.name1)
    # )
    # res = query.run(as_dict = True)
    # print("---------------------------",res)
    
    # #Total count
    # std_rec = frappe.qb.DocType("Query Builder")
    
    # query = (
    #     frappe.qb.from_(std_rec)
    #     .select(
    #         Count("*").as_("Total Record Count")
    #     )
    # )
    # res = query.run(as_dict = True)
    # print("------------------------------",res)
    
    
    #offset
    std_rec = frappe.qb.DocType("Query Builder")
    
    query = (
        frappe.qb.from_(std_rec)
        .select(
            std_rec.name1,
            std_rec.age,
            std_rec.father_name
        )
        .limit(2)
        .offset(1)
    )
    res = query.run(as_dict = True)
    print("----------------------------",res)
    
    

    
    
     
    
  


    
    
    
    
    
    
    
    
    
    
    

    
    















































#-------------------------------------------------------------------------------------------------------------------
