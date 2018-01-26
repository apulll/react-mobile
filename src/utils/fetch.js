
import React from 'react';
import { Toast } from 'antd-mobile';
import axiosInstance from 'utils/axiosInstance';
import { assign, cloneDeep } from 'lodash';

const localFetch = (options) => {
  let {
    method = 'get',
    data = data || '',
    url,
  } = options;
  // console.warn(method);
  // const permissionParams = initPermissionRange();
  let cloneData = cloneDeep(data)

  cloneData = assign({}, cloneData)
  switch (method.toLowerCase()) {
    case 'get':
      return axiosInstance.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axiosInstance.delete(url, {
        params: cloneData,
      })
    case 'post':
      return axiosInstance.post(url, cloneData)
    case 'put':
      return axiosInstance.put(url, cloneData)
    case 'patch':
      return axiosInstance.patch(url, cloneData)
    default:
      return axiosInstance(options)
  }
}

 export default function fetch(options) {
 	 const opt = Object.assign(options)
   return localFetch(opt).then((response) => {
    if (response.status >= 200 && response.status < 306) {
      if (response.data.status) {
          return response.data
      } else {
          Toast.fail(response.data.msg, 1);
          return null;
      }
    } 	 
   })
   .catch((error) => {
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || '网络错误'
    }
    // message.error(_locale.network_error)
    Toast.offline(msg, 1);
    new Error(msg)
    return null
    // return response
  });
 }