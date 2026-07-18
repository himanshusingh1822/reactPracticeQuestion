import React, { useState } from 'react'
import './model.style.css'
import ModelWrapper from './ModelWrapper';

const ModelApp = () => {
    const[isOpen , setIsOpen] = useState(false) ; 
  return (
    <main>
        <div className="modelApp-container">
            <h1>Model App</h1>
            <p>This is modal app component to perform the Model reusable component ,bacially its a helper component only .</p>
            <h3>To activate the model wrapper press below button</h3>
            <button onClick={()=>setIsOpen(true)}>Activate</button>
            <ModelWrapper isOpen={isOpen} isClose={()=>setIsOpen(false)}>
                
                    <h1>Model title</h1>
                    <p>Model Body</p>
                
            </ModelWrapper>
        </div>
    </main>
  )
}

export default ModelApp
