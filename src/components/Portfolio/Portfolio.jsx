import { Link } from "react-router-dom"
import { Component } from 'react'
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

export class Portfolio extends Component {
  render() {
    return (
      <div>
        <div >                
                <div>
                    <h2>Languages and Tools :</h2>
                </div>
                <div> 
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yorch82&layout=compact&theme=vision-friendly-dark)" alt="Stats" />           
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
            <h2>Portfolio :</h2>
            <Link to="https://github.com/Yorch82?tab=repositories" className='button' target="_blank" rel="noreferrer">My recently projects</Link>
      </div>
    )
  }
}

export default Portfolio