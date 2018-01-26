/*
* @Author: perry
* @Date:   2018-01-23 17:33:43
* @Last Modified by:   perry
* @Last Modified time: 2018-01-25 23:15:28
*/
import fetch from './fetch';
import { isDate, forIn, cloneDeep } from 'lodash';

export async function  getAccessToken(argument) {
	// body...
	const newData = await fetch({
						url:'http://oauth.dev.mila66.com/oauth/access_token',
						data:{
							grant_type : 'client_credentials',
							client_id : 100013,
							client_secret : 'admin123',
						}
					})
}

// export function interView

function dateFormat(data, format) {
	const year = data.getFullYear();
	const month = data.getMonth() + 1;
	const day = data.getDay();
	return `${year}-${month}-${day}`
}

export function formatFormData(data) {
	const newData = cloneDeep(data)
	forIn(newData, function(value, key){
		if(isDate(value)) newData[key] = dateFormat(value, 'YY-mm-dd')
	})
	return newData
}