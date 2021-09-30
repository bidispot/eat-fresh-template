import React from 'react'
import styled from 'styled-components'
import Section from '../../components/layout/Section'
import SectionSubTitle from '../../components/layout/SectionSubTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import GridContainer from '../../components/layout/GridContainer'
import Button from '../../components/button/Button'

const Menu = () => {
  return (
    <StyledSection id='menu'>
      <SectionSubTitle>Specials</SectionSubTitle>
      <SectionTitle>Made with love for you this week</SectionTitle>

      <StyledGridContainer>
        <Content>
          <MenuImg src='/assets/img/plate.png' alt=''/>
          <Name>Mozzarella salad</Name>
          <Details>Fresh from Italy</Details>
          <Price>EUR 22.00</Price>
          <StyledButton><i className='bx bx-cart-alt'/></StyledButton>
        </Content>

        <Content>
          <MenuImg src='/assets/img/plate.png' alt=''/>
          <Name>Chicken cesar salad</Name>
          <Details>Farm chicken</Details>
          <Price>EUR 25.00</Price>
          <StyledButton><i className='bx bx-cart-alt'/></StyledButton>
        </Content>

        <Content>
          <MenuImg src='/assets/img/plate.png' alt=''/>
          <Name>Season salad</Name>
          <Details>Fresh from open market</Details>
          <Price>EUR 19.50</Price>
          <StyledButton><i className='bx bx-cart-alt'/></StyledButton>
        </Content>

      </StyledGridContainer>
    </StyledSection>
  )
}

export default Menu

const StyledSection = styled(Section)`
  @media screen and (min-width: 576px) {
    padding-top: 8rem;
  }

  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`

const StyledGridContainer = styled(GridContainer)`
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 210px);
    column-gap: 4rem;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  background-color: var(--container-color);
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(3, 74, 40, .15);
  padding: .75rem;

  @media screen and (min-width: 768px) {
    padding: 1.5rem;
  }
`

const MenuImg = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: var(--mb-2);

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  padding: .625rem .813rem;
  border-radius: .5rem 0 .5rem 0;
`

const Name = styled.h3`
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  font-size: var(--normal-font-size);
  margin-bottom: var(--mb-1);
`

const Price = styled.span`
  font-weight: var(--font-semi-bold);
  color: var(--primary-color);
  font-size: var(--small-font-size);

`

const Details = styled.span`
  color: var(--title-color);
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
`
