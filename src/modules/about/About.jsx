import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button/Button'
import { EXPLORE } from './constants'
import SectionTitle from '../../components/layout/SectionTitle'
import SectionSubTitle from '../../components/layout/SectionSubTitle'

const About = () => {
  return (
    <SectionWrapper id="about">
      <AboutContainer>
        <InnerContainer>
          <SectionSubTitle isInitial>About us</SectionSubTitle>
          <SectionTitle isInitial>We prepare the best food for you.</SectionTitle>
          <Description>We prepare healthy and tasty food. Everything is homemade with care and passion.<br /> Come visit us.</Description>
          <Button>{EXPLORE}</Button>
        </InnerContainer>
        <ImgWrapper src="/assets/img/about.jpg" alt="" />
      </AboutContainer>
    </SectionWrapper>
  )
}

export default About

const SectionWrapper = styled.div`
  position: relative;
  padding-top: 0;
  padding-bottom: 42rem;
    
  @media screen and (min-width: 576px) {
    padding-top: 0;
    padding-bottom: 24rem;  
  }
  
  @media screen and (min-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const AboutContainer = styled.div`
  background-color: rgba(6, 156, 84, 0.3);
  position: absolute;
  left: 0;
  padding: 80px 20% 60px 20% !important;
  width: 100vw;

  display: grid;
  gap: 1.5rem;

  @media screen and (min-width: 576px){
    grid-template-columns: repeat(2,1fr);
    align-items: center;
  }
  
  @media screen and (min-width: 960px) {
    column-gap: 7rem;
  }
`

const InnerContainer = styled.div`
  text-align: center;
  
  @media screen and (min-width: 576px){
    text-align: initial;
  }
`

const Description = styled.p`
  margin-bottom: var(--mb-3);
`

const ImgWrapper = styled.img`
  width: 280px;
  border-radius: .5rem;
  justify-self: center;

  @media screen and (min-width: 576px) {
    width: 400px;
    order: -1;
  }
`
