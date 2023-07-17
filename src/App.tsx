import styled from 'styled-components'

import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => {

  return (
    <AppWrapper className="App">
      <Header/>
      <Home />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: #444444;
`;

export default App;
