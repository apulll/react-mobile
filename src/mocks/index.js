/*
* @Author: perry
* @Date:   2018-01-22 17:20:57
* @Last Modified by:   perry
* @Last Modified time: 2018-01-23 11:59:23
*/
//导入模块
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import basicInfoData from './data/basicInfo';
import educationData from './data/education';

const mockAxios = axios.create();
// 设置模拟调试器实例 
const mock = new MockAdapter(mockAxios);
// 模拟任意GET请求到 /users 
//reply的参数为 (status, data, headers) 
mock.onGet('/api/basicInfo').reply(200, basicInfoData);
mock.onGet('/api/education').reply(200, educationData);
mock.onPut('/api/basicInfo/update', { id: 4, name: 'foo' }).reply(200);

export default mockAxios
