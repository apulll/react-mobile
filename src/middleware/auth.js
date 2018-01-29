/*
* @Author: perry
* @Date:   2018-01-26 11:20:36
* @Last Modified by:   perry
* @Last Modified time: 2018-01-29 15:07:08
*/
import cookie from 'js-cookie';
import { isEmpty, has } from 'lodash';
import { setDomainCookie } from 'pages/InterviewForm/util';

export function loginBeforeAction(nextState, replace) {
  const query = nextState.location.query
  let newObj = {}

  if(!isEmpty(query) && has(query, 'company_id') && has(query, 'invitation_id')) {
  	newObj.company_id = query.company_id
  	newObj.invitation_id = query.invitation_id
  	setDomainCookie(newObj,['company_id','invitation_id'])
  }
  if(ENV.DEBUG) return true;
  if(cookie.get('mila_muser')){
  	return true
  }else{
  	// return true
  	replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
  	})
  }
}