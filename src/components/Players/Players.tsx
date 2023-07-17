import styled from 'styled-components'
import Player from '../Player'

type Player = {
  id: string;
  name: string;
  description: string;
  type: string;
  points: number;
  dob: number;
}

interface Props {
  players: Player[]
}

const Players:React.FC<Props> = (props) => {
  const { players } = props

  return (
    <PlayersContainer>
      { players && players.map((player, i) => {
        return <Player key={ i } player={player}/>
      }
      )}
    </PlayersContainer>
  )
}

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export default Players
