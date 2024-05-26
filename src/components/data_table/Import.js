import { Button } from '@/uiCore'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToast } from '@/redux/features'
import { listToast } from '@/constants'
import { Dialogz } from '@/components/Dialogz'
import { removeSpecialCharacter } from '@/utils'

export const Import = (props) => {
    const { title, action, template, visible, setVisible, MoreOption, handleData, handleSuccess = () => {} } = props
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectFile, setSelectFile] = useState('')

    const handleImport = (e) => {
        const file = e.target.files[0]
        if (file) {
            const isExcelFile = /\.(xlsx|xls)$/i.test(file.name)
            if (!isExcelFile) {
                return dispatch(setToast({ ...listToast[1], detail: 'Vui lòng chỉ chọn file excel!' }))
            }
            setFile({ ...file, file: file })
            setSelectFile(file && file.name)
        }
    }

    async function fetchDataSubmit(info) {
        const response = await action(info)
        if (response) setLoading(false)
        if (response.status) {
            handleSuccess()
            const downloadLink = document.createElement('a')
            downloadLink.href = URL.createObjectURL(response.data)
            downloadLink.download = (title && `ket_qua_import_${removeSpecialCharacter(title)}.xlsx`) || 'data.xlsx'
            downloadLink.click()
            dispatch(setToast({ ...listToast[0], detail: `Import ${title} thành công!` }))
        } else dispatch(setToast({ ...listToast[1], detail: 'Có lỗi xảy ra!' }))
    }

    const handleSubmit = () => {
        let infos = handleData ? handleData() : {}
        if (file && file.file) {
            let info = { file: file.file }
            if (infos) {
                if (typeof infos === 'string') {
                    dispatch(setToast({ ...listToast[1], detail: infos }))
                    return
                } else if (typeof infos === 'object') {
                    info = { ...info, ...infos }
                }
            }
            setLoading(true)
            fetchDataSubmit(info)
        } else dispatch(setToast({ ...listToast[1], detail: 'Vui Lòng chọn file!' }))
    }

    return (
        visible && (
            <Dialogz title={'Import ' + title} visible={visible} onHide={() => setVisible(false)} width="800px">
                <div className="card">
                    <div className="justify-content-center text-center mt-3">
                        <label className="p-button p-fileupload-choose p-component">
                            <span className="p-button-text p-clickable">Choose a file</span>
                            <input type="file" onChange={handleImport} className="p-inputtext p-component" />
                        </label>
                        {selectFile && <div className={'mt-2'}>Select file: {selectFile}</div>}
                        {MoreOption && <MoreOption />}
                    </div>
                    <div className="justify-content-center mt-4 flex">
                        <Button
                            label="Bỏ chọn file"
                            onClick={() => {
                                setSelectFile('')
                                setFile(null)
                            }}
                            className="ml-2 mt-2"
                            severity="secondary"
                            size="small"
                            outlined
                        />
                        <Button
                            loading={loading}
                            onClick={handleSubmit}
                            label="Import"
                            className="ml-2 mt-2"
                            severity="info"
                            size="small"
                            raised
                        />
                        <Link to={template}>
                            <Button label="Tải file mẫu" className="ml-2 mt-2" severity="info" size="small" raised />
                        </Link>
                    </div>
                </div>
            </Dialogz>
        )
    )
}
