import wepy from 'wepy'
import tip from './tip'

const env = 'prd'

let host = 'http://www.dayread.top'
// if (env === 'prd') {
//   host = 'http://101.132.88.243:8087'
// } else if (env === 'test') {
//   host = 'http://121.196.222.20:8087'
// }

exports.request = async (url, params = {}) => {


  let data = params.body || {}
  let res = await wepy.request({
    url: host + url,
    method: params.method || 'POST',
    data: data,
    header: { 'Content-Type': 'application/json' },
    success: function (res) {
      console.log('返回值',res)
    }
  })

  console.log('resssss',res)
  return res
}
