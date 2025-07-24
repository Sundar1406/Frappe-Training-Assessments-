import frappe

def get_fullname(user):
    first_name, last_name = frappe.db.get_value("User", user, ["first_name", "last_name"]) or ("", "")
    return f"{first_name or ''} {last_name or ''}".strip()


def format_currency(value, currency):
    return currency + " " + str(value)