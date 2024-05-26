import { Checkbox } from 'primereact/checkbox'
import { classNames } from 'primereact/utils'

export const MultiCheckBox = (props) => {
    const { options, label, className, value, onChange, ...prop } = props

    const handleChange = (e) => {
        if (typeof value === 'object' && value[0]) {
            if (value.includes(e.value)) {
                onChange([...value.filter((p) => p !== e.value)])
            } else onChange([...value, e.value])
        } else return onChange([e.value])
    }

    return (
        <div className="mb-3 text-left px-2">
            {label && <label className="font-medium">{label}</label>}
            <div className="w-full mt-2 flex align-items-center" style={{ minHeight: '50px' }}>
                <div className={classNames('flex justify-content-around', className)}>
                    {options.map((d) => (
                        <div key={d.id} className="flex align-items-center">
                            <Checkbox
                                inputId={`${d.name || d.title}_${d.id}`}
                                value={d.id}
                                onChange={handleChange}
                                checked={value && value[0] ? value.includes(d.id) : false}
                                {...prop}
                            />
                            <label
                                htmlFor={`${d.name || d.title}_${d.id}`}
                                className="ml-2 cursor-pointer font-normal cursor-pointer"
                            >
                                {d.name || d.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
