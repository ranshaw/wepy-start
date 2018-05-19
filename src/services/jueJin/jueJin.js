import { request } from '../../utils/request'

exports.jueJinList = async (params) => {
  return request('/blog/jueJin',{
    method: 'GET',
    body: JSON.stringify(params)
  })
}
