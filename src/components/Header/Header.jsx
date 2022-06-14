import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="App-header">
            <div><span>Yorch Dev</span></div>
            <div className='links'>
                <span>
                    <Link className='link' to="/">Inicio</Link>
                    <Link className='link' to="/portfolio">Portfolio</Link>                
                    <Link className='link' to="/user">Contacto</Link>
                </span> 
            </div>            
        </nav>        
    )
}

export default Header