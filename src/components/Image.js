import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, ...rest }) => (
  <img src={src} alt="" style={{ width: '228px', height: '110px' }} {...rest} />
)

Image.propTypes = {
  src: PropTypes.string.isRequired
}

export default Image
