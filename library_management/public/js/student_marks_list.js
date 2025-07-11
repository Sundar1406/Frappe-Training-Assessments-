frappe.listview_settings['Student Marks'] = {
    onload: function(listview) {
        listview.page.add_inner_button('Show Chart', function() {
           
            let d = new frappe.ui.Dialog({
                title: 'Student Marks Chart',
                fields: [
                    {
                        fieldtype: 'HTML',
                        fieldname: 'chart_html',
                        options: '<div id="student-marks-list-chart" style="min-height:300px;"></div>'
                    }
                ],
                size: 'large'
            });
            d.show();
           
            setTimeout(function() {
                frappe.call({
                    method: 'library_management.library_management.doctype.student_marks.student_marks.get_marks_chart_data',
                    callback: function(r) {
                       
                        console.log('Chart data:', r.message);
                        if (!r.message || !r.message.labels || !r.message.values || r.message.labels.length === 0) {
                            $('#student-marks-list-chart').html('<div style="padding: 1em; color: #888;">No data to display.</div>');
                            return;
                        }
                        new frappe.Chart('#student-marks-list-chart', {
                            title: 'Student Marks (Real Time)',
                            data: {
                                labels: r.message.labels,
                                datasets: [
                                    {
                                        name: 'Marks',
                                        values: r.message.values
                                    }
                                ]
                            },
                            type: 'line',
                            height: 250,
                            colors: ['#ff0000'], 
                            lineOptions: {
                                hideDots:1,
                                regionFill: 1
                            }
                        });
                    }
                });
            }, 1000); 
        });
    }
};
