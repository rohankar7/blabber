import React,{ useEffect} from 'react';
import {Link} from 'react-router-dom';
import './css/UI.css'

const Home = () => {

    useEffect(()=>{
        
    },[]);

    return (
        <div className="Home">
            <div>
                <div className='Title'>
                    Welcome to Blabber<br/><br/>One of the growing communities
                </div>
            </div>
            <div className='navUl' style={{listStyleType: 'none'}}>
                <div className="signInBox">
                    <ul className='navBar'>
                        <li className='navItems'><Link to='/login' style={{textDecoration:'none', padding: '2.5vh 43%', borderRadius: '5px', color: 'black', position: 'relative', left: "-7%"}}>Login</Link></li>
                        <li className='navItems'><Link to='/signup' style={{textDecoration:'none', padding: '2.5vh 38.5%', borderRadius: '5px', color: 'black', position: 'relative', left: "-7%"}}>Sign Up</Link></li>
                    </ul>
                </div>
                <div className='Back'>
                    <img src='Assets/chat.png' alt='chatImage'/>
                </div>
            </div>
        </div>
    );
}

export default Home;