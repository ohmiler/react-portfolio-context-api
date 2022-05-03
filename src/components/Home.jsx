import React, { useContext } from 'react'
import { DataContext } from '../App';
import { Container, HomeLayout } from '../styles/styles'

function Home() {

    const data = useContext(DataContext);

    console.log(data);

  return (
    <Container>
        <h1>Home</h1>
        <HomeLayout>
            <img style={{ borderRadius: '10px' }} src={data.basics?.picture} alt={data.basics?.name} />
            <ul style={{ listStyle: 'none'}}>
                <li style={{ fontSize: '2rem', marginBottom: '1rem'}}><strong>Name</strong> : {data.basics?.name}</li>
                <li style={{ fontSize: '1.2rem'}}><strong>Headline</strong> : {data.basics?.headline}</li>
            </ul>
        </HomeLayout>
    </Container>
  )
}

export default Home