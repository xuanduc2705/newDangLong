import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react'

class TinyMceEditor extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.props.setData(e.target.getContent())
    }

    render() {
        return (
            <div className="mb-3 px-2">
                {this.props.label && <label className="mt-3 font-medium w-5">{this.props.label}</label>}
                <div className="mt-2"></div>
                <Editor
                    apiKey="tt83g1s8ehmyleppcijwastmp8oriknphvwpd1n1066pjvd0"
                    initialValue={this.props.data}
                    init={{
                        branding: false,
                        height: this.props.height || 400,
                        menubar: true,
                        plugins:
                            'print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern',
                        toolbar:
                            'undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat',
                        image_advtab: true,
                        content_style: 'tr { text-align: center; }',
                    }}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}

const EditorV2 = (props) => {
    const { data, setData, height, label } = props

    return <TinyMceEditor data={data} label={label} setData={setData} height={height} />
}

export default EditorV2
