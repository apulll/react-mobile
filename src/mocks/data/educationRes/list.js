/*
* @Author: perry
* @Date:   2018-01-25 17:53:13
* @Last Modified by:   perry
* @Last Modified time: 2018-01-25 17:55:58
*/
export default {
    "code": 0,
    "status": true,
    "msg": "数据获取成功",
    "res": {
        "extends": [
            {
                "id": 11,
                "template_module_id": 2,
                "template_id": 5,
                "column_name": "extend_add_3",
                "column_type": "text",
                "column_length": 10,
                "column_values": "",
                "column_tips": "世界杯",
                "is_required": 0,
                "created_at": "2018-01-25 17:21:03",
                "updated_at": "2018-01-25 17:21:03",
                "column_alias": "education_2_11_0_text"
            }
        ],
        "education": [
            {
                "id": 3,
                "company_id": 197,
                "batch_id": 1,
                "invitation_id": 1,
                "start_at": "2018-01-01",
                "end_at": "2018-01-01",
                "school": "南山中学",
                "education_type": 1,
                "major": "理科",
                "culture": 1,
                "degree": 0,
                "culture_number": "11111",
                "degree_number": "11110",
                "created_at": "2018-01-17 11:19:37",
                "updated_at": "2018-01-24 09:46:20",
                "culture_type_text": "博士",
                "degree_text": "其他",
                "extends": [
                    {
                        "id": 1,
                        "invitation_id": 1,
                        "relation_id": 3,
                        "module": "education",
                        "template_module_id": 3,
                        "column_id": 1,
                        "column_type": "text",
                        "column_name": "出版社",
                        "column_value": "山东教育出版社"
                    }
                ]
            },
            {
                "id": 4,
                "company_id": 197,
                "batch_id": 1,
                "invitation_id": 1,
                "start_at": "2018-01-20",
                "end_at": "2018-01-20",
                "school": "南山中学2",
                "education_type": 1,
                "major": "理科",
                "culture": 1,
                "degree": 1,
                "culture_number": "csdcds",
                "degree_number": "cdas",
                "created_at": "2018-01-20 21:37:48",
                "updated_at": null,
                "culture_type_text": "博士",
                "degree_text": "博士",
                "extends": []
            }
        ],
        "culture_status": {
            "1": "博士",
            "2": "硕士",
            "3": "本科",
            "4": "专科",
            "5": "高中",
            "6": "初中",
            "7": "小学"
        },
        "degree_status": {
            "1": "学士",
            "2": "硕士",
            "3": "博士",
            "4": "其他"
        },
        "education_type_status": {
            "1": "全日制",
            "2": "非全日制"
        }
    }
}