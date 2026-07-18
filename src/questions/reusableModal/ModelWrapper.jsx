import React from 'react'
import './model.style.css'
import { useRef } from 'react';
import useClickOutside from './useClick-outside';

const ModelWrapper = ({ children, isOpen, isClose, root = document.body }) => {
    
    if (!isOpen) return null;
    const modelRef = useRef();
    useClickOutside(modelRef, isClose);
    return (
        <div className="modelWrapper">
            <div ref={modelRef} className="model-content">
                {children}
                <button onClick={isClose}>&times;</button>
            </div>
        </div>
    )
}

export default ModelWrapper
