import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({children}) => {
    return (
        <div>
            <Rnd
            default={{
                width:"40vw",
                height:"40vh",
                x: 300,
                y: 200
            }}
            minWidth={'40vh'}
            minHeight={'40vh'}
            >
                <div className="window">
                    <div className="nav">
                        <div className="dots">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>

                        <div className="title"><p>piyush</p></div>
                    </div>
                    <div className="main-content">
                        {children}
                    </div>
                </div>
            </Rnd>
        </div>
    )
}

export default MacWindow
