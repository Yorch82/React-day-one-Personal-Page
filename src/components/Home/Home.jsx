import './Home.css'
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className='body'>
            <div>
                <div>
                    <img className='image' src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" alt="gif"/>
                </div>
                <div>
                    <h2>About Me :</h2>
                    <p>I am a Full Stack Developer Student <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30" alt='cat'/> from Spain</p>
                    <ul className='list'>
                        <li>I'm currently taking bootcamp of Full Stack Web Developer @ The Bridge School, Valencia.</li>
                        <li>Full time geek.</li>
                        <li>In my free time I like to play FPS games and play guitar.</li>
                        <li>How to reach me: <a href="https://www.linkedin.com/in/jorge-campo-silvestre-350b7b174" className='button' target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </div>                
            </div>            
        </div>       
    )
}

export default Home