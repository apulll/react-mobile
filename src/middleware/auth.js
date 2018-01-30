/*
* @Author: perry
* @Date:   2018-01-26 11:20:36
* @Last Modified by:   perry
* @Last Modified time: 2018-01-30 14:36:27
*/
import cookie from 'js-cookie';
import { isEmpty, has } from 'lodash';
import { setDomainCookie } from 'pages/InterviewForm/util';

export function loginBeforeAction(nextState, replace) {
  // console.log(555555)
  const query = nextState.location.query
  let newObj = {}

  if(!isEmpty(query) && has(query, 'company_id') && has(query, 'invitation_id')) {
  	newObj.company_id = query.company_id
  	newObj.invitation_id = query.invitation_id
  	setDomainCookie(newObj,['company_id','invitation_id'])
  }
  // if(ENV.DEBUG) return true;
  if(cookie.get('mila_muser')){
    if(isLogin()){
      return true
    }else{
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  	
  }else{
  	// return true
  	replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
  	})
  }
}

function isLogin() {
  let info = cookie.get('mila_muser');
  const company_id = cookie.get('company_id');
  const invitation_id = cookie.get('invitation_id');
  info = info ? JSON.parse(info) : {};
  if(info.company_id === company_id && info.invitation_id === invitation_id) {
    return true
  }
  return false
}