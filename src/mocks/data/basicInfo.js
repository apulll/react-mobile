/*
* @Author: perry
* @Date:   2018-01-22 13:35:34
* @Last Modified by:   perry
* @Last Modified time: 2018-01-22 16:53:49
*/
export default [
	{
        "id": 1,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "选项一",
        "column_field": "fix_field1",
        "column_type": "select",
        "column_length": 10,
        "column_values": "1",
        "column_tips": "黄色闪光",
        "is_required": 1,
        "options":[
        	{
        		field_value:1,
        		field_label:"操作一"
        	},
        	{
        		field_value:2,
        		field_label:"操作二"
        	}
        ]
    },
    {
        "id": 2,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "长文本类型",
        "column_field": "fix_field2",
        "column_type": "textarea",
        "column_length": 10,
        "column_values": "4514",
        "column_tips": "黄色闪光",
        "is_required": 1,
    },
    {
        "id": 2,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "附件上传",
        "column_field": "fix_field3",
        "column_type": "file",
        "column_length": 10,
        "column_values": "",
        "column_tips": "黄色闪光",
        "is_required": 1,
    },
	{
        "id": 4,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "普通文本",
        "column_field": "field1",
        "column_type": "text",
        "column_length": 10,
        "column_values": "扩展字段一默认值",
        "column_tips": "黄色闪光",
        "is_required": 1,
    },
    {
        "id":5,
        "template_module_id": 1,
        "template_id": 5,
        "column_name": "日期类型",
        "column_field": "field2",
        "column_type": "date",
        "column_length": 10,
        "column_values": "2018-01-20",
        "column_tips": "黄色闪光",
        "is_required": 1,
    }
	
]