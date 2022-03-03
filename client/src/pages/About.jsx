import React from 'react'
import bkgd from '../videos/bkgd.mov'
import '../styles/About.css'
import Tprofile from '../imgs/Tprofile.jpg'

export default function About() {

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
            ></video>
            <div className='about_main-contain'>
                <div className='about_sub-contain'>
                    <h1>Meet Terra'elle</h1>
                    <div className='about_text-contain'>
                        <img src={Tprofile} alt='Terra profile image' className='about_image'></img>
                        <p>
                            Terra is a DJ/Producer who recently graduated from {''}<a href='https://generalassemb.ly/'>General Assembly</a>, A full-time, complete immersive software engineering program which focused on relevant industry standard technologies including: Javascript, Python, HTML, CSS, Django, Vue.js, React, Node, GitHub, PostgreSQL, Express and MongoDB.
                        </p>
                        <p>When Terra is not mixing and producing music, she can be found honing her coding skills on various group and independent projects.</p>
                        <p>Several of her most notable projects include:<br></br>
                            {''} <a href='https://musi-guess.surge.sh/'>Musi'Guess</a> a 'guess-the-word' game featuring over 50 musical terms.<br></br>
                            {''}<a href='https://tajjmusichall.herokuapp.com/'>Tajj Mu'Hall</a> a group project which features real-time events and social activities.<br></br>
                            {''} <a href='https://anthem-music-app.herokuapp.com/'>Anthem Music</a> Terra's capstone project, complete with user authentication and 3rd party music API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}