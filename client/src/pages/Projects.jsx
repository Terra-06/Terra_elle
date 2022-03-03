import React from 'react'
import bkgd from '../videos/bkgd.mov'
import anhome from '../imgs/anhome.png'
import ansearch from '../imgs/ansearch.png'
import mghome from '../imgs/mghome.png'
import mgplay from '../imgs/mgplay.png'
import phome from '../imgs/phome.png'
import plogin from '../imgs/plogin.png'
import thome from '../imgs/thome.png'
import tstart from '../imgs/tstart.png'
import '../styles/Projects.css'
import HorizontalScroll from 'react-scroll-horizontal'


export default function Projects() {

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
            <div className='project_contain'>

                <HorizontalScroll>
                    <div className='h1_1'>
                        <h1>Musical Guess</h1>
                        <p>scroll down</p>
                    </div>
                    {/* <div className='scroll'>
                        
                    </div> */}
                    <div className='main_contain pro1'>
                        <a href='https://musi-guess.surge.sh/musi-guess.html'><img className='p_img' alt='musical-guess-homepage' src={mghome} /></a>
                    </div>
                    <div className='main_contain pro1'>
                        <a href=''><img className='p_img' alt='musical-guess-play-page' src={mgplay} /></a>
                    </div>
                    <div className='sub_contain card1'>
                        <p>A modernized version of the classic game, 'guess-a-word', constructed using the following: </p>
                        <div className='icons'>
                            <i className="devicon-html5-plain icon"></i>
                            <p>HTML5</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-css3-plain icon"></i>
                            <p>CSS</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-javascript-plain icon"></i>
                            <p>JavaScript</p>
                        </div>
                    </div>

                    <div className='h1_2'>
                        <h1>Pure DJ</h1>
                    </div>
                    <div className='main_contain pro2'>
                        <a href=''><img className='p_img' alt='pure-dj-homepage' src={phome} /></a>
                    </div>
                    <div className='main_contain pro2'>
                        <img className='p_img' alt='pure-dj-login-page' src={plogin} />
                    </div>
                    <div className='sub_contain card2'>
                        <p>A complete MERN structured DJ record pool app, constructed using the following: </p>
                        <div className='icons'>
                            <i className="devicon-mongodb-plain icon"></i>
                            <p>MongoDB</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-express-original icon"></i>
                            <p>Express.js</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-react-original icon"></i>
                            <p>React.js</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-nodejs-plain icon"></i>
                            <p>Node.js</p>
                        </div>
                    </div>

                    <div className='h1_3'>
                        <h1>Tajj Mu'Hall</h1>
                    </div>
                    <div className='main_contain pro3'>
                        <a href='https://tajjmusichall.herokuapp.com/'><img className='p_img' alt='tajj-music-hall-homepage' src={thome} /></a>
                    </div>
                    <div className='main_contain pro3'>
                        <img className='p_img' alt='tajj-music-hall-start-page' src={tstart} />

                    </div>
                    <div className='sub_contain card3'>
                        <p>An event locator, planner and social app, constructed using the following: </p>

                        <div className='icons'>
                            <i className="devicon-react-original icon"></i>
                            <p>React.js</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-redux-original icon"></i>
                            <p>Redux</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-nodejs-plain icon"></i>
                            <p>Node.js</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-postgresql-plain icon"></i>
                            <p>PostgreSQL</p>
                        </div>
                    </div>

                    <div className='h1_4'>
                        <h1>Anthem Music</h1>
                    </div>
                    <div className='main_contain pro4'>
                        <a href='https://anthem-music-app.herokuapp.com/'><img className='p_img' alt='anthem-music-homepage' src={anhome} /></a>
                    </div>
                    <div className='main_contain pro4'>
                        <img className='p_img' alt='anthem-music-start-page' src={ansearch} />
                    </div>

                    <div className='sub_contain card4'>
                        <p>A music app, utilizing 3rd party API and user auth, constructed using the following: </p>
                        <div className='icons'>
                            <i className="devicon-python-plain"></i>
                            <p>Python</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-django-plain icon"></i>
                            <p>Django</p>
                        </div>
                        <div className='icons'>
                            <i className="devicon-vuejs-plain icon"></i>
                            <p>Vue.js</p>
                        </div>
                    </div>
                    <div className='scroll'>
                        <p>scroll up</p>
                    </div>
                </HorizontalScroll>
            </div>
        </div>
    )
}