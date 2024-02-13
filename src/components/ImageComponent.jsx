import React from 'react'
import './ImageComponent.css'


function ImageComponent(props) {

    const handleSelectImage = e => {

        let file = e.target.files[0];
        props.setSelectedImage(
            URL.createObjectURL(file)
        );

        props.handleResetValues()

    }

    return (
        <div className='image-component'>


            {
                props.selectedImage ? (
                    <canvas ref={props.canvasRef} />
                ) : null
            }


            <div className="upload">
                <input
                    className='d-none'
                    type="file"
                    id="upload"
                    onChange={handleSelectImage}
                />

                <label htmlFor="upload">
                    Upload Image
                </label>
            </div>

        </div>
    )
}

export default ImageComponent
