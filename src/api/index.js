/*
* @Author: perry
* @Date:   2018-01-29 12:50:33
* @Last Modified by:   perry
* @Last Modified time: 2018-01-29 15:05:36
*/
import { forEach } from 'lodash';
import apiInfo from './api';

function getApiUrl() {
	const info = apiInfo.item
	let newObj = {}
	forEach(info, function(value) {
		newObj[value.name] = value.request.url.raw.split('?')[0]
	})
	return newObj
}



const hrmapi = ENV.HRMAPI;

const API = {
	INTERVIEW_INVITEINFO: `${hrmapi}/Api/recruitment/interview/inviteInfoh5`,//查看面试邀约详情信息

	INTERVIEW_SENDSMS:`${hrmapi}/Api/interview/fill/sms`,//发送短信
	INTERVIEW_LOGIN:`${hrmapi}/Api/interview/fill/login`,//用户验证
	INTERVIEW_TEMPLATES:`${hrmapi}/Api/interview/templates`,//获取表单详情
	INTERVIEW_DATERMINE:`${hrmapi}/Api/interview/fill/determine`,//确认提交面试登记表

	INTERVIEW_BASIC:`${hrmapi}/Api/interview/fill/basic`,//基本信息
	INTERVIEW_FAMILY:`${hrmapi}/Api/interview/fill/family`,//家庭成员
	INTERVIEW_WORK:`${hrmapi}/Api/interview/fill/work`,//工作经历
	INTERVIEW_EDUCATION:`${hrmapi}/Api/interview/fill/education`,//教育经历
	INTERVIEW_EMERGENCY:`${hrmapi}/Api/interview/fill/emergency`,//紧急联系人
}


export default API