import { MultiSelect as MultiSelects } from 'primereact/multiselect'

const MultiSelect = ({ ...rest }) => {
    return <MultiSelects emptyFilterMessage="Không tìm thấy dữ liệu" appendTo="self" {...rest} />
}

export default MultiSelect
