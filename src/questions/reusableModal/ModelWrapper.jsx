import React from 'react'
import './model.style.css'

const ModelWrapper = ({ children, isOpen, isClose, root = document.body}) => {
    if(!isOpen)return null;
    return (
        <div className="modelWrapper">
            <div className="model-content">
                {children}
                <button onClick={isClose}>&times;</button>
            </div>
        </div>
    )
}

export default ModelWrapper
