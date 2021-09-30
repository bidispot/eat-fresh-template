import React from 'react'
import styled from 'styled-components'
import Button from '../../components/button/Button'
import { CONTACT_US } from './constants'
import GridContainer from '../../components/layout/GridContainer'
import SectionSubTitle from '../../components/layout/SectionSubTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const Contact = () => {
  return (
    <Section id="contact">
      <StyledGridContainer>
        <div>
          <SectionSubTitle isInitial>Let's chat</SectionSubTitle>
          <SectionTitle isInitial>Contact us</SectionTitle>
          <Description>If you want to book a table in our restaurant, contact us, 24/7 chat service.</Description>
        </div>

        <ButtonWrapper>
          <Button>{CONTACT_US}</Button>
        </ButtonWrapper>
      </StyledGridContainer>
    </Section>
  )
}

export default Contact

const Section = styled.section`
  padding-top: 0;
  padding-bottom: 26rem;
  @media screen and (min-width: 576px) {
    padding-bottom: 16rem;  
  }
`

const ButtonWrapper = styled.div`
  @media screen and (min-width: 576px){
    justify-self: center;
  }
`

const StyledGridContainer = styled(GridContainer)`
  background-color: rgba(6, 156, 84, 0.3);
  position: absolute;
  left: 0;
  padding: 80px 20% 60px 20% !important;
  width: 100vw;
  text-align: center;

  @media screen and (min-width: 576px){
    text-align: initial;
    grid-template-columns: 1.75fr 1fr;
    align-items: center;
  }
`

const Description = styled.p`
  margin-bottom: var(--mb-3);
`
