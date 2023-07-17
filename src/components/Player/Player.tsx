import styled from 'styled-components'

type Player = {
  id: string;
  name: string;
  description: string;
  type: string;
  points: number;
  dob: number;
}

interface Props {
  player: Player
}

const PlayerComp: React.FC<Props> = (props) => {
  const { player } = props

  return (
    <PlayerContainer>
      <Cell>
        <CustomLink href="/details">
          {player?.name}
        </CustomLink>
      </Cell>
      <Cell>{player?.type}</Cell>
      <Cell>{player?.dob}</Cell>
      <Cell>{player?.points}</Cell>
      <Cell>{player?.description.slice(10)}</Cell>
    </PlayerContainer>
  ) 
}

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Cell = styled.span`
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid #555555;
  width: 15vw;
  color: #cccccc;
  height: 2rem;
  overflow: hidden;
  
`

const CustomLink = styled.a`
  color: #cccccc;
  cursor: pointer;
  font-weight: 600;
`
export default PlayerComp

