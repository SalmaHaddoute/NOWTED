import React from 'react'
import image from '../../Assets/galerie.png'
import cube from '../../Assets/cube.png'
import exportFile from '../../Assets/export.png'
import more from '../../Assets/more.png'

import './Bar.css'

export default function Bar() {
    return (
        <div>
        
        <div className="note-toolbar">
                    <div className="al">
                        <p>Paragraph</p>
                        <img src={more} alt="" />
                    </div>
                    <input type="text" className="font-size" value="16" />
                    <img src={more} alt="" />
                    <div className="all">
                        <button className="btn bold">B</button>
                        <button className="btn italic">I</button>
                        <button className="btn underline">U</button>
                    </div>
                    <div className="all">
                        <button className="btn insert-image"> 
                            <img src={image} alt="" />
                        </button>
                        <button className="btn link">
                            <img src={exportFile} alt="" />
                        </button>
                    </div>
                    <div className="all">
                        <button className="btn table">
                            <img src={cube} alt="" />
                        </button>
                    </div>
                    
                </div>
                
        </div>
    )
}
