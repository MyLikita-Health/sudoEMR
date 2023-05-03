import React from 'react'
import Dropzone from 'react-dropzone-uploader'

export default ({
  onSubmit = (f) => f,
  onChange = (f) => f,
  disabled = (f) => f,
}) => {
  // specify upload params and url for your files
  // const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      onChange(file)
    }
    // console.log(status, meta, file)
  }

  // // receives array of files that are done uploading when submit button is clicked
  // const handleSubmit = (files, allFiles) => {
  //   // console.log(files.map(f => f.meta))
  //   // allFiles.forEach(f => f.remove())
  // }

  return (
    <Dropzone
      // getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={onSubmit}
      accept="image/*,audio/*,video/*"
      disabled={disabled}
    />
  )
}
