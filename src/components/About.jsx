import React, { useContext } from 'react'
import { Container, SkillsCom } from '../styles/styles'
import { DataContext } from '../App'

function About() {

    const data = useContext(DataContext);

  return (
    <Container>
        <h1>About</h1>
        <hr />
        <div style={{ textAlign: 'center', margin: '2rem 0'}}>
        <img src={data.basics?.picture} width="200px" style={{ borderRadius: '100%' }} alt="" />
        <ul style={{ listStyle: 'none' }}>
            <li style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Name : {data.basics?.name}</li>
            <li>{data.basics?.headline}</li>
            <li>{data.basics?.region}</li>
            <li>My Website : <a href={data.basics?.website} target="_blank">{data.basics?.website}</a></li>
            <li>My Blog : <a href={data.basics?.blog} target="_blank">{data.basics?.blog}</a></li>
        </ul>
        <hr />
        <h3>My Skills</h3>
        <SkillsCom>
            {data.skills?.map((val, idx) => (
                <li key={idx} style={{ marginBottom: '.5rem' }}>
                    <strong>{val.name}</strong> 
                    <br />
                    Level: {val.level}
                </li>
            ))}
        </SkillsCom>
        </div>
    </Container>
  )
}

export default About