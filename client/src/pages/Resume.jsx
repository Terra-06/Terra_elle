import React from 'react'
import bkgd from '../videos/bkgd.mov'
import '../styles/Resume.css'
import TMSResume from '../imgs/TMSResume.png'
import TMSCert from '../imgs/TMSCert.png'

export default function Resume() {

    return (
        <div className='bkgd_vid'>
            <video loop muted autoPlay src={bkgd}
                style={{
                    position: 'fixed',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1',
                }}
            />
            <div className='superMain-contain'>
                <div className='resume_main-contain'>
                    <div className='resume_sub-contain'>
                        <div className='resume_page-contain resume'>
                            <img src={TMSResume} width='550' height='700'></img>
                        </div>
                    </div>
                </div>
                <div className='cert_main-contain'>
                    <div className='cert_sub-contain'>
                        <div className='cert_page-contain'>
                            <img src={TMSCert} height='450'></img>
                        </div>
                    </div>
                </div >
            </div>

        </div>
    )
}