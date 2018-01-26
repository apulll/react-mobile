/*
* @Author: perry
* @Date:   2018-01-24 18:03:04
* @Last Modified by:   perry
* @Last Modified time: 2018-01-26 17:02:04
*/
import cookie from 'js-cookie';
import { map, cloneDeep, concat, forIn } from 'lodash';
/**
 * 合并表单基本信息 和 表单扩展信息 和 用户填写表单信息
 * @param  {[type]}  origin      客户端固定的表单基本必填信息
 * @param  {[type]}  detail      请求数据得到的表单模块详情
 * @param  {Array}   extendsData 请求数据得到的表单模块详情中用户填写字段
 * @param  {Boolean} isAdd       是否是新增内容（）
 * @return {[type]}              [description]
 */
export function resDataFormat(origin, detail, extendsData=[], isAdd = false) {
	let originCopy = cloneDeep(origin)
	map(originCopy,(value, key) => {
		 value['column_values'] = !isAdd ? detail[value['column_alias']] : null

	})
	console.log(concat(originCopy, extendsData, detail.extends),'originCopy')
	
	return concat(originCopy, extendsData, detail.extends)
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
	newParams.access_token = 'teNIPEZu7yPkyShnwoP9OpXwqw8HUF90jLVcDO5A'
    newParams.company_id = cookie.get('company_id') || ''
    newParams.batch_id = cookie.get('batch_id') || ''
    newParams.invitation_id = cookie.get('invitation_id') || ''
    newParams.template_id = params && (params.template_id || '')
    newParams.template_module_id = params && (params.template_module_id || '')

    return newParams
}

export function setDomainCookie(info){
	cookie.set('company_id',info.company_id, { expires: 1/24 })
	cookie.set('invitation_id',info.invitation_id, { expires: 1/24 })
	cookie.set('batch_id',info.batch_id, { expires: 1/24 })
	cookie.set('template_id',info.template_id, { expires: 1/24 })
}



