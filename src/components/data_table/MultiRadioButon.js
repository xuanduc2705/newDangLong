import { RadioButton } from 'primereact/radiobutton'
import { classNames } from 'primereact/utils'

export const MultiRadioButton = (props) => {
    const { options, label, className, value, onChange, ...prop } = props

    return (
        <div className="mb-3 text-left px-2">
            {label && <label className="font-medium">{label}</label>}
            <div className="w-full mt-2 flex align-items-center" style={{ minHeight: '50px' }}>
                <div className={classNames('flex justify-content-around', className)}>
                    {options.map((d) => (
                        <div key={d.id} className="flex align-items-center">
                            <RadioButton
                                inputId={`${d.name || d.title}_${d.id}`}
                                onChange={() => onChange(d.id)}
                                checked={value === d.id}
                                {...prop}
                            />
                            <label htmlFor={`${d.name || d.title}_${d.id}`} className="ml-2 font-normal cursor-pointer">
                                {d.name || d.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
