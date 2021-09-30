import React from 'react'
import { APP_TITLE } from '../constants'
import Section from '../../components/layout/Section'
import GridContainer from '../../components/layout/GridContainer'
import LayoutContainer from '../../components/layout/LayoutContainer'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Section>
      <LayoutContainer isGridLayout={false}>
        <GridContainer>
          <div>
            <Logo href="#">{APP_TITLE}</Logo>
            <Description>Restaurant.<br />Take Away.<br />Home delivery.</Description>
            <div>
              <Social href="#"><i className='bx bxl-facebook'/></Social>
              <Social href="#"><i className='bx bxl-instagram'/></Social>
              <Social href="#"><i className='bx bxl-twitter'/></Social>
            </div>
          </div>

          <div>
            <Title>Services</Title>
            <ul>
              <li><Link href="#">Delivery</Link></li>
              <li><Link href="#">Take away</Link></li>
              <li><Link href="#">Prices</Link></li>
              <li><Link href="#">Book a table</Link></li>
            </ul>
          </div>

          <div>
            <Title>Information</Title>
            <ul>
              <li><Link href="#">Covid check</Link></li>
              <li><Link href="#">Contact us</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <Title>Contact</Title>
            <ul>
              <li>Paris Champs-Elysées</li>
              <li>+33 (0) 123 456 789 </li>
              <li>eat_fresh_fr@example.com</li>
            </ul>
            <br />
            <ul>
              <li>Luxembourg City</li>
              <li>+452 (0) 123 456 789 </li>
              <li>eat_fresh_lu@example.com</li>
            </ul>
          </div>
        </GridContainer>
      </LayoutContainer>

      <Copy>
        <a style={{ color: 'rgb(6, 156, 84)', marginLeft: '5px' }} href='https://www.sebastienschaeffler.com' target='_blank'>
           Sébastien SCHAEFFLER
        </a> - Made with ❤️ in 2021
      </Copy>
    </Section>
  )
}

export default Footer

const Logo = styled.a`
  font-size: var(--h3-font-size);
  color: var(--primary-color);
  font-weight: var(--font-semi-bold);
`

const Description = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin: .25rem 0 var(--mb-3);
`

const Social = styled.a`
  font-size: 1.5rem;
  color: var(--title-color);
  margin-right: var(--mb-2);
`

const Title = styled.h3`
  font-size: var(--h2-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-2);
`

const Link = styled.a`
  display: inline-block;
  color: var(--text-color);
  margin-bottom: var(--mb-1);

  &:hover {
    color: var(--primary-color);
  }
`

const Copy = styled.p`
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  margin-top: 3.5rem;
`
