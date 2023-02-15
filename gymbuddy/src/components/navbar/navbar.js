import React , { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import {Link} from 'react-router-dom'
import { observer } from 'mobx-react';
import { UserStore } from '../../Store/UserStore/userStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = observer(()=> {
    const [toggleMenu, setToggleMenu] = useState(false);
    const userStore = UserStore;
    console.log(userStore)
  return (
    <nav className='navbar' class='bg-dark'>
        <div className='navbar--div-links'>
            
            <Link className='links' to='/home'><h4>Gymbuddy</h4></Link>
            <Link className='links' to='/home'>Home</Link>
            <Link className='links' to='/administration'>Administration</Link>
        
        </div>
        {userStore.isAuth === false ? 
        <div id='btns' className='btns'>
        <Link to='/login'><button class='btn btn-primary'>Login</button></Link>
        <Link to='/register'><button class='btn btn-secondary'>Register</button></Link>
        </div> : 
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        }
        <div className='navbar--menu'>
        {toggleMenu
            ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
        <div className="navbar--menu-container scale-up-center">
            <div className="navbar--menu-container-links">
            <p>Pocetna</p>
            <p>O nama</p>
            <p>Galerija</p>
            <p>Kontakt</p>
            {userStore.isAuth === false && 
            <>
            <Link to='/login'><button class='btn btn-primary'>Login</button></Link>
            <Link to='/register'><button class='btn btn-secondary'>Register</button></Link>
            </>}
            </div>
        </div>
        )}
        </div>
  </nav>
  )
})
export default Navbar

