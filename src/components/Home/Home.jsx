import './Home.css'

import reactSVG from '../../assets/react-original-wordmark.svg'
import cssSVG from '../../assets/css3-plain-wordmark.svg'
import htmlSVG from '../../assets/html5-original.svg'
import jsSVG from '../../assets/javascript-original.svg'
import mongoSVG from '../../assets/mongodb-original.svg'
import nodeSVG from '../../assets/nodejs-original.svg'
import expressSVG from '../../assets/express-original.svg'
import jestSVG from '../../assets/jest-plain.svg'
import kubernetesSVG from '../../assets/kubernetes-plain.svg'
import jenkinsSVG from '../../assets/jenkins-original.svg'
import dockerSVG from '../../assets/docker-original.svg'
import gitSVG from '../../assets/git-original-wordmark.svg'
import bootstrapSVG from '../../assets/bootstrap-original.svg'

const Home = () => {
    return (
        <div className='body'>
            <div>
                <div>
                    <img className='image' src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"/>
                </div>
                <div>
                    <h2>About Me :</h2>
                    <p>I am a Full Stack Developer Student <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30" /> from Spain</p>
                    <ul>
                        <li>I'm currently taking bootcamp of Full Stack Web Developer @ The Bridge School, Valencia.</li>
                        <li>Full time geek.</li>
                        <li>In my free time I like to play FPS games and play guitar.</li>
                        <li>How to reach me: <a href="https://www.linkedin.com/in/jorge-campo-silvestre-350b7b174">LinkedIn</a></li>
                    </ul>
                </div>                
            </div>
            <div >
                <div>
                    <h2>Languages and Tools :</h2>
                </div>
                <div className='iconContainer'>
                    <img className='icon' src={reactSVG} title="React" alt="React"/>
                    <img className='icon' src={cssSVG} title="CSS3" alt="CSS"/>
                    <img className='icon' src={htmlSVG} title="HTML5" alt="HTML"/>
                    <img className='icon' src={jsSVG} title="JavaScript" alt="JavaScript"/>
                    <img className='icon' src={mongoSVG} title="MongoDB" alt="MongoDB"/>
                    <img className='icon' src={nodeSVG} title="NodeJS" alt="NodeJS"/>
                    <img className='icon' src={expressSVG} title="Express" alt="Express"/>
                    <img className='icon' src={jestSVG} title="Jest" alt="Jest"/>
                    <img className='icon' src={kubernetesSVG} title="Kubernetes" alt="Kubernetes"/>
                    <img className='icon' src={jenkinsSVG} title="Jenkins" alt="Jenkins"/>
                    <img className='icon' src={dockerSVG} title="Docker" alt="Docker"/>
                    <img className='icon' src={gitSVG} title="Git" alt="Git"/>
                    <img className='icon' src={bootstrapSVG} title="Bootstrap" alt="Bootstrap" />
                </div>
                
                
            </div>
        </div>       
    )
}

  export default Home