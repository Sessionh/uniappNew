
class request {
  constructor() {
    this._header = {}
    this.baseUrl = ''
  }

  /**
 * 设置统一的异常处理
 */
  setErrorHandler(handler) {
    this._errorHandler = handler;
  }

  /**
   * 设置请求域名
   */
  setBaseUrl(url) {
    this.baseUrl = url
  }

  /**
   * GET类型的网络请求
   */
  get(url, data, header = this._header) {
    return this.requestAll(url, data, header, 'GET')
  }

  /**
   * DELETE类型的网络请求
   */
  delete(url, data, header = this._header) {
    return this.requestAll(url, data, header, 'DELETE')
  }

  /**
   * PUT类型的网络请求
   */
  put(url, data, header = this._header) {
    return this.requestAll(url, data, header, 'PUT')
  }

  /**
   * POST类型的网络请求
   */
  post(url, data, header = this._header) {
    return this.requestAll(url, data, header, 'POST')
  }

  /**
   * 网络请求
   */
  requestAll(url, data, header, method) {


    return new Promise((resolve, reject) => {
      uni.request({
        url: this.baseUrl + url,
        data: data,
        header: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
        method: method,
        success: (res => {
          console.log(res)
          if (res.data.a === '0') {
            //success: 服务端业务处理正常结束
            resolve(res.data)
          } else {
            //其它错误，提示用户错误信息
            if (this._errorHandler != null) {
              //如果有统一的异常处理，就先调用统一异常处理函数对异常进行处理
              this._errorHandler(res.data.c)
            }
            reject(res.data.c)
          }
        }),
        fail: (res => {
          if (this._errorHandler != null) {
            this._errorHandler(res.errMsg)
          }
          reject(res.errMsg)
        })
      })
    })
		
		
  }
}
export default request
