frappe.ui.form.on("Order Bill", {
    refresh(frm) {

        if (!$("style[data-custom='order-bill-style']").length) {
            $("<style>")
                .attr("data-custom", "order-bill-style")
                .html(`
                    .form-section {
                        background-image: linear-gradient(135deg, #000000ff 0%, #f5c908ff 100%);
                    }

                    .control-label {
                        font-family: 'Great Vibes', cursive;
                        font-weight: 500;
                        color: #FFD700;
                        font-size: 14px;
                        letter-spacing: 0.5px;
                        transition: color 0.3s ease-in-out;
                    }

                    .frappe-control .control-value {
                        background-color: #000000ff;
                        font-family: 'Great Vibes', cursive;
                        border: 1px solid #ccc;
                        border-radius: 6px;
                        padding: 8px 12px;
                        font-size: 14px;
                        color: #cacacaff;
                        transition: all 0.3s ease;
                        box-shadow: 0 5px 6px rgba(0, 0, 0, 1);
                    }

                    [data-fieldname="item_price"] .control-value,
                    [data-fieldname="total_amount"] .control-value,
                    [data-fieldname="payment_status"] .control-value {
                        background-color: #000;
                        font-family: 'Great Vibes', cursive;
                        border: 1px solid #ccc;
                        border-radius: 6px;
                        padding: 6px 10px;
                        font-size: 14px;
                        color: #cacacaff;
                        box-shadow: 0 5px 6px rgba(0, 0, 0, 1);
                        display: inline-block;
                        width: 100%;
                    }
                        div.frappe-control.form-group[data-fieldname="food_child"] {
                    background: linear-gradient(to right, #000000ff , #f5c908ff) !important;
                    border-radius: 10px !important;
                    padding: 15px !important;
                    margin-bottom: 20px !important;
                    }
                    .grid-heading-row {
                    background-color: #111 !important;
                    color: #FFD700 !important;
                    font-family: 'Poppins', sans-serif !important;
                    font-weight: bold !important;
                    }
                    .grid-row {
                    background-color: rgba(0, 0, 0, 0.5) !important;
                    color: #fff !important;
                    font-family: 'Poppins', sans-serif !important;
                    }
                    .grid-row:hover {
                    background-color: rgba(194, 194, 194, 0.1) !important;
                    }.grid-row input,.grid-row select,.grid-row textarea {
                    background-color: #000 !important;
                    color: #FFD700 !important;
                    border: 1px solid #FFD700 !important;
                    border-radius: 4px !important;
                    padding: 5px !important;
                    font-family: 'Great Vibes', cursive !important;
                    box-shadow: 0 4px 6px rgba(255, 215, 0, 0.2) !important;
                    }
                    .grid-row-check:disabled {
                    filter: grayscale(100%) !important;
                    border: 1px solid #FFD700 !important;
                    background-color: #1a1a1a !important;
                    box-shadow: 0 0 4px #686766ff !important;
                    cursor: not-allowed !important;
                    }
                `)
                .appendTo("head");
        }
        // Auto-set status on refresh
        if (frm.doc.payment_id) {
            frm.set_value("payment_status", "Paid");
        } else {
            frm.set_value("payment_status", "Unpaid");
        }

        // Show payment button only if not paid
        if (!frm.doc.payment_id) {
            frm.add_custom_button('💸 Make Payment', function () {
                let amount_in_paise = frm.doc.total_amount * 100 || 10000;

                let options = {
                    key: "rzp_test_1DP5mmOlF5G5ag", 
                    amount: amount_in_paise,
                    currency: "INR",
                    name: frm.doc.customer_name || "Food Engine",
                    description: "Order Bill Payment",
                    handler: function (response) {
                         
                        frm.set_value("payment_id", response.razorpay_payment_id);
                        frm.set_value("payment_status", "Paid");

                        frm.save().then(() => {
                            frappe.msgprint({
                                title: "✅ Payment Successful",
                                message: `Payment ID: <b>${response.razorpay_payment_id}</b><br>Status set to <b>Paid</b>.`,
                                indicator: "green"
                            });
                            frm.reload_doc();
                        });
                    },
                    prefill: {
                        name: frm.doc.customer_name || "Sundar",
                        email: frm.doc.email || "sundar2001@gmail.com",
                        contact: frm.doc.mobile || "9345069909"
                    },
                    theme: {
                        color: "#cb6c07"
                    },
                    modal: {
                        ondismiss: function () {
                            frappe.msgprint("❗ Payment popup closed.");
                        }
                    }
                };

                let rzp = new Razorpay(options);
                rzp.open();
            });
        }
    }
});
