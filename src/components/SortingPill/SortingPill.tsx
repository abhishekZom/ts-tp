import styled from 'styled-components'
import { Segmented } from 'antd'

interface Props {

}

const SortingPill:React.FC<Props> = ({}) => {
  return (
    <SortingPillContainer>
      <SortingPillLabel>Sort By</SortingPillLabel>
      &nbsp;
      <Segmented options={["name", "type", "points", "dob"]}/>
    </SortingPillContainer>
  )
}

const SortingPillContainer = styled.span`
  display: flex;
  align-items: center;
  border-radius: 5px;
` 
const SortingPillLabel = styled.span`
  color: #aaaaaa;
`
export default SortingPill
