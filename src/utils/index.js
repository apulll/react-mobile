/*
* @Author: perry
* @Date:   2018-01-23 17:33:43
* @Last Modified by:   perry
* @Last Modified time: 2018-01-23 17:37:52
*/
import fetch from './fetch';

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