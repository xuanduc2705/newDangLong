import { Dialog } from 'primereact/dialog'
import { useEffect } from 'react'

export const Dialogz = (props) => {
    const { title, visible, setVisible, position, onHide, width, ...prop } = props

    return (
        <Dialog
            header={title}
            visible={visible}
            position={position || 'top'}
            style={{ width: width || '50vw' }}
            onHide={onHide ? () => onHide() : () => setVisible(false)}
            draggable={false}
            resizable={false}
            {...prop}
        >
            {props.children}
        </Dialog>
    )
}

export const LoadDialog = ({ visible }) => {
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [visible])
    return <></>
}
