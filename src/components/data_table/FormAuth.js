import { Checkbox, InputText } from '@/uiCore'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { classNames } from 'primereact/utils'
import { REGEX, getMessageFormat } from '@/constants'
import { Button } from 'primereact/button'

export const FormAuth = (props) => {
    const {
        title,
        subtitle,
        linkSubtitle,
        handleSubmit,
        lableSubmit,
        titleFooter,
        linkTitleFooter,
        loading,
        rememberPassword,
        disabled,
    } = props

    return (
        <div className="bg-primary-50 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div
                className="flex flex-column align-items-center justify-content-center"
                style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}
            >
                <div className="w-full bg-white pt-2 pb-6" style={{ minWidth: '440px', padding: '1.5rem' }}>
                    <div className="text-center mb-5 flex flex-column">
                        <div>
                            <img src="/assets/img/logo.png" alt="logo" height="100px" className="mt-4"></img>
                            {title && (
                                <div className="text-900 text-2xl mt-2 mb-2">
                                    <b style={{ color: '#3c8dbc', fontWeight: '650' }}>{title}</b>
                                </div>
                            )}
                        </div>
                        {linkSubtitle ? (
                            <Link
                                to={linkSubtitle}
                                className="font-medium text-sm no-underline gap-2 align-items-center"
                            >
                                <i className="pi pi-arrow-left text-sm mr-1"></i>
                                {subtitle}
                            </Link>
                        ) : (
                            <span className="text-600 font-medium text-sm">{subtitle}</span>
                        )}
                    </div>
                    <form onSubmit={handleSubmit}>
                        {props.children}
                        {titleFooter && (
                            <div className="flex align-items-center justify-content-between gap-5">
                                {rememberPassword && (
                                    <div className="flex align-items-center align-items-center mt-2">
                                        <Checkbox
                                            inputId="checked"
                                            checked={rememberPassword.checked}
                                            onChange={() => rememberPassword.setChecked((pre) => !pre)}
                                            className="mr-2"
                                        ></Checkbox>
                                        <label htmlFor="checked">Nhớ mật khẩu</label>
                                    </div>
                                )}
                                <Link
                                    to={linkTitleFooter}
                                    className="font-medium no-underline text-right mb-2"
                                    style={{ color: 'var(--primary-color)' }}
                                >
                                    {titleFooter}
                                </Link>
                            </div>
                        )}
                        <Button
                            label={lableSubmit || 'Xác nhận'}
                            className="w-full mt-6 text-lg"
                            style={{ minHeight: '50px', backgroundColor: '#3c8dbc' }}
                            loading={loading}
                            disabled={disabled}
                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export const FormInput = (props) => {
    const { label, id, placeholder, type, className, required, ...inputprop } = props
    const [error, setError] = useState(false)

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
        <div className="mb-3">
            {label && (
                <div className="w-full flex justify-content-between">
                    <label htmlFor={id} className="font-medium w-full">
                        {label}
                    </label>
                </div>
            )}
            <InputText
                id={id}
                className={classNames('w-full mt-2', { 'p-invalid': required && error }, className)}
                placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
                onBlur={handleValidate}
                onInput={required && setFocus}
                required={required}
                pattern={required ? (type === 'password' ? undefined : REGEX[type]) : undefined}
                type={type}
                style={{ minHeight: '42px' }}
                {...inputprop}
            />
            {required && error && (
                <div className="mt-1">
                    <span className="p-error w-full text-right text-sm ml-3">{error}</span>
                </div>
            )}
        </div>
    )
}
