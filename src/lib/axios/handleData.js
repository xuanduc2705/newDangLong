export const createFormData = (body = {}, files) => {
    const data = new FormData()
    if (files && typeof files === 'object') {
        for (const key in files) {
            if (key in files) {
                if (Array.isArray(files[key])) {
                    files[key].forEach((f) => {
                        data.append(key, f)
                    })
                } else data.append(key, files[key])
            }
        }
    }
    Object.keys(body).forEach((key) => {
        if (typeof body[key] === 'object') data.append(key, JSON.stringify(body[key]))
        else if (body[key] || body[key] === 0 || body[key] === '') data.append(key, body[key])
    })
    return data
}
export const convertData = (body = {}) => {
    Object.keys(body).forEach((key) => {
        if (!body[key]) {
            delete body[key]
        } else if (typeof body[key] === 'object') {
            body[key] = JSON.stringify(body[key])
        }
    })
    return body
}
