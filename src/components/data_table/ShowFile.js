import { getData, getDataV2 } from '@/lib/request'
import { checkJson } from '@/utils'
import React from 'react'

const ShowFile = ({ link, label, children, className, target, width, originFile }) => {
    const token = localStorage.getItem('token')
    // const handleClick = async () => {
    //     const res = await getDataV2(link)
    //     if (res?.data?.status) window.open(res?.data?.data, "_blank")
    // }
    //
    // if (link && link.includes(process.env.REACT_APP_MEDIA)) return <a onClick={handleClick}>{children || label}</a>

    return (
        <a
            target={target}
            href={link && link.includes(process.env.REACT_APP_MEDIA) ? `${link}?token=${token}` : typeof originFile === 'object' ? URL.createObjectURL(originFile) : originFile}
            className={className}
            rel="noopener noreferrer"
        >
            <div className={`show ${width}`}>{children || label}</div>
        </a>
    )
}

export default ShowFile
