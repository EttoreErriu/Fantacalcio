import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import { Route, Routes } from 'react-router-dom';
import RulesAboutGame from './components/RulesAboutGame';
import ShowTeams from './components/ShowTeams';
import ShowPlayers from './components/ShowPlayers';
import ShowSingleTeam from './components/ShowSingleTeam';
import NavbarTop from './pages/NavbarTop';
import axios from 'axios';
import Classifica from './components/Classifica';
import ShowStatisticsPlayer from './components/ShowStatisticPlayer';
import Matches from './components/Matches';
import Formation from './components/Formation';

function App() {

 const newAccount = (name, email, password) => {
    axios.post("http://localhost:8080/users", {
      name: name,
      email: email,
      password: password
    })
  }

  return (
    <div>       
      <NavbarTop/>  
      <Routes>       
            <Route path={"/"} element={<Home />} />
            <Route path={"/create"} element={<CreateAccount onSubmit={newAccount}/>} />
            <Route path={"/rules"} element={<RulesAboutGame />} />
            <Route path={"/teams"} element={<ShowTeams />} />
            <Route path={"/players"} element={<ShowPlayers />} />
            <Route path={"/fantaplayers/:id"} element={<ShowSingleTeam />} />
            <Route path={"/statisticsplayers/:id"} element={<ShowStatisticsPlayer />} />
            <Route path={"/classifica"} element={<Classifica />} />
            <Route path={"/matches"} element={<Matches />} />
            <Route path={"/formation"} element={<Formation />} />
      </Routes>
    </div>
  )
}

export default App;
