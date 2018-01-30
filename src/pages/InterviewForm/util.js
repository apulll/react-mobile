/*
* @Author: perry
* @Date:   2018-01-24 18:03:04
* @Last Modified by:   perry
* @Last Modified time: 2018-01-30 14:28:45
*/
import cookie from 'js-cookie';
import { map, cloneDeep, concat, forIn, pick, isEmpty, difference, pullAt } from 'lodash';
/**
 * 合并表单基本信息 和 表单扩展信息 和 用户填写表单信息
 * @param  {[type]}  origin      客户端固定的表单基本必填信息
 * @param  {[type]}  detail      请求数据得到的表单模块详情
 * @param  {Array}   extendsData 请求数据得到的表单模块详情中用户填写字段
 * @param  {Boolean} isAdd       是否是新增内容（）
 * @return {[type]}              [description]
 */
export function resDataFormat(origin, detail={}, extendsData=[], isAdd = false) {
	let originCopy = cloneDeep(origin)
	if(!isEmpty(detail)){
		map(originCopy,(value, key) => {
		 value['column_value'] = !isAdd ? detail[value['column_alias']] : null

		})
		//如果 detail 中的extends 有和extendsData重复，使用detail.extends中的值覆盖掉extendsData值
		const extendFields = pickData(detail.extends, extendsData)
		return concat(originCopy, extendFields)
	}else {
		return concat(originCopy, extendsData)
	}
	
}
/**
 * 合并模板扩展字段和用户自定义字段， 默认使用用户自定义字段当两个字段同名时
 * @param  {[type]} origin 用户自定义字段集合
 * @param  {[type]} target 模板扩展字段集合
 * @return {[type]}        [description]
 */
function pickData(origin, target) {
	const newArr = cloneDeep(origin);
	let newTarget = cloneDeep(target);
	map(origin,function(value, key){
		if(!newTarget) return;
		map(newTarget,function(value2, key2){
			if(value.column_alias === value2.column_alias){
				pullAt(newTarget,key2)
			}
		})
	})
	if(newTarget) return concat(newArr, newTarget);

	return newArr;
}
/**
 * 表单填写错误信息展示
 * 目前默认返回错误信息的第一条数据
 * @param  {[type]} error [description]
 * @return {[type]}       [description]
 */
export function formErrorsMsg(error) {
	let errorsArr = []
	forIn(error,function(value, key){
		errorsArr.push(value.errors)
	})
	// errorsArr = reverse(errorsArr)
	return errorsArr[0][0].message
}
/**
 * 面试登记表相关默认参数
 * @param  {[type]} detail 得到的详情
 * @param  {[type]} params 当前路由相关参数
 * @return {[type]}        [description]
 */
export function defaultParams(params, detail ={}) {
	
	let newParams = {}
	newParams.access_token = cookie.get('access_token') || ''
    newParams.company_id = cookie.get('company_id') || ''
    newParams.batch_id = cookie.get('batch_id') || ''
    newParams.invitation_id = cookie.get('invitation_id') || ''
    newParams.template_id = params && (params.template_id || '')
    newParams.template_module_id = params && (params.template_module_id || '')

    return newParams
}

export function setDomainCookie(info={}, keys=[], maxAge=''){
	const newInfo = pick(info, keys)
	forIn(newInfo, function(value, key) {
		cookie.set(key,value)
	})
	//  
}
export function setCookie(name, value='', expires=1/24){
	cookie.set(name,value, { expires: expires})
}



