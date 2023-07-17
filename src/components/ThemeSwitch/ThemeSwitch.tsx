import styled from 'styled-components'
import { Switch } from 'antd'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeSwitch:React.FC = () => {
  const {state, dispatch} = useContext(ThemeContext)

  const onChangeHandler = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  return (
    <ThemeSwitchContainer>
      <ThemeSwitchLabel>Theme: Light</ThemeSwitchLabel>
      &nbsp;
      <Switch defaultChecked={true} onChange={onChangeHandler}/>
      &nbsp;<ThemeSwitchLabel>Dark</ThemeSwitchLabel>
    </ThemeSwitchContainer>
  )
}

const ThemeSwitchContainer = styled.span`
  display: flex;
  flex-direction: row;
`
const ThemeSwitchLabel = styled.span`
  color: #aaaaaa;
`

export default ThemeSwitch

