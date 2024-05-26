import { useLocation } from 'react-router-dom'

export const useGetParams = (array = []) => {
    const location = useLocation()
    const params = {}
    params.page = 1
    params.limit = 10
    params.render = false
    const queryParams = new URLSearchParams(location.search)
    for (let [key, value] of queryParams.entries()) {
        if (array.includes(key)) {
            const data = value.split(',') || []
            params[key] = data.map((d) => Number(d) || d)
        } else params[key] = Number(value) || value
    }
    params.first = (params.page - 1) * params.limit
    return params
}

export const useGetParamsV2 = () => {
    const location = useLocation()
    const params = {}
    params.page = 1
    params.limit = 5
    params.render = false
    const queryParams = new URLSearchParams(location.search)
    for (let [key, value] of queryParams.entries()) {
        params[key] = Number(value) || value
    }
    params.first = (params.page - 1) * params.limit
    return params
}
