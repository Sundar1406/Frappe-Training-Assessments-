import frappe
import string
import random


def all():
    pass


def cron():
    
    print("\n\n Inserting A New Note \n\n")
    letters = string.ascii_letters
    schedule = " ".join(random.choice(letters) for i in  range(20))
    
    schedule_demo =  frappe.get_doc({"doctype" : "Scheduler_Demo",
                                      "name1" : schedule
                                      })
    
    schedule_demo.insert()
    frappe.db.commit()