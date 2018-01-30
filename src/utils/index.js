/*
* @Author: perry
* @Date:   2018-01-23 17:33:43
* @Last Modified by:   perry
* @Last Modified time: 2018-01-30 14:25:27
*/
import cookie from 'js-cookie';
import fetch from './fetch';
import { isDate, forIn, cloneDeep } from 'lodash';

export async function  getAccessToken(argument) {
	if(cookie.get('access_token')) return ;
	// body...
	const newData = await fetch({
						url:`${ENV.OAUTHAPI}/oauth/access_token`,
						data:{
							grant_type : 'client_credentials',
							client_id : ENV.CLINET_ID,
							client_secret : ENV.CLIENT_SECRED,
						}
					})
	console.log(newData,'newd')
	cookie.set('access_token','fB0NNHkUiEFGPdnt85D6bg6y7rW77BxmS7FBCJgy', { expires: 1/24})
	// if(newData){
	// 	cookie.set('access_token',newData.access_token, { expires: 1/24})
	// }
}

// export function interView

function dateFormat(data, format) {
	const year = data.getFullYear();
	const month = data.getMonth() + 1;
	const day = data.getDate();
	return `${year}-${month}-${day}`
}

export function formatFormData(data) {
	const newData = cloneDeep(data)
	forIn(newData, function(value, key){
		if(isDate(value)) newData[key] = dateFormat(value, 'YY-mm-dd')
	})
	return newData
}

export function getDomainCookie(field){
	// console.log(cookie.get(field))
	return cookie.get(field)
}

export function setCookie(name, value='', expires=1/24){
	cookie.set(name,value, { expires: expires})
}