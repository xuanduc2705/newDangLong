import { Dropdown as Dropdowns } from 'primereact/dropdown'

const Dropdown = ({ ...rest }) => {
    return (
        <Dropdowns
            showClear
            emptyFilterMessage="Không tìm thấy dữ liệu"
            emptyMessage="Không tìm thấy dữ liệu"
            appendTo="self"
            {...rest}
        />
    )
}

export default Dropdown
