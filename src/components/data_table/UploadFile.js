import { Button, Image } from '@/uiCore'
import React, { useEffect } from 'react'
import ShowFile from './ShowFile'

export const UploadFile = (props) => {
    const {
        file, setFile = () => {
        }, label, isView, target, width,
    } = props
    const fileType = file?.type
    const originFile = file
    useEffect(() => {
        return () => {
            file && URL.revokeObjectURL(file.preview)
        }
    }, [file])

    const handleFile = (e) => {
        const file = e.target.files[0]
        if (!file) return
        if (file.type) file.preview = URL.createObjectURL(file)
        setFile(file)
    }

    const clearImg = () => {
        setFile(null)
    }
    const Show = ({ file, fileType }) => {
        if (file && (fileType ? !fileType?.includes('image') : true) && (typeof file === 'string' ? !file.endsWith('webp') : true)) {
            return (
                <ShowFile originFile={originFile} width={width} target={target} link={file.name || file} className="font-semibold">
                    {file.name || file}
                </ShowFile>
            )
        } else if (file && (typeof file === 'string' ? file.endsWith('webp') : true)) {
            return (
                <Image
                    src={
                        typeof file === 'string'
                            ? file || '/assets/img/imgIcon.png'
                            : file?.preview || '/assets/img/imgIcon.png'
                    }
                    alt="Image"
                    width="130"
                    height="150"
                    preview
                />
            )
        }
    }

    return (
        <div className="mb-3 px-2">
            <label className="font-medium">{label}</label>
            <div className="card mt-2">
                {!isView && (
                    <div className="flex justify-content-end align-items-center mb-3">
                        <div className="flex align-items-center gap-2">
                            <Button
                                icon="pi pi-times"
                                disabled={!file}
                                onClick={clearImg}
                                severity="danger"
                                label="Bỏ chọn"
                                type="button"
                            />
                            <label className="p-button p-fileupload-choose p-component" style={{ minHeight: '40px' }}>
                                <i className="pi pi-plus mr-2"></i>
                                <span className="p-button-text p-clickable">Chọn file</span>
                                <input type="file" onChange={handleFile} className="p-inputtext p-component" />
                            </label>
                        </div>
                    </div>
                )}
                <div className="card bg-color flex">
                    <Show file={file} fileType={fileType} />
                </div>
            </div>
        </div>
    )
}

export const UploadFiles = (props) => {
    const {
        files = [], setFiles = () => {
        }, label,
    } = props

    const handleFile = (e) => {
        const file = e.target.files
        const imagesArray = []
        for (let i = 0; i < file.length; i++) {
            file[i].preview = URL.createObjectURL(file[i])
            imagesArray.push(file[i])
            if (imagesArray.length === file.length) {
                setFiles([...files, ...imagesArray])
            }
        }
    }

    const clearImg = () => {
        setFiles([])
    }

    const removeImg = (i, item) => {
        setFiles(files.filter((f) => f !== item))
    }

    return (
        <div className="mb-3 px-2">
            <label className="font-medium">{label || 'Chọn file'}</label>
            <div className="card mt-2">
                <div className="flex justify-content-end align-items-center mb-3">
                    <div className="flex align-items-center gap-2">
                        <Button
                            icon="pi pi-times"
                            disabled={!files[0]}
                            onClick={clearImg}
                            severity="danger"
                            label="Bỏ chọn"
                            type="button"
                        />
                        <label className="p-button p-fileupload-choose p-component" style={{ minHeight: '40px' }}>
                            <i className="pi pi-plus mr-2"></i>
                            <span className="p-button-text p-clickable">Chọn file</span>
                            <input type="file" onChange={handleFile} multiple className="p-inputtext p-component" />
                        </label>
                    </div>
                </div>
                <div className="card bg-color flex flex-column">
                    {files[0] &&
                        files.map((item, index) => {
                            return (
                                item && (
                                    <div key={index} className="card flex justify-content-between align-items-center">
                                        <ShowFile link={item.name || item} className="font-semibold">
                                            {item.name || item}
                                        </ShowFile>
                                        <div className="text-center mt-2">
                                            <Button
                                                onClick={(i) => removeImg(i, item)}
                                                type="button"
                                                icon="pi pi-times"
                                                severity="danger"
                                            />
                                        </div>
                                    </div>
                                )
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
