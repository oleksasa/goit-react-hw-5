import React from 'react'
import * as S from './ErrorMessage.style'

const ErrorMessage = ({message = "Sorry, an error occurred, please try again later"}) => {
  return (
    <S.Message>{message}</S.Message>
  )
}

export default ErrorMessage