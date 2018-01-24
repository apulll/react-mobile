/*
* @Author: perry
* @Date:   2018-01-24 15:25:43
* @Last Modified by:   perry
* @Last Modified time: 2018-01-24 15:30:42
*/
export default {
    "code": 0,
    "status": true,
    "msg": "数据获取成功",
    "res": {
        "template": {
            "id": 5,
            "company_id": 197,
            "title": "面试登记表五",
            "created_at": "2018-01-12 11:29:12",
            "updated_at": "2018-01-12 11:29:12",
            "modules": [
                {
                    "id": 1,
                    "template_module_name": "基本信息",
                    "template_module_value": "basic",
                    "created_at": null,
                    "updated_at": null,
                    "pivot": {
                        "interview_template_id": 5,
                        "template_module_id": 1
                    },
                    "extends": []
                },
                {
                    "id": 2,
                    "template_module_name": "教育信息",
                    "template_module_value": "education",
                    "created_at": null,
                    "updated_at": null,
                    "pivot": {
                        "interview_template_id": 5,
                        "template_module_id": 2
                    },
                    "extends": []
                },
                {
                    "id": 3,
                    "template_module_name": "工作信息",
                    "template_module_value": "work",
                    "created_at": null,
                    "updated_at": null,
                    "pivot": {
                        "interview_template_id": 5,
                        "template_module_id": 3
                    },
                    "extends": []
                },
                {
                    "id": 4,
                    "template_module_name": "家庭信息",
                    "template_module_value": "family",
                    "created_at": null,
                    "updated_at": null,
                    "pivot": {
                        "interview_template_id": 5,
                        "template_module_id": 4
                    },
                    "extends": [
                        {
                            "id": 1,
                            "template_module_id": 4,
                            "template_id": 197,
                            "column_name": "海贼王",
                            "column_type": "text",
                            "column_length": 10,
                            "column_values": "",
                            "column_tips": "动漫名称",
                            "is_required": 1,
                            "created_at": "2018-01-10 17:34:10",
                            "updated_at": "2018-01-10 17:34:10"
                        },
                        {
                            "id": 3,
                            "template_module_id": 4,
                            "template_id": 5,
                            "column_name": "火影忍者",
                            "column_type": "text",
                            "column_length": 30,
                            "column_values": "",
                            "column_tips": "日漫",
                            "is_required": 0,
                            "created_at": "2018-01-12 11:49:46",
                            "updated_at": "2018-01-12 11:56:26"
                        }
                    ]
                },
                {
                    "id": 5,
                    "template_module_name": "紧急联系人",
                    "template_module_value": "emergency",
                    "created_at": null,
                    "updated_at": null,
                    "pivot": {
                        "interview_template_id": 5,
                        "template_module_id": 5
                    },
                    "extends": []
                }
            ]
        }
    }
}