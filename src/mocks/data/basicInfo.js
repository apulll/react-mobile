/*
* @Author: perry
* @Date:   2018-01-22 13:35:34
* @Last Modified by:   perry
* @Last Modified time: 2018-01-25 09:31:35
*/
export default [
    {
        "id":6,
        "column_name": "姓名",
        "column_alias": "fullName",
        "column_type": "text",
        "column_length": 10,
        "column_values": "默认名字",
        "column_tips": "黄色闪光",
        "is_required": 1,
    },
    {
        "id":7,
        "column_name": "性别",
        "column_alias": "gender",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "请输入姓名",
        "is_required": 1,
        "options":[
            {
                field_value:'male',
                field_label:"男"
            },
            {
                field_value:'female',
                field_label:"女"
            }
        ]
    },
    {
        "id":8,
        "column_name": "民族",
        "column_alias": "nation",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "黄色闪光",
        "is_required": 1,
    },
    {
        "id":9,
        "column_name": "籍贯",
        "column_alias": "native_place",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":10,
        "column_name": "证件号码",
        "column_alias": "id_card",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":11,
        "column_name": "婚姻状况",
        "column_alias": "marital_status",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"已婚"
            },
            {
                field_value:'2',
                field_label:"未婚"
            }
        ]
    },
    {
        "id":12,
        "column_name": "政治面貌",
        "column_alias": "political_status",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"党员"
            },
            {
                field_value:'2',
                field_label:"群众"
            }
        ]
    },
    {
        "id":13,
        "column_name": "出生日期",
        "column_alias": "date_of_birth",
        "column_type": "date",
        "column_length": 10,
        "column_values": "1980-01-01",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":14,
        "column_name": "户籍地址",
        "column_alias": "permanentAddress",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":15,
        "column_name": "户口类型",
        "column_alias": "permanent_type",
        "column_type": "select",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
        "options":[
            {
                field_value:'1',
                field_label:"城镇"
            },
            {
                field_value:'2',
                field_label:"农村"
            }
        ]
    },
    {
        "id":16,
        "column_name": "户口所在地",
        "column_alias": "registered_residence",
        "column_type": "textarea",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":17,
        "column_name": "通讯地址",
        "column_alias": "localAddress",
        "column_type": "textarea",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":18,
        "column_name": "学历",
        "column_alias": "culture_type",
        "column_type": "select",
        "column_length": 10,
        "column_values": '',
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
        "id":19,
        "column_name": "手机号码",
        "column_alias": "mobile",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":20,
        "column_name": "邮箱",
        "column_alias": "email",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":21,
        "column_name": "应聘岗位",
        "column_alias": "job",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":22,
        "column_name": "期望月薪",
        "column_alias": "salary_wish",
        "column_type": "text",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    },
    {
        "id":23,
        "column_name": "最快到岗时间",
        "column_alias": "work_date",
        "column_type": "date",
        "column_length": 10,
        "column_values": "",
        "column_tips": "",
        "is_required": 1,
    }
	
]