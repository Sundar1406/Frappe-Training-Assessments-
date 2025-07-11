// Copyright (c) 2025, admin and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student Marks", {
	marks(frm) {
        let marks = frm.doc.marks
        frm.set_value('status',marks >= 35 ? 'Pass' : 'Fail')  
	},


    refresh: function(frm) {
      
        if (!frm.chart_area) {
            frm.chart_area = $('<div id="student-marks-chart" style="min-height:300px; display:none;"></div>').appendTo(frm.fields_dict["section_break_0"] ? frm.fields_dict["section_break_0"].wrapper : frm.wrapper);
        }
        
        function render_chart(data) {
            if (frm.chart) frm.chart.destroy();
            frm.chart = new frappe.Chart('#student-marks-chart', {
                title: 'Student Marks (Real Time)',
                data: {
                    labels: data.labels,
                    datasets: [
                        {
                            name: 'Marks',
                            values: data.values
                        }
                    ]
                },
                type: 'bar',
                height: 250,
                colors: ['#5c6d7c']
            });
        }
        frm.add_custom_button('Show Chart', function() {
            var chartDiv = $('#student-marks-chart');
            if (chartDiv.is(':visible')) {
                chartDiv.hide();
                this.innerText = 'Show Chart';
            } else {
                chartDiv.show();
                frappe.call({
                    method: 'library_management.library_management.doctype.student_marks.student_marks.get_marks_chart_data',
                    callback: function(r) {
                        if (r.message) {
                            render_chart(r.message);
                        }
                    }
                });
                this.innerText = 'Hide Chart';
            }
        });

        if (window.io) {
            window.io.socket.on('student_marks_update', function(data) {
                if ($('#student-marks-chart').is(':visible')) {
                    render_chart(data);
                }
            });
        }


        frm.add_custom_button('Submit to Server', function() {
            frappe.call({
                method: 'library_management.library_management.doctype.student_marks.student_marks.submit_to_server',
                args: {
                    student_name: frm.doc.student_name,
                    subject: frm.doc.subject,
                    marks: frm.doc.marks,
                    status: frm.doc.status
                },
                callback: function(r) {
                    console.log(r);
                    if (r.message) {
                        frappe.msgprint({
                            title: __('Server Response'),
                            message: r.message,
                            indicator: 'green'
                        });
                    }
                }
            });
        });
    }

});



