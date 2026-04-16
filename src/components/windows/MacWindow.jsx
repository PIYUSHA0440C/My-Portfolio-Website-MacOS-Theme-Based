import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({ children, width = '40vw', height = '40vh', windowName, setWindowsState }) => {
    return (
        <div>
            <Rnd
                default={{
                    width: width,
                    height: height,
                    x: 300,
                    y: 200
                }}
                minWidth={'30vw'}
                minHeight={'30vh'}
            >
                <div className="window">
                    <div className="nav">
                        <div className="dots">
                            <div onClick={() => {
                                setWindowsState(state => ({
                                    ...state,
                                    [windowName]: false
                                }))
                            }}
                                className="dot red"></div>
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
