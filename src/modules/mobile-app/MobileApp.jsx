import React from 'react'
import styled from 'styled-components'
import Section from '../../components/layout/Section'
import LayoutContainer from '../../components/layout/LayoutContainer'
import SectionSubTitle from '../../components/layout/SectionSubTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const MobileApp = () => {
  return (
    <StyledSection>
      <LayoutContainer>
        <InnerContainer>
          <SectionSubTitle isInitial>Mobile Application</SectionSubTitle>
          <SectionTitle isInitial>Available Now!</SectionTitle>
          <Description>Find our application and download it, you can make reservations, food orders,
            see your deliveries on the way and much more.</Description>
          <AppStores>
            <a href="#"><AppStore src="/assets/img/app1.png" alt="" /></a>
            <a href="#"><AppStore src="/assets/img/app2.png" alt="" /></a>
          </AppStores>
        </InnerContainer>

        <ImgWrapper src="/assets/img/mobile-app.png" alt="" />
      </LayoutContainer>
    </StyledSection>
  )
}

export default MobileApp

const StyledSection = styled(Section)`
  @media screen and (min-width: 576px) {
    padding-top: 8rem;
  }

  @media screen and (min-width: 768px){
    padding-top: 8rem;
  }
`

const Description = styled.p`
  margin-bottom: var(--mb-5);
`

const AppStore = styled.img`
  width: 120px;
  margin: 0 var(--mb-1);

  @media screen and (min-width: 768px) {
    margin: 0 var(--mb-1) 0 0;
  }
`

const AppStores = styled.div`
  margin-bottom: var(--mb-4);
`

const InnerContainer = styled.div`
  text-align: center;
  
  @media screen and (min-width: 576px){
    text-align: initial;
  }
`

const ImgWrapper = styled.img`
  width: 230px;
  justify-self: center;

  @media screen and (min-width: 576px) {
    width: 380px;
    order: -1;
  }
`
