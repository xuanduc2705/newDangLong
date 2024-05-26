import { REGEX } from './regex'

export const NAME_VALIDATE = {
    email: { VI: 'Email không đúng định dạng', EN: 'Email malformed!' },
    phone: { VI: 'Số điện thoại không đúng định dạng', EN: 'Phone malformed!' },
    code: { VI: 'Mã không được chứa các ký tự đặc biệt', EN: 'Code cannot contain special characters!' },
    password: {
        VI: 'Mật khẩu phải lớn hơn 6 ký tự và không có khoảng trắng',
        EN: 'Password must be greater than 6 characters!',
    },
    text: { VI: 'Trường này không được bỏ trống', EN: 'This field cannot be left blank!' },
}

export const getMessageFormat = (type, language) => {
    type = type || 'text'
    language = language || 'VI'
    return NAME_VALIDATE[type][language]
}

export const getValidateOptions = (type) => {
    const required = getMessageFormat()
    const message = getMessageFormat(type)
    switch (type) {
        case 'email':
            return {
                pattern: {
                    value: REGEX.email,
                    message,
                },
                required,
            }
        case 'phone':
            return {
                pattern: {
                    value: REGEX.phone,
                    message,
                },
                required,
            }
        case 'code':
            return {
                pattern: {
                    value: REGEX.code,
                    message,
                },
                required,
            }
        case 'password':
            return {
                pattern: {
                    value: REGEX.password,
                    message,
                },
                required,
            }
        default:
            return { required }
    }
}
