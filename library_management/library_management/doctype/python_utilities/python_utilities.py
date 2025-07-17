# Copyright (c) 2025, admin and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import now
from frappe.utils import getdate
from frappe.utils import get_datetime
from frappe.utils import today
from datetime import datetime
from frappe.utils import add_to_date, today, date_diff, days_diff, month_diff
from frappe.utils import pretty_date
from frappe.utils import format_duration
from frappe.utils import comma_and
from frappe.utils import money_in_words 
from frappe.utils import validate_json_string
from frappe.utils import random_string
from frappe.utils import unique
from frappe.utils.pdf import get_pdf
from frappe.utils import get_abbr 
from frappe.utils import validate_url
from frappe.utils import validate_email_address
from frappe.utils import validate_phone_number

class PythonUtilities(Document):
    pass
@frappe.whitelist()
# -----------------------------------------------------------------------------------


# -------------------------------------------Now----------------------------------------

# def utl():
#     data = now()
#     return data

# ------------------------------------------getdate-------------------------------------

# def utl():
#     data = getdate()
#     return data

# ------------------------------------------today-------------------------------------

# def utl():
#     data = today()
#     return data

# ------------------------------------------add_to_date -------------------------------------
# calculate the current now

# def utl():
#     today = datetime.now().strftime('%d-%m-%Y')
#     return today

#calculat the days current day to after 10 days 

# def utl():
#     days = add_to_date(datetime.now(), days=10, as_string = True)
#     return days

#calculat the days current day to after 2 months

# def utl():
#     months = add_to_date(datetime.now(), months=2)
#     return months

#calculat the days current day to after 2 years

# def  utl():
#     years = add_to_date(None, years=2)
#     return years

# ------------------------------------------date_diff-------------------------------------

#finding the different betwen the current date to past or present date 

# def utl():
#     date_1 = today()
#     date_2 = add_to_date(date_1, days=10)
#     date_diff_data = date_diff(date_2,date_1)
#     return date_diff_data

# it will calculate the days
# def utl():
#     date_1 = today()
#     date_2 = add_to_date(date_1, days=5)
#     days_diff_data = days_diff(date_2,date_1)
#     return days_diff_data

#it will calculate the month

# def utl():
#     date_1 = today()
#     date_2 = add_to_date(date_1, days=60)
#     month_diff_data = month_diff(date_2,date_1)
#     return month_diff_data

# ------------------------------------------pretty_date-------------------------------------
# It gives the current date and time --> Pretty is use to give the string like 1 (min ago)

# def utl():
#     data = pretty_date(now())
#     return data

# def utl():
#     date_1 = today()
#     date_2 = add_to_date(date_1, days=5)
#     date_diff_data = pretty_date(get_datetime(date_2))
#     return date_diff_data

# ------------------------------------------format_duration-------------------------------------

# calculate the days hours in sec lik 5000 sec = 1h 23m 20s

# def utl():
#     format_duration_data = format_duration(5000)
#     return format_duration_data

# def utl():
#     data = format_duration(1000000000000000000000000)
#     return data

# --------------------------------------------comma_and---------------------------------------

# def utl():
#     comma = comma_and(['1','2','3','4'])
#     return comma

# def utl():
#     comma = comma_and('abcdef')
#     return comma

# --------------------------------------------money_in_words---------------------------------------

# def utl():
#     money = money_in_words(400)
#     return money

# def utl():
#     money = money_in_words(9000000000000000000000000.98,'USD','Cents')
#     return money

# --------------------------------------------validate_json_string ----------------------------------
# def utl():
#     fun = '{"name":"sundar","age":"24"}'
#     json_fmt = validate_json_string(fun)
#     return json_fmt

# ------------------------------------------------random_string---------------------------------------

# def utl():
#     ran = random_string(50)
#     return ran

# ------------------------------------------------unique---------------------------------------
# It will unique the out put in index value

# def utl():
#     uni = unique(['1','2','2','5','2','4']) 
#     return uni

# It will unique the out put in index value
# def utl():
#     uni = unique ('kuajaajkfhfueflqfhl')
#     return uni

# ------------------------------------------------get_pdf---------------------------------------

def utl():
    booking = {
        'Bajaj': 'RS200',
        'KTM': 'RC200',
        'Ninja': 'H2r',
        'Yamaha': 'R15',
        'Honda': 'CBR150'
    }

    html = '<h1>Welcome to Sundar Bikes</h1><ol>'
    for company, bike in booking.items():
        html += f'<li>{company} - {bike}</li>'
    html += '</ol>'

    pdf = get_pdf(html)
    timestamp = datetime.now().strftime("%d-%m-%Y_%H-%M-%S")

    file_doc = frappe.get_doc({
        "doctype": "File",
        "file_name": f"invoice_{timestamp}.pdf",
        "content": pdf,
        "is_private": 0
    }).insert(ignore_permissions=True)

    return file_doc.file_url	


# ------------------------------------------------get_abbr---------------------------------------

# def utl():
#     data = get_abbr('Mariappan Guroosuntar Suguna Minoshika', max_len=3)
#     return data

# ------------------------------------------------validate_url---------------------------------------

# def  utl():
    # data = validate_url('google')
    # data = validate_url('http://google')
    # data = validate_url('http://google.com', throw = True)  
    # return data

# ------------------------------------------------validate_email_address---------------------------------------
# it is just checking weather it is string or not

# def utl():
    # data = validate_email_address('mgsundar2001@gmail.com')
    # data = validate_email_address( 'other text , mgsundar2001@gmail.com , some other text')
    # data = validate_email_address(  'some text, rushabh@erpnext.com, some other text, faris@erpnext.com, yet another no-emailic phrase.' )
    # return data

# ------------------------------------------------validate_phone_number---------------------------------------
# it is just checking weather it is integer or not

# def utl():
#     data = validate_phone_number('+91-965456632')
#     return data
















# -----------------------------------------------------------------------------------
def ktl():
    ran = random_string(50)
    return ran
    