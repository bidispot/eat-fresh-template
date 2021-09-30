import React from 'react'
import styled from 'styled-components'

const ScrollToTop = () => {
  const [isVisible, setVisible] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 560) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = e => {
    if (e) {
      e.preventDefault();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <StyledScrollTop onClick={scrollToTop} isVisible={isVisible}>
      <StyledI className='bx bx-chevron-up'/>
    </StyledScrollTop>
  )
}

export default ScrollToTop

const StyledScrollTop = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({isVisible}) => isVisible ? '1.5rem' : '-20%'};
  justify-content: center;
  align-items: center;
  padding: .3rem;
  display: flex;
  background: rgba(6, 156, 84, .5);
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
  visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden'};

  &:hover {
    background-color: var(--primary-color-alt);
  }
`

const StyledI = styled.i`
  font-size: 1.8rem;
  color: var(--body-color);
`
