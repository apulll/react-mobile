/*
* @Author: perry
* @Date:   2018-01-23 11:47:25
* @Last Modified by:   perry
* @Last Modified time: 2018-01-23 13:39:57
*/
export default [
	{
        "id": 1,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "学校",
        "column_field": "school",
        "column_type": "text",
        "column_length": 10,
        "column_values": "1",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id": 2,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "专业",
        "column_field": "major",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id": 3,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "教育形式",
        "column_field": "education_type",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"全日制"
            },
            {
                field_value:'2',
                field_label:"非全日制"
            }
        ]
    },
	{
        "id": 4,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "学历",
        "column_field": "culture",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"博士"
            },
            {
                field_value:'2',
                field_label:"硕士"
            },
            {
                field_value:'3',
                field_label:"本科"
            },
            {
                field_value:'4',
                field_label:"专科"
            },
            {
                field_value:'5',
                field_label:"高中"
            },
            {
                field_value:'6',
                field_label:"初中"
            },
            {
                field_value:'7',
                field_label:"小学"
            }
        ]
    },
    {
        "id": 5,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "学位",
        "column_field": "degree",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"博士"
            },
            {
                field_value:'2',
                field_label:"硕士"
            },
            {
                field_value:'3',
                field_label:"学士"
            },
            {
                field_value:'4',
                field_label:"其他"
            }
        ]
    },
    {
        "id":6,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "学历编号",
        "column_field": "culture_number",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":7,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "学位编号",
        "column_field": "degree_number",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":8,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "开始日期",
        "column_field": "start_at",
        "column_type": "date",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":9,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "结束日期",
        "column_field": "end_at",
        "column_type": "date",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    }
]