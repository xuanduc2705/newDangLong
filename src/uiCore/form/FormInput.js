import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { classNames } from 'primereact/utils'
import { REGEX, getMessageFormat } from '@/constants'

const FormInput = (props) => {
    const [error, setError] = useState(false)
    const { type, onChange, id, required, className, ...inputProps } = props

    const handleValidate = (e) => {
        const value = e.target.value
        if (required) {
            if (!value) {
                setError(getMessageFormat())
                return
            } else if (REGEX[type] ? !REGEX[type].test(value) : false) {
                setError(getMessageFormat(type))
                return
            }
        }
    }

    const setFocus = () => {
        setError(false)
    }

    return (
        <div className="w-full">
            <div className="w-full">
                <InputText
                    className={classNames('w-full', className, { 'p-invalid': error })}
                    {...inputProps}
                    id={id}
                    type={type === 'phone' ? 'number' : type}
                    onChange={onChange}
                    onBlur={handleValidate}
                    onInput={required && setFocus}
                    required={required}
                    pattern={type === 'password' ? undefined : REGEX[type]}
                />
            </div>
            {required && error && <span className="p-error w-full mt-2">{error}</span>}
        </div>
    )
}

export default FormInput
