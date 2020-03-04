import Request from './request.js';
import {baseUrl} from './config.js';

let request = new Request()
request.setBaseUrl = baseUrl + 'actionDispatcher.do?reqUrl=';

module.exports = {
	request
}
