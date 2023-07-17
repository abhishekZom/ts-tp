import styled from 'styled-components'
import Search from '../../components/Search'
import SortingPill from '../SortingPill'
import ThemeSwitch from '../ThemeSwitch'

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Search />
      <SortingPill />
      <ThemeSwitch />
    </ToolbarContainer>
  )
}

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 2rem auto;
`

export default Toolbar;

