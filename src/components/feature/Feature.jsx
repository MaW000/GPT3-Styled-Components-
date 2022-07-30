import React from 'react'
import styled from 'styled-components'

function Feature({ title, text }) {
  return (
    <Container className='feature'>
      <div className='title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='text'>
        <p>{text}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
    
  margin: 1rem;
  .title {
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;
    h1 {
      color: #fff;
      font-family: var(--font-family);
      font-weight: 800;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.04em;
    }
    div {
        width: 38px;
        height: 3px;
        background: var(--gradient-bar);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 0.25rem;
    }
  }
  
  .text {
    flex: 2;
    max-width: 390px;
    display: flex;
    
    p {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-text);
    }
  }

  @media screen and (max-width: 550px) {
    .title h1 {
        font-size: 14px;
        line-height: 22px;
    }

    .text p {
        font-size: 12px;
        line-height: 20px;
    }
}

`


export default Feature