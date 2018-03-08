import { request } from '../utils'

export async function userInfo (params) {
    return request('/api/userInfo', {
        method: 'get',
        data: params,
    })
}