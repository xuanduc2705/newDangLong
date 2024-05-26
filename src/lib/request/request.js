export const createFormData = (
    body = {},
    file,
    files,
    image,
    avatar,
    cmt_image,
    images,
    vehicle_registration,
    insurance_photo,
    logo,
    signature,
    education_files,
    health_files,
) => {
    const data = new FormData()
    if (file) {
        if (typeof file === 'object' && Array.isArray(file)) {
            Object.keys(file).forEach((value) => {
                data.append('file', file[value])
            })
        } else data.append('file', file)
    }
    if (image) {
        data.append('image', image)
    }
    if (avatar) {
        data.append('avatar', avatar)
    }
    if (logo) {
        data.append('logo', logo)
    }
    if (signature) {
        data.append('signature', signature)
    }
    if (files) {
        Object.keys(files).forEach((value) => {
            data.append('files', files[value])
        })
    }
    if (education_files) {
        Object.keys(education_files).forEach((value) => {
            data.append('education_files', education_files[value])
        })
    }
    if (health_files) {
        Object.keys(health_files).forEach((value) => {
            data.append('health_files', health_files[value])
        })
    }
    if (images) {
        Object.keys(images).forEach((value) => {
            data.append('images', images[value])
        })
    }
    if (vehicle_registration) {
        Object.keys(vehicle_registration).forEach((value) => {
            data.append('vehicle_registration', vehicle_registration[value])
        })
    }
    if (insurance_photo) {
        Object.keys(insurance_photo).forEach((value) => {
            data.append('insurance_photo', insurance_photo[value])
        })
    }
    if (cmt_image) {
        if (typeof cmt_image === 'object' && Array.isArray(cmt_image)) {
            Object.keys(cmt_image).forEach((value) => {
                data.append('cmt_image', cmt_image[value])
            })
        } else data.append('cmt_image', cmt_image)
    }
    Object.keys(body).forEach((key) => {
        if (typeof body[key] === 'object') {
            data.append(key, JSON.stringify(body[key]))
        } else if (body[key] || body[key] === 0 || body[key] === '') {
            if (typeof body[key] === 'string') data.append(key, body[key].trim())
            else data.append(key, body[key])
        }
    })
    return data
}
export const convertData = (body = {}) => {
    Object.keys(body).forEach((key) => {
        if (typeof body[key] === 'object') body[key] = JSON.stringify(body[key])
        else if (body[key] === '') return body[key]
        else if (typeof body[key] === 'string') body[key] = body[key].trim()
        else body[key] = body[key]
    })
    return body
}
