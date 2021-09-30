import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ target, children, ...otherProps }) => {
  return (
    <ButtonContainer {...otherProps}>
      <a href={target ?? '#'}>
        {children}
      </a>
    </ButtonContainer>
  )
}

Button.propTypes = {
  target: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Button

const ButtonContainer = styled.div`
  display: inline-block;
  background-color: var(--primary-color);
  padding: .75rem 1rem;
  border-radius: .5rem;
  transition: .3s;

  > * {
    color: #FFFFFF;
  }

  &:hover {
    background-color: var(--primary-color-alt);
  }
`
