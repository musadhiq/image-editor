import React from 'react'
import Editor from './Editor/Editor'
import ImageContainer from './Image/Image'

function ImageEditor() {
  return (
    <div className='w-full h-screen flex  justify-between md:flex-row flex-col gap-4 '>
        <ImageContainer/>
        <Editor/>
    </div>
  )
}

export default ImageEditor