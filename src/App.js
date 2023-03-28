
import './App.css';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { CandidateReports } from './components/CandidatePage/CandidatePage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route path={'/candidates/:id'} element={<CandidateReports/>} />
      </Route>
    </Routes>
  );
}

export default App;
