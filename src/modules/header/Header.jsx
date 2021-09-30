import React from 'react'
import styled from 'styled-components'
import { APP_TITLE } from '../constants'
import LayoutContainer from '../../components/layout/LayoutContainer'

const Header = () => {

  return (
    <StyledHeader id='header'>
      <LayoutContainer isGridLayout={false}>
        <StyledNav>
          <Logo href='#'>{APP_TITLE} 🥗</Logo>

          <NavMenu id='nav-menu'>
            <NavList>
              <NavItem><NavLink href='#home' style={{ color: 'var(--primary-color)' }}>Home</NavLink></NavItem>
              <NavItem><NavLink href='#about'>About</NavLink></NavItem>
              <NavItem><NavLink href='#services'>Our Services</NavLink></NavItem>
              <NavItem><NavLink href='#menu'>Weekly Specials</NavLink></NavItem>
              <NavItem><NavLink href='#contact'>Contact</NavLink></NavItem>

              {/*<li><i className='bx bx-moon change-theme' id='theme-button'/></li>*/}
            </NavList>
          </NavMenu>

          <MenuToggle id='nav-toggle'>
            <i className='bx bx-menu'/>
          </MenuToggle>
        </StyledNav>
      </LayoutContainer>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
`

const StyledNav = styled.nav`
  max-width: 1024px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: calc(var(--header-height) + 1.5rem);
  }
`

const NavItem = styled.li`
  margin-bottom: var(--mb-2);

  @media screen and (min-width: 768px) {
    margin-left: var(--mb-5);
    margin-bottom: 0;
  }
`

const NavList = styled.ul`
  @media screen and (min-width: 768px){
    display: flex;
  }
`

const Logo = styled.a`
  color: var(--text-color);
  font-weight: var(--font-medium);

  &:hover {
    color: var(--primary-color);
  }
`

const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    padding: 1.5rem 0 1rem;
    text-align: center;
    background-color: var(--body-color);
    transition: .4s;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
    border-radius: 0 0 1rem 1rem;
    z-index: var(--z-fixed);
  }
`

const NavLink = styled.a`
  color: var(--text-color);
  font-weight: var(--font-medium);
  transition: .3s;

  &:hover {
    color: var(--primary-color);
  }
`

const MenuToggle = styled.div`
  @media screen and (max-width: 768px) {
    color: var(--text-color);
    font-weight: var(--font-medium);
    font-size: 1.3rem;
    cursor: pointer;
  }
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`
