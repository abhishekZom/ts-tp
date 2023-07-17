import styled from 'styled-components'
import { Input } from 'antd'

interface Props {

}

const Search:React.FC<Props> = ({}) => {
  
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  
  return (
    <SearchContainer>
      <SearchLabel>Search</SearchLabel>
      &nbsp;
      <Input 
        type="text" 
        placeholder='Search Players'
        size='small'
        onChange={ changeHandler }/>
    </SearchContainer>
  )
}

const SearchContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchLabel = styled.span`
  color: #aaaaaa;
`;

export default Search;
