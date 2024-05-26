import { useQuery } from '@tanstack/react-query'

export const useGetApi = (apiFunction, params = {}, queryKey, enabled) => {
    if (typeof apiFunction !== 'function') {
        throw new Error('apiFunction must be a function.')
    }

    if (!queryKey || queryKey.length === 0) {
        throw new Error('queryKey must be provided to uniquely identify the query.')
    }

    return useQuery({
        queryKey: [queryKey, params],
        queryFn: () => apiFunction({ ...params, render: undefined }),
        enabled,
        onError: (error) => {
            console.error('Error fetching data:', error)
        },
    })
}
