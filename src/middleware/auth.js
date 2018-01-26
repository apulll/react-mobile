/*
* @Author: perry
* @Date:   2018-01-26 11:20:36
* @Last Modified by:   perry
* @Last Modified time: 2018-01-26 11:52:54
*/
import cookie from 'js-cookie';


export function loginBeforeAction(nextState, replace) {
  if(cookie.get('mila_muser')){
  	return true
  }else{
  	return true
  	// replace({
   //    pathname: '/login',
   //    state: { nextPathname: nextState.location.pathname }
  	// })
  }
}