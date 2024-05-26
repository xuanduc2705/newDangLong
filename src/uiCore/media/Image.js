import { getData, getDataV2 } from '@/lib/request'
import { Image as Images } from 'primereact/image'
import { useEffect, useState } from 'react'

const Image = ({ src, ...rest }) => {
    const token = localStorage.getItem('token')
    // const [data, setData] = useState(null)
    // const handCheck = async () => {
    //     if (src && src.includes(process.env.REACT_APP_MEDIA)) {
    //         const res = await getDataV2(src)
    //         if (res?.data?.status) setData(res?.data?.data)
    //     } else setData(src)
    // }
    //
    // useEffect(() => {
    //     handCheck()
    // }, [src])

    return <Images src={src && src.includes(process.env.REACT_APP_MEDIA) ? `${src}?token=${token}` : src} {...rest} />
}

export default Image
