// lib
import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

// local
import Toolbar from '../components/Toolbar'
import getPlayers from '../api/player' 
import Players from '../components/Players'

interface Props {}

type Player = {
  id: string;
  name: string;
  description: string;
  type: string;
  points: number;
  dob: number;
}

const Home: React.FC<Props> = ({}) => {
  const [playersData, setPlayersData] = useState<Player[] | []>([])  

  useEffect(() => {
    const getList = async () => {
      const playersList = await getPlayers()
      setPlayersData(playersList)
    }
    getList()
  }, [])

  return (
    <HomeContainer>
      <Toolbar></Toolbar>
      <Players players={playersData}/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
flex-direction: column;
padding: 1rem;
border: 1px solid #777;
margin: 1rem auto;
-webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
`
export default Home

