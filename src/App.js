
import './App.css';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './components/MainPage/MainPage';
import { CandidateReports } from './components/Candidate-reports-page/Candidate-reports-page';
import {Candidates} from './components/Candidates/Candidates';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />} />
      <Route path={'/'} element={<Layout />} >
        <Route path={'/candidates'} element={<Candidates/>}/>
        <Route path={'/candidate-reports-page'} element={<CandidateReports/>} />
      </Route>
    </Routes>
  );
}

export default App;
