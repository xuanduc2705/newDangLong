import { clientApi } from './clientApi'
import { convertData, createFormData } from './handleData'

export const postDataV2 = (url, data, isUpload = false, blob = false, timeout = 600000) => {
    if (isUpload || blob) {
        const { files, ...params } = data
        data = createFormData(params, files)
    } else data = convertData(data)
    if (blob)
        return clientApi.post(url, data, {
            timeout,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else if (isUpload) return clientApi.post(url, data, { timeout, headers: { 'Content-Type': 'multipart/form-data' } })
    else return clientApi.post(url, data, { timeout })
}

export const getDataV2 = (url, params, blob = false, timeout = 600000) => {
    params = convertData(params)
    if (blob)
        return clientApi.get(url + '?' + params, {
            params,
            timeout,
            responseType: 'blob',
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    else return clientApi.get(url, { params })
}
