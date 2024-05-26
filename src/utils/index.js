export const formatNumber = (amount, noRound) => {
    if (amount) return new Intl.NumberFormat('en-US').format(noRound ? amount : Math.round(amount))
    else return 0
}

export const removePropObject = (object1, object2) => {
    const changedProperties = {}
    for (const key in object1) {
        if (object1.hasOwnProperty(key) && JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
            changedProperties[key] = object1[key]
        }
    }
    return changedProperties
}

export const removePropObjectV2 = (object1, object2) => {
    const changedProperties = {}
    for (const key in object1) {
        if (object1.hasOwnProperty(key) && JSON.stringify(object1[key]) !== JSON.stringify(object2[key])) {
            changedProperties[key] = object1[key]
        }
    }
    return changedProperties
}

export const removeUndefinedProps = (obj) => {
    for (let prop in obj) {
        if (!(obj[prop] || obj[prop] === '' || obj[prop] === 0)) {
            delete obj[prop]
        }
    }
    return obj
}
export const removeNullProps = (object) => {
    const cleanedObject = {}
    for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] !== null && object[key] !== undefined) {
            cleanedObject[key] = object[key]
        }
    }
    return cleanedObject
}
export const refreshObject = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (key === 'dates') {
                object[key] = ''
            } else if (typeof object[key] === 'string') {
                object[key] = ''
            } else if (Array.isArray(object[key])) {
                object[key] = []
            } else if (typeof object[key] === 'object') {
                object[key] = {}
            } else {
                object[key] = undefined
            }
        }
    }
    return object
}
export const refreshObjectv2 = (object) => {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (key === 'dates') {
                object[key] = ''
            } else if (key === 'type') {
                object[key] = null
            } else if (typeof object[key] === 'string') {
                object[key] = ''
            } else if (Array.isArray(object[key])) {
                object[key] = []
            } else if (typeof object[key] === 'object') {
                object[key] = {}
            } else {
                object[key] = undefined
            }
        }
    }
    return object
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

export const getArrId = (arr = [], key = 'id') => {
    return arr.map((a) => a[key])
}

export const checkJson = (str) => {
    try {
        const data = JSON.parse(str)
        return data
    } catch (e) {
        return false
    }
}

export const removeSpecialCharacter = (string) => {
    if (string) {
        // Loại bỏ dấu
        const normalizedString = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

        // Thay thế chữ "đ" thành "d" và "Đ" thành "D"
        const replacedString = normalizedString.replace(/đ/g, 'd').replace(/Đ/g, 'D')

        // Thay thế khoảng trắng bằng dấu gạch dưới
        const resultString = replacedString.replace(/\s+/g, '_')

        return resultString
    }
}
