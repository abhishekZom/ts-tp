import { styled } from "styled-components"

const Header = () => {

  return (
    <HeaderContainer>
      <HeaderTitle>
        CRICKETERS
      </HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer  = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #444444;
`;

const HeaderTitle = styled.span`
  display: inline-block;
  color: #cccccc;
  padding: 1rem;
  margin: 1rem auto;
  font-family: 'Verdana';
  font-weight: 600;
  font-size: 22px;
`

export default Header;
