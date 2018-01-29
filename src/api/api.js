/*
* @Author: perry
* @Date:   2018-01-29 12:50:33
* @Last Modified by:   perry
* @Last Modified time: 2018-01-29 13:39:38
*/
export default{
			"name": "移动端用户登记",
			"description": "移动面试登记表",
			"item": [
				{
					"name": "发送短信",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/sms?mobile=18274698403&access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"sms"
							],
							"query": [
								{
									"key": "mobile",
									"value": "18274698403",
									"equals": true,
									"description": "手机号码"
								},
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": "客户端授权"
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": []
				},
				{
					"name": "用户验证",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/login?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"login"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": "客户端授权"
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "code",
									"value": "123456",
									"description": "验证码(Y)",
									"type": "text"
								},
								{
									"key": "name",
									"value": "明哥",
									"description": "用户名(Y)",
									"type": "text"
								},
								{
									"key": "mobile",
									"value": "12345678",
									"description": "手机号(Y)",
									"type": "text"
								}
							]
						},
						"description": ""
					},
					"response": []
				},
				{
					"name": "获取表单详情",
					"request": {
						"url": {
							"raw": "{{url}}/Api/interview/templates/5?access_token={{access_token}}&id=5",
							"host": [
								"{{url}}"
							],
							"path": [
								"Api",
								"interview",
								"templates",
								"5"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": "客户端授权"
								},
								{
									"key": "id",
									"value": "5",
									"equals": true,
									"description": "模板id"
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
				},
				{
					"name": "基本信息",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/basic?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=1",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"basic"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": "客户端授权"
								},
								{
									"key": "basic_module_id",
									"value": "1",
									"equals": true,
									"description": "模块标识(Y)",
									"disabled": true
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": "企业标识(Y)"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"equals": true,
									"description": "邀请标识(Y)"
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": "面试批次标识(Y)"
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": "面试表单标识(Y)"
								},
								{
									"key": "template_module_id",
									"value": "1",
									"equals": true,
									"description": "面试表单模块标识(Y)"
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "74fe2e94-e55c-4c17-be9b-4191c5d4378a",
							"name": "基本信息-没有填写",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/baisc?access_token={{access_token}}&basic_module_id=1&company_id=197&invitation_id=1&batch_id=1&template_id=5",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"baisc"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "basic_module_id",
											"value": "1",
											"equals": true,
											"description": "模块标识(Y)"
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": "企业标识(Y)"
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": "邀请标识(Y)"
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": "面试批次标识(Y)"
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": "面试表单标识(Y)"
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Fri, 12 Jan 2018 08:22:37 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 138,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[],\"basic\":[]}}"
						},
						{
							"id": "542c4781-df10-4644-8fab-bb82a107598a",
							"name": "基本信息-有扩展字段无用户记录",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/baisc?access_token={{access_token}}&basic_module_id=1&company_id=197&invitation_id=1&batch_id=1&template_id=5",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"baisc"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "basic_module_id",
											"value": "1",
											"equals": true,
											"description": "模块标识(Y)"
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": "企业标识(Y)"
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": "邀请标识(Y)"
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": "面试批次标识(Y)"
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": "面试表单标识(Y)"
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Fri, 12 Jan 2018 08:27:40 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 131,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[{\"id\":4,\"template_module_id\":1,\"template_id\":5,\"column_name\":\"\\u6ce2\\u98ce\\u6c34\\u95e8\",\"column_type\":\"text\",\"column_length\":10,\"column_values\":\"\",\"column_tips\":\"\\u9ec4\\u8272\\u95ea\\u5149\",\"is_required\":1,\"created_at\":\"2018-01-12 16:27:31\",\"updated_at\":\"2018-01-12 16:27:31\"}],\"basic\":[]}}"
						},
						{
							"id": "cc4addf5-9080-4c71-bb86-1ecd01cc5067",
							"name": "基本信息-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/baisc?access_token={{access_token}}&basic_module_id=1&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=1",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"baisc"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "basic_module_id",
											"value": "1",
											"equals": true,
											"description": "模块标识(Y)"
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": "企业标识(Y)"
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": "邀请标识(Y)"
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": "面试批次标识(Y)"
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": "面试表单标识(Y)"
										},
										{
											"key": "template_module_id",
											"value": "1",
											"equals": true,
											"description": "面试表单模块标识(Y)"
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 01:32:49 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 138,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[{\"id\":4,\"template_module_id\":1,\"template_id\":5,\"column_name\":\"\\u6ce2\\u98ce\\u6c34\\u95e8\",\"column_type\":\"text\",\"column_length\":10,\"column_values\":\"\",\"column_tips\":\"\\u9ec4\\u8272\\u95ea\\u5149\",\"is_required\":1,\"created_at\":\"2018-01-12 16:27:31\",\"updated_at\":\"2018-01-12 16:27:31\"}],\"basic\":{\"id\":1,\"company_id\":197,\"batch_id\":1,\"invitation_id\":1,\"fullName\":\"\\u8001\\u53f8\\u673a\",\"gender\":\"male\",\"nation\":\"\\u6c49\\u65cf\",\"native_place\":\"\\u6c5f\\u82cf\",\"id_card\":\"4311291990011123453\",\"marital_status\":1,\"political_status\":1,\"date_of_birth\":\"1993-01-23\",\"permanentAddress\":\"\\u6d77\\u8fb9\",\"permanent_type\":1,\"registered_residence\":\"\\u6df1\\u5733\\u86c7\\u53e3\\u5927\\u7801\\u5934\",\"localAddress\":\"\\u5c71\\u7684\\u90a3\\u8fb9\",\"culture_type\":1,\"mobile\":\"18974689568\",\"email\":\"old.gay@que360.com\",\"job\":\"PHP\\u5de5\\u7a0b\\u5e08\",\"salary_wish\":\"2000k\",\"work_date\":\"2017-11-11\",\"created_at\":\"2018-01-12 18:19:05\",\"updated_at\":\"2018-01-12 18:19:05\",\"extends\":[]}}}"
						}
					]
				},
				{
					"name": "基本信息添加",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/basic?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"basic"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": "",
								"disabled": true
							}
						],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": "企业唯一标识(Y)"
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": "面试批次标识"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": "邀请记录标识"
								},
								{
									"key": "fullName",
									"value": "老司机",
									"type": "text",
									"description": "姓名"
								},
								{
									"key": "gender",
									"value": "male",
									"type": "text",
									"description": "性别('male', 'female')"
								},
								{
									"key": "nation",
									"value": "汉族",
									"type": "text",
									"description": "民族"
								},
								{
									"key": "native_place",
									"value": "江苏",
									"type": "text",
									"description": "籍贯"
								},
								{
									"key": "id_card",
									"value": "4311291990011123453",
									"type": "text",
									"description": "证件号码"
								},
								{
									"key": "marital_status",
									"value": "1",
									"type": "text",
									"description": "婚姻状况（1已婚，2未婚）"
								},
								{
									"key": "political_status",
									"value": "1",
									"type": "text",
									"description": "政治面貌（1.党员2.群众）"
								},
								{
									"key": "date_of_birth",
									"value": "1993-01-23",
									"type": "text",
									"description": "生日"
								},
								{
									"key": "permanentAddress",
									"value": "海边",
									"type": "text",
									"description": "户籍"
								},
								{
									"key": "permanent_type",
									"value": "1",
									"type": "text",
									"description": "户籍类型（1城市，2农村）"
								},
								{
									"key": "registered_residence",
									"value": "深圳蛇口大码头",
									"type": "text",
									"description": "户口所在地"
								},
								{
									"key": "localAddress",
									"value": "山的那边",
									"type": "text",
									"description": "通讯地址"
								},
								{
									"key": "culture_type",
									"value": "1",
									"type": "text",
									"description": "文化程度（1博士，2硕士，3本科，4专科5高中,6初中,7小学）"
								},
								{
									"key": "mobile",
									"value": "18974689568",
									"type": "text",
									"description": "手机"
								},
								{
									"key": "email",
									"value": "old.gay@que360.com",
									"type": "text",
									"description": "邮箱"
								},
								{
									"key": "job",
									"value": "PHP工程师",
									"type": "text",
									"description": "应聘岗位"
								},
								{
									"key": "salary_wish",
									"value": "2000k",
									"type": "text",
									"description": "期望月薪"
								},
								{
									"key": "work_date",
									"value": "2017-11-11",
									"type": "text",
									"description": "最快到岗时间(Y-m-d)"
								},
								{
									"key": "template_id",
									"value": "5",
									"description": "模板标识",
									"type": "text"
								},
								{
									"key": "template_module_id",
									"value": "1",
									"description": "模板模块标识",
									"type": "text"
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "dbf88d30-c1f7-4ea6-bcfe-8e87409a6243",
							"name": "基本信息添加-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/basic?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"basic"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "fullName",
											"value": "老司机",
											"type": "text",
											"description": "名称(Y)"
										},
										{
											"key": "gender",
											"value": "male",
											"type": "text",
											"description": "性别"
										},
										{
											"key": "nation",
											"value": "汉族",
											"type": "text",
											"description": "民族"
										},
										{
											"key": "native_place",
											"value": "江苏",
											"type": "text",
											"description": "籍贯"
										},
										{
											"key": "id_card",
											"value": "4311291990011123453",
											"type": "text",
											"description": "证件号码"
										},
										{
											"key": "marital_status",
											"value": "1",
											"type": "text",
											"description": "婚姻状况（1已婚，2未婚）"
										},
										{
											"key": "political_status",
											"value": "1",
											"type": "text",
											"description": "政治面貌（1.党员2.群众）"
										},
										{
											"key": "date_of_birth",
											"value": "1993-01-23",
											"type": "text",
											"description": "生日"
										},
										{
											"key": "permanentAddress",
											"value": "海边",
											"type": "text",
											"description": "户籍"
										},
										{
											"key": "permanent_type",
											"value": "1",
											"type": "text",
											"description": "户籍类型（1城市，2农村）"
										},
										{
											"key": "registered_residence",
											"value": "深圳蛇口大码头",
											"type": "text",
											"description": "户口所在地"
										},
										{
											"key": "localAddress",
											"value": "山的那边",
											"type": "text",
											"description": "通讯地址"
										},
										{
											"key": "culture_type",
											"value": "1",
											"type": "text",
											"description": "文化程度（1博士，2硕士，3本科，4专科5高中,6初中,7小学）"
										},
										{
											"key": "mobile",
											"value": "18974689568",
											"type": "text",
											"description": "手机"
										},
										{
											"key": "email",
											"value": "old.gay@que360.com",
											"type": "text",
											"description": "邮箱"
										},
										{
											"key": "job",
											"value": "PHP工程师",
											"type": "text",
											"description": "应聘岗位"
										},
										{
											"key": "salary_wish",
											"value": "2000k",
											"type": "text",
											"description": "期望月薪"
										},
										{
											"key": "work_date",
											"value": "2017-11-11",
											"type": "text",
											"description": "最快到岗时间"
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": "企业标识"
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": "邀请标识"
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": "面试批次"
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": "模板标识"
										},
										{
											"key": "template_module_id",
											"value": "1",
											"description": "模块标识",
											"type": "text"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Fri, 12 Jan 2018 10:24:33 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 406,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u63d0\\u4ea4\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "基本资料更新",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/basic/1?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"basic",
								"1"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": ""
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "fullName",
									"value": "老司机",
									"type": "text",
									"description": ""
								},
								{
									"key": "gender",
									"value": "male",
									"type": "text",
									"description": ""
								},
								{
									"key": "nation",
									"value": "汉族",
									"type": "text",
									"description": ""
								},
								{
									"key": "native_place",
									"value": "江苏",
									"type": "text",
									"description": ""
								},
								{
									"key": "id_card",
									"value": "4311291990011123453",
									"type": "text",
									"description": ""
								},
								{
									"key": "marital_status",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "political_status",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "date_of_birth",
									"value": "1993-01-23",
									"type": "text",
									"description": ""
								},
								{
									"key": "permanentAddress",
									"value": "海边",
									"type": "text",
									"description": ""
								},
								{
									"key": "permanent_type",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "registered_residence",
									"value": "深圳蛇口大码头",
									"type": "text",
									"description": ""
								},
								{
									"key": "localAddress",
									"value": "山的那边",
									"type": "text",
									"description": ""
								},
								{
									"key": "culture_type",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "mobile",
									"value": "18974689568",
									"type": "text",
									"description": ""
								},
								{
									"key": "email",
									"value": "old.gay@que360.com",
									"type": "text",
									"description": ""
								},
								{
									"key": "job",
									"value": "PHP工程师",
									"type": "text",
									"description": ""
								},
								{
									"key": "salary_wish",
									"value": "2000k",
									"type": "text",
									"description": ""
								},
								{
									"key": "work_date",
									"value": "2017-11-11",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "1",
									"type": "text",
									"description": ""
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "6d1c0760-5fc1-4277-b340-2a05d724ee61",
							"name": "基本资料更新-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/basic/1?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"basic",
										"1"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"description": ""
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "fullName",
											"value": "老司机(更新)",
											"type": "text",
											"description": ""
										},
										{
											"key": "gender",
											"value": "male",
											"type": "text",
											"description": ""
										},
										{
											"key": "nation",
											"value": "汉族",
											"type": "text",
											"description": ""
										},
										{
											"key": "native_place",
											"value": "江苏",
											"type": "text",
											"description": ""
										},
										{
											"key": "id_card",
											"value": "4311291990011123453",
											"type": "text",
											"description": ""
										},
										{
											"key": "marital_status",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "political_status",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "date_of_birth",
											"value": "1993-01-23",
											"type": "text",
											"description": ""
										},
										{
											"key": "permanentAddress",
											"value": "海边",
											"type": "text",
											"description": ""
										},
										{
											"key": "permanent_type",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "registered_residence",
											"value": "深圳蛇口大码头",
											"type": "text",
											"description": ""
										},
										{
											"key": "localAddress",
											"value": "山的那边",
											"type": "text",
											"description": ""
										},
										{
											"key": "culture_type",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "mobile",
											"value": "18974689568",
											"type": "text",
											"description": ""
										},
										{
											"key": "email",
											"value": "old.gay@que360.com",
											"type": "text",
											"description": ""
										},
										{
											"key": "job",
											"value": "PHP工程师",
											"type": "text",
											"description": ""
										},
										{
											"key": "salary_wish",
											"value": "2000k",
											"type": "text",
											"description": ""
										},
										{
											"key": "work_date",
											"value": "2017-11-11",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "1",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 02:07:08 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 315,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u66f4\\u65b0\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "教育资料获取",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/education?access_token={{access_token}}&basic_module_id=1&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=2",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"education"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								},
								{
									"key": "basic_module_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "2",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "bbc4decd-aaa2-40e9-9f7d-752e053a3eb3",
							"name": "教育资料获取-没有资料也没有扩展响应",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/education?access_token={{access_token}}&basic_module_id=1&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=2",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"education"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "basic_module_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "2",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 02:44:50 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 131,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[],\"education\":null}}"
						}
					]
				},
				{
					"name": "教育资料提交",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/education?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"education"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": "企业ID"
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": "面试批次ID"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": "邀请面试标识"
								},
								{
									"key": "start_at",
									"value": "2018-01-01",
									"type": "text",
									"description": "开始日期(Y-m-d)"
								},
								{
									"key": "end_at",
									"value": "2018-01-01",
									"type": "text",
									"description": "结束日期(Y-m-d)"
								},
								{
									"key": "school",
									"value": "南山中学",
									"type": "text",
									"description": "学校"
								},
								{
									"key": "education_type",
									"value": "1",
									"type": "text",
									"description": "  1 => \"全日制\",2 => \"非全日制\""
								},
								{
									"key": "major",
									"value": "理科",
									"type": "text",
									"description": "专业"
								},
								{
									"key": "culture",
									"value": "1",
									"type": "text",
									"description": " 1 => \"博士\", 2 => \"硕士\", 3 => \"本科\",4 => \"专科\",5 => \"高中\", 6 =>\"初中\", 7 => \"小学\""
								},
								{
									"key": "degree",
									"value": "1",
									"type": "text",
									"description": "1 => \"学士\", 2 => \"硕士\", 3 => \"博士\", 4 => \"其他\""
								},
								{
									"key": "culture_number",
									"value": "11111",
									"type": "text",
									"description": "学历编号"
								},
								{
									"key": "degree_number",
									"value": "11110",
									"type": "text",
									"description": "学位编号"
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": "模板标识"
								},
								{
									"key": "template_module_id",
									"value": "1",
									"type": "text",
									"description": "模板模块标识"
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "45b6841a-2b77-4134-8369-5f1bb95f8475",
							"name": "教育资料提交-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/education?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"education"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "start_at",
											"value": "2018-01-01",
											"type": "text",
											"description": "开始日期(Y)"
										},
										{
											"key": "end_at",
											"value": "2018-01-01",
											"type": "text",
											"description": "结束日期"
										},
										{
											"key": "school",
											"value": "南山小学",
											"type": "text",
											"description": "学校"
										},
										{
											"key": "education_type",
											"value": "全日制",
											"type": "text",
											"description": "教育形式"
										},
										{
											"key": "major",
											"value": "理科",
											"type": "text",
											"description": "专业"
										},
										{
											"key": "culture",
											"value": "初中",
											"type": "text",
											"description": "学历"
										},
										{
											"key": "degree",
											"value": "学士学位",
											"type": "text",
											"description": "学位"
										},
										{
											"key": "culture_number",
											"value": "11111",
											"type": "text",
											"description": "学历编号"
										},
										{
											"key": "degree_number",
											"value": "11110",
											"type": "text",
											"description": "学位编号"
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "1",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 02:56:07 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 224,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u63d0\\u4ea4\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "教育经历更新",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/education/1?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"education",
								"1"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": ""
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "start_at",
									"value": "2018-01-01",
									"type": "text",
									"description": ""
								},
								{
									"key": "end_at",
									"value": "2018-01-01",
									"type": "text",
									"description": ""
								},
								{
									"key": "school",
									"value": "南山中学-附属小学",
									"type": "text",
									"description": ""
								},
								{
									"key": "education_type",
									"value": "全日制",
									"type": "text",
									"description": ""
								},
								{
									"key": "major",
									"value": "理科",
									"type": "text",
									"description": ""
								},
								{
									"key": "culture",
									"value": "初中",
									"type": "text",
									"description": ""
								},
								{
									"key": "degree",
									"value": "学士学位",
									"type": "text",
									"description": ""
								},
								{
									"key": "culture_number",
									"value": "11111",
									"type": "text",
									"description": ""
								},
								{
									"key": "degree_number",
									"value": "11110",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "1",
									"type": "text",
									"description": ""
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "1ead8e6c-ea52-4555-993b-0b3bcecb4028",
							"name": "教育经历更新-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/education/1?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"education",
										"1"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"description": ""
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "start_at",
											"value": "2018-01-01",
											"type": "text",
											"description": ""
										},
										{
											"key": "end_at",
											"value": "2018-01-01",
											"type": "text",
											"description": ""
										},
										{
											"key": "school",
											"value": "南山中学-附属小学",
											"type": "text",
											"description": ""
										},
										{
											"key": "education_type",
											"value": "全日制",
											"type": "text",
											"description": ""
										},
										{
											"key": "major",
											"value": "理科",
											"type": "text",
											"description": ""
										},
										{
											"key": "culture",
											"value": "初中",
											"type": "text",
											"description": ""
										},
										{
											"key": "degree",
											"value": "学士学位",
											"type": "text",
											"description": ""
										},
										{
											"key": "culture_number",
											"value": "11111",
											"type": "text",
											"description": ""
										},
										{
											"key": "degree_number",
											"value": "11110",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "1",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 03:18:32 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 150,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6559\\u80b2\\u8d44\\u6599\\u66f4\\u65b0\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "紧急联系人获取",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/emergency?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=2",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"emergency"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "2",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "eebf4439-bf45-47d9-8044-6bc8ff72442c",
							"name": "紧急联系人获取-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/emergency?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=2",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"emergency"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "2",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 03:46:25 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 130,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[],\"education\":[{\"id\":1,\"company_id\":197,\"batch_id\":1,\"invitation_id\":1,\"fullName\":\"\\u59da\\u8001\\u677f\",\"phone\":\"18973245659\",\"created_at\":\"2018-01-13 11:45:00\",\"updated_at\":\"2018-01-13 11:45:00\",\"extends\":[]}]}}"
						}
					]
				},
				{
					"name": "紧急联系人添加",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/emergency?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"emergency"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "fullName",
									"value": "李彦宏",
									"type": "text",
									"description": "联系人名称"
								},
								{
									"key": "phone",
									"value": "18973245659",
									"type": "text",
									"description": "联系号码"
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": "企业标识"
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": "批次标识"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": "邀请面试标识"
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": "企业模板标识"
								},
								{
									"key": "template_module_id",
									"value": "1",
									"type": "text",
									"description": "企业模板模块标识"
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "ecc3e96d-e2e4-4e87-908f-664b8dd80cf5",
							"name": "紧急联系人添加-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/emergency?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"emergency"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "fullName",
											"value": "姚老板",
											"type": "text",
											"description": ""
										},
										{
											"key": "phone",
											"value": "18973245659",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "5",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 03:45:00 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 329,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u63d0\\u4ea4\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "紧急联系人更新",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/emergency/2?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"emergency",
								"2"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": ""
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "fullName",
									"value": "李宏",
									"type": "text",
									"description": ""
								},
								{
									"key": "phone",
									"value": "18973245659",
									"type": "text",
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "1",
									"type": "text",
									"description": ""
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "8928de73-f71d-4f63-a035-14c47afc089e",
							"name": "紧急联系人更新-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/emergency/2?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"emergency",
										"2"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"description": ""
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "fullName",
											"value": "李宏",
											"type": "text",
											"description": ""
										},
										{
											"key": "phone",
											"value": "18973245659",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "1",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 03:52:26 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 206,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u7d27\\u6025\\u8054\\u7cfb\\u4eba\\u66f4\\u65b0\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "工作经历获取",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/work?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=3",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"work"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "3",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "f0e8c8b5-155b-4a79-9339-5d2de286b718",
							"name": "工作经历获取-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/work?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=3",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"work"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "3",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:15:19 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 132,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[],\"education\":[{\"id\":1,\"company_id\":197,\"batch_id\":1,\"invitation_id\":1,\"start_at\":\"2018-10-11\",\"end_at\":\"2018-10-11\",\"company_name\":\"\\u6b22\\u96c0\\u79d1\\u6280\",\"designation\":\"PHP\\u7a0b\\u5e8f\\u5458\",\"salary\":\"10000k\",\"reason\":\"\\u5e72\\u7684\\u4e0d\\u723d\",\"reference\":\"\\u8001\\u5bb6\\u4f19\",\"reference_phone\":\"18223458765\",\"created_at\":\"2018-01-13 14:13:40\",\"updated_at\":\"2018-01-13 14:13:40\",\"extends\":[]}]}}"
						}
					]
				},
				{
					"name": "工作经历添加",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/work?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"work"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "start_at",
									"value": "2018-10-11",
									"type": "text",
									"description": "开始日期"
								},
								{
									"key": "end_at",
									"value": "2018-10-11",
									"type": "text",
									"description": "结束日期"
								},
								{
									"key": "company_name",
									"value": "欢雀科技",
									"type": "text",
									"description": "企业名称"
								},
								{
									"key": "designation",
									"value": "PHP程序员",
									"type": "text",
									"description": "职位"
								},
								{
									"key": "salary",
									"value": "10000k",
									"type": "text",
									"description": "薪酬"
								},
								{
									"key": "reason",
									"value": "干的不爽",
									"type": "text",
									"description": "离职原因"
								},
								{
									"key": "reference",
									"value": "老家伙",
									"type": "text",
									"description": "证明人"
								},
								{
									"key": "reference_phone",
									"value": "18223458765",
									"type": "text",
									"description": "证明人电话"
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": "企业唯一标识"
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": "面试批次标识"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": "邀请面试标识"
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": "模板标识"
								},
								{
									"key": "template_module_id",
									"value": "3",
									"type": "text",
									"description": "模板模块标识"
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "40fc18eb-4577-4cd1-bced-57d910fcaade",
							"name": "工作经历添加-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/work?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"work"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "start_at",
											"value": "2018-10-11",
											"type": "text",
											"description": ""
										},
										{
											"key": "end_at",
											"value": "2018-10-11",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_name",
											"value": "欢雀科技",
											"type": "text",
											"description": ""
										},
										{
											"key": "designation",
											"value": "PHP程序员",
											"type": "text",
											"description": ""
										},
										{
											"key": "salary",
											"value": "10000k",
											"type": "text",
											"description": ""
										},
										{
											"key": "reason",
											"value": "干的不爽",
											"type": "text",
											"description": ""
										},
										{
											"key": "reference",
											"value": "老家伙",
											"type": "text",
											"description": ""
										},
										{
											"key": "reference_phone",
											"value": "18223458765",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "3",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:13:41 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 331,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u63d0\\u4ea4\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "工作经历更新",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/work/1?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"work",
								"1"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": ""
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "start_at",
									"value": "2018-10-11",
									"type": "text",
									"description": ""
								},
								{
									"key": "end_at",
									"value": "2018-10-11",
									"type": "text",
									"description": ""
								},
								{
									"key": "company_name",
									"value": "欢雀科技有限公司",
									"type": "text",
									"description": ""
								},
								{
									"key": "designation",
									"value": "PHP程序员",
									"type": "text",
									"description": ""
								},
								{
									"key": "salary",
									"value": "10000k",
									"type": "text",
									"description": ""
								},
								{
									"key": "reason",
									"value": "干的不爽",
									"type": "text",
									"description": ""
								},
								{
									"key": "reference",
									"value": "老家伙",
									"type": "text",
									"description": ""
								},
								{
									"key": "reference_phone",
									"value": "18223458765",
									"type": "text",
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "3",
									"type": "text",
									"description": ""
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "7d0aa6da-a3be-44e4-ae74-07d983371ce6",
							"name": "工作经历更新-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/work/1?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"work",
										"1"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"description": ""
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "start_at",
											"value": "2018-10-11",
											"type": "text",
											"description": ""
										},
										{
											"key": "end_at",
											"value": "2018-10-11",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_name",
											"value": "欢雀科技有限公司",
											"type": "text",
											"description": ""
										},
										{
											"key": "designation",
											"value": "PHP程序员",
											"type": "text",
											"description": ""
										},
										{
											"key": "salary",
											"value": "10000k",
											"type": "text",
											"description": ""
										},
										{
											"key": "reason",
											"value": "干的不爽",
											"type": "text",
											"description": ""
										},
										{
											"key": "reference",
											"value": "老家伙",
											"type": "text",
											"description": ""
										},
										{
											"key": "reference_phone",
											"value": "18223458765",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "3",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:19:55 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 587,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u5de5\\u4f5c\\u7ecf\\u5386\\u66f4\\u65b0\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "家庭成员获取",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/family?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=4",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"family"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "4",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "f1a2aacd-9e2f-437f-9a1f-52c7fbd29c9e",
							"name": "家庭成员获取-获取响应",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/family?access_token={{access_token}}&company_id=197&invitation_id=1&batch_id=1&template_id=5&template_module_id=4",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"family"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "4",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:36:49 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 156,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u6570\\u636e\\u83b7\\u53d6\\u6210\\u529f\",\"res\":{\"extends\":[{\"id\":3,\"template_module_id\":4,\"template_id\":5,\"column_name\":\"\\u706b\\u5f71\\u5fcd\\u8005\",\"column_type\":\"text\",\"column_length\":30,\"column_values\":\"\",\"column_tips\":\"\\u65e5\\u6f2b\",\"is_required\":0,\"created_at\":\"2018-01-12 11:49:46\",\"updated_at\":\"2018-01-12 11:56:26\"}],\"family\":[{\"id\":1,\"company_id\":197,\"batch_id\":1,\"invitation_id\":1,\"fullName\":\"\\u5468\\u8463\",\"relationship\":\"\\u4eb2\\u4eba\",\"company\":\"\\u4e2d\\u56fd\\u53f0\\u6e7e\",\"position\":\"\\u6b4c\\u624b\",\"address\":\"\\u53f0\\u6e7e\\u8857\",\"phone\":\"12345678912\",\"created_at\":\"2018-01-13 14:34:35\",\"updated_at\":\"2018-01-13 14:34:35\",\"extends\":[]}]}}"
						}
					]
				},
				{
					"name": "家庭成员添加",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/family?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"family"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "fullName",
									"value": "周董",
									"type": "text",
									"description": "名称"
								},
								{
									"key": "relationship",
									"value": "亲人",
									"type": "text",
									"description": "关系"
								},
								{
									"key": "company",
									"value": "中国台湾",
									"type": "text",
									"description": "工作单位"
								},
								{
									"key": "position",
									"value": "歌手",
									"type": "text",
									"description": "职务"
								},
								{
									"key": "address",
									"value": "台湾街",
									"type": "text",
									"description": "地址"
								},
								{
									"key": "phone",
									"value": "12345678912",
									"type": "text",
									"description": "联系电话"
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": "企业唯一标识"
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": "面试批次标识"
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": "邀请面试记录标识"
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": "模板标识"
								},
								{
									"key": "template_module_id",
									"value": "4",
									"type": "text",
									"description": "模板模块标识"
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "5794bb05-0916-4a47-9daf-afb4ea00f53d",
							"name": "家庭成员添加-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/family?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"family"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "fullName",
											"value": "周董",
											"type": "text",
											"description": ""
										},
										{
											"key": "relationship",
											"value": "亲人",
											"type": "text",
											"description": ""
										},
										{
											"key": "company",
											"value": "中国台湾",
											"type": "text",
											"description": ""
										},
										{
											"key": "position",
											"value": "歌手",
											"type": "text",
											"description": ""
										},
										{
											"key": "address",
											"value": "台湾街",
											"type": "text",
											"description": ""
										},
										{
											"key": "phone",
											"value": "12345678912",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "4",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:34:35 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 230,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u8d44\\u6599\\u63d0\\u4ea4\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "家庭成员信息更新",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/family/1?access_token={{access_token}}",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"family",
								"1"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"description": ""
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "fullName",
									"value": "周董",
									"type": "text",
									"description": ""
								},
								{
									"key": "relationship",
									"value": "亲人",
									"type": "text",
									"description": ""
								},
								{
									"key": "company",
									"value": "中国台湾",
									"type": "text",
									"description": ""
								},
								{
									"key": "position",
									"value": "歌手",
									"type": "text",
									"description": ""
								},
								{
									"key": "address",
									"value": "台湾街",
									"type": "text",
									"description": ""
								},
								{
									"key": "phone",
									"value": "12345678912",
									"type": "text",
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"type": "text",
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "invitation_id",
									"value": "1",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"type": "text",
									"description": ""
								},
								{
									"key": "template_module_id",
									"value": "4",
									"type": "text",
									"description": ""
								}
							]
						},
						"description": ""
					},
					"response": [
						{
							"id": "7ec02aad-c6b0-40f3-8ecb-318ce0718e2a",
							"name": "家庭成员信息更新-响应成功",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/family/1?access_token={{access_token}}",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"family",
										"1"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"description": ""
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "fullName",
											"value": "周董",
											"type": "text",
											"description": ""
										},
										{
											"key": "relationship",
											"value": "亲人",
											"type": "text",
											"description": ""
										},
										{
											"key": "company",
											"value": "中国台湾",
											"type": "text",
											"description": ""
										},
										{
											"key": "position",
											"value": "歌手",
											"type": "text",
											"description": ""
										},
										{
											"key": "address",
											"value": "台湾街",
											"type": "text",
											"description": ""
										},
										{
											"key": "phone",
											"value": "12345678912",
											"type": "text",
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"type": "text",
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "invitation_id",
											"value": "1",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"type": "text",
											"description": ""
										},
										{
											"key": "template_module_id",
											"value": "4",
											"type": "text",
											"description": ""
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Sat, 13 Jan 2018 06:38:10 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 136,
							"body": "{\"code\":0,\"status\":true,\"msg\":\"\\u5bb6\\u5ead\\u6210\\u5458\\u66f4\\u65b0\\u6210\\u529f\",\"res\":[]}"
						}
					]
				},
				{
					"name": "确认提交面试登记表",
					"request": {
						"url": {
							"raw": "{{interview_fill_url}}/determine?access_token={{access_token}}&company_id=197&invitation id=1&batch_id=1&template_id=5",
							"host": [
								"{{interview_fill_url}}"
							],
							"path": [
								"determine"
							],
							"query": [
								{
									"key": "access_token",
									"value": "{{access_token}}",
									"equals": true,
									"description": ""
								},
								{
									"key": "company_id",
									"value": "197",
									"equals": true,
									"description": ""
								},
								{
									"key": "invitation id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "batch_id",
									"value": "1",
									"equals": true,
									"description": ""
								},
								{
									"key": "template_id",
									"value": "5",
									"equals": true,
									"description": ""
								}
							],
							"variable": []
						},
						"method": "GET",
						"header": [],
						"body": {},
						"description": ""
					},
					"response": [
						{
							"id": "d3529696-4014-4280-834c-fb192d17a86c",
							"name": "确认提交面试登记表",
							"originalRequest": {
								"url": {
									"raw": "{{interview_fill_url}}/determine?access_token={{access_token}}&company_id=197&invitation id=1&batch_id=1&template_id=5",
									"host": [
										"{{interview_fill_url}}"
									],
									"path": [
										"determine"
									],
									"query": [
										{
											"key": "access_token",
											"value": "{{access_token}}",
											"equals": true,
											"description": ""
										},
										{
											"key": "company_id",
											"value": "197",
											"equals": true,
											"description": ""
										},
										{
											"key": "invitation id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "batch_id",
											"value": "1",
											"equals": true,
											"description": ""
										},
										{
											"key": "template_id",
											"value": "5",
											"equals": true,
											"description": ""
										}
									],
									"variable": []
								},
								"method": "GET",
								"header": [],
								"body": {}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"_postman_previewtype": "text",
							"header": [
								{
									"name": "access-control-allow-headers",
									"key": "access-control-allow-headers",
									"value": "Content-Type, Accept, Authorization, X-Requested-With, Application",
									"description": "Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request."
								},
								{
									"name": "access-control-allow-methods",
									"key": "access-control-allow-methods",
									"value": "POST, GET, OPTIONS, PUT, DELETE",
									"description": "Specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request."
								},
								{
									"name": "access-control-allow-origin",
									"key": "access-control-allow-origin",
									"value": "*",
									"description": "Specifies a URI that may access the resource. For requests without credentials, the server may specify '*' as a wildcard, thereby allowing any origin to access the resource."
								},
								{
									"name": "cache-control",
									"key": "cache-control",
									"value": "no-cache",
									"description": "Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds"
								},
								{
									"name": "connection",
									"key": "connection",
									"value": "keep-alive",
									"description": "Options that are desired for the connection"
								},
								{
									"name": "content-type",
									"key": "content-type",
									"value": "application/json",
									"description": "The mime type of this content"
								},
								{
									"name": "date",
									"key": "date",
									"value": "Tue, 23 Jan 2018 12:04:03 GMT",
									"description": "The date and time that the message was sent"
								},
								{
									"name": "server",
									"key": "server",
									"value": "nginx",
									"description": "A name for the server"
								},
								{
									"name": "transfer-encoding",
									"key": "transfer-encoding",
									"value": "chunked",
									"description": "The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity."
								},
								{
									"name": "x-powered-by",
									"key": "x-powered-by",
									"value": "PHP/7.1.12",
									"description": "Specifies the technology (ASP.NET, PHP, JBoss, e.g.) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)"
								}
							],
							"cookie": [],
							"responseTime": 113,
							"body": "{\"code\":0,\"status\":false,\"msg\":\"work\\u6a21\\u5757\\u672a\\u586b\\u5199\",\"res\":[]}"
						}
					]
				}
			]
		}