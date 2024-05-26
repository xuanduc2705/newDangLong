import { useEffect, useState } from 'react'

export const useGetApi = (api = () => {}, params = {}, initData = null) => {
    const [data, setData] = useState(initData)
    async function fetchData() {
        const response = await api({ ...params })
        if (response.data && response.data.status && (response.data.data || response.data.data === 0))
            setData(response.data.data)
    }
    useEffect(() => {
        fetchData()
    }, [JSON.stringify(params)])
    return data
}
