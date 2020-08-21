import * as S from './styles'

const Main = ({
  title = 'Retro Mission',
  description = 'A board to make retrospective meetings'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
