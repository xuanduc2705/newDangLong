import { listToast } from '@/constants'
import { generateRSAkey } from '@/lib'
import { setToast } from '@/redux/features/toast'
import store from '@/redux/store'
import axios from 'axios'
import { clientId } from './getClientId'

export const clientApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
})

clientApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        const item = store.getState().item || {}
        const time = Date.now()
        config.headers['Authorization'] = `Bearer ${token}`
        config.headers['info'] = JSON.stringify({
            client_id: `${clientId}`,
            deivce_name: 'win10amddmddm',
            bundle_id: '2131231231',
            company_id: item.company_id,
            building_id: item.building_id,
            time,
            signature: generateRSAkey(clientId + time),
        })
        if (config.url.includes('/building_managementaaa')) {
            return Promise.reject({ status: false, mess: 'Bạn không có quyền thực hiện tác vụ này' })
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

clientApi.interceptors.response.use(
    async function (res) {
        if (res?.data?.status) {
            return res.data.data
        }
        return res
    },
    async function (error) {
        if (error.mess)
            store.dispatch(
                setToast({
                    ...listToast[1],
                    detail: error.mess || 'Đường truyền không ổn định, vui lòng thử lại sau!',
                }),
            )
        return {
            data: { data: {}, status: false, mess: error.mess || 'Đường truyền không ổn định, vui lòng thử lại sau!' },
        }
    },
)
