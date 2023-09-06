import ContainerWrapper from './styles'

function Container({ children }) {
  return (
    <ContainerWrapper>
      {children}
    </ContainerWrapper>
  )
}

export default Container