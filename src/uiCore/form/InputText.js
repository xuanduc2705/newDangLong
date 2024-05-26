import { InputText as InputTexts } from 'primereact/inputtext'

const InputText = ({ ...rest }) => {
    // const { placeholder, id } = rest
    // return <span className='p-float-label'>
    //     <InputTexts {...rest} />
    //     <label htmlFor={id}>{placeholder}</label>
    // </span>
    return <InputTexts {...rest} />
}

export default InputText
