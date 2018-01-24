/*
* @Author: perry
* @Date:   2018-01-24 18:03:04
* @Last Modified by:   perry
* @Last Modified time: 2018-01-24 18:46:01
*/
import { map, cloneDeep, concat } from 'lodash';

export function resDataFormat(origin, detail, extendsData=[], isAdd = false) {
	let originCopy = cloneDeep(origin)
	map(originCopy,(value, key) => {
		 value['column_values'] = !isAdd ? detail[value['column_alias']] : null

	})
	console.log(originCopy,'originCopy')
	// concat(originCopy, extendsData)
	return originCopy
}