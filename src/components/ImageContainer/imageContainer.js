import React from 'react';

const ImageContainer = ({ src, alt, className, onClick }) => (
    <div>
        <img src={src}
            className={className}
            alt={alt}
            onClick={onClick}
        />
    </div>
)

export default ImageContainer;