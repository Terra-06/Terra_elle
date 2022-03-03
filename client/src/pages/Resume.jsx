import React from 'react'
import bkgd from '../videos/bkgd.mov'
import '../styles/Resume.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import TMSResume from '../assets/TMSResume.pdf'

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
            <div className='resume_main-contain resume'>
                <div className='resume_sub-contain'>
                    <div className='resume_page-contain'>
                        <Document className='resume' file={TMSResume}>
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                </div>
            </div>
        </div >
    )
}