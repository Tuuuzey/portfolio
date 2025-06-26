import './Techs.css'
import Tech from './Tech'

import js from '../assets/techLogos/js.png' 
import css from '../assets/techLogos/css.png' 
import html from '../assets/techLogos/html.png' 
import react from '../assets/techLogos/react.png' 
import tw from '../assets/techLogos/tw.png' 
import bs from '../assets/techLogos/bs.png' 

import ts from '../assets/techLogos/ts.png' 
import django from '../assets/techLogos/django.png' 
import flask from '../assets/techLogos/flask.png' 
import python from '../assets/techLogos/python.png' 
import java from '../assets/techLogos/java.png' 
import nextjs from '../assets/techLogos/nextjs.png' 
import php from '../assets/techLogos/php.png' 
import njs from '../assets/techLogos/njs.png' 
import mongodb from '../assets/techLogos/mongodb.png' 
import postgre from '../assets/techLogos/postgre.png' 
import sql from '../assets/techLogos/sql.png' 

import git from '../assets/techLogos/git.png' 
import docker from '../assets/techLogos/docker.png' 

export default function Techs() {
  return (
    <>
      <div className='techs-text'>
        <h2 className='techs-title'>Technologies</h2>
        <p className='techs-subtitle'>that i use.</p>
      </div>

       <div className="tech-group">
        <Tech image={html} desc={'HTML'} />
        <Tech image={css} desc={'CSS'} />
        <Tech image={js} desc={'JS'} />
        <Tech image={react} desc={'REACT'} />
        <Tech image={tw} desc={'TAILWIND'} />
        <Tech image={bs} desc={'BOOTSTRAP'} />
      </div>

      <div className="tech-group">
        <Tech image={ts} desc={'TS'} />
        <Tech image={nextjs} desc={'NEXT JS'} />
        <Tech image={njs} desc={'NODE JS'} />
        <Tech image={java} desc={'JAVA'} />
        <Tech image={python} desc={'PYTHON'} />
        <Tech image={django} desc={'DJANGO'} />
        <Tech image={flask} desc={'FLASK'} />
        <Tech image={php} desc={'PHP'} />
        <Tech image={postgre} desc={'POSTGRE SQL'} />
        <Tech image={mongodb} desc={'MONGODB'} />
        <Tech image={sql} desc={'SQL'} />
      </div>

      <div className="tech-group">
        <Tech image={git} desc={'GIT'} />
        <Tech image={docker} desc={'DOCKER'} />
      </div>
    </> 
  )
}