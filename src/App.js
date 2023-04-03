
import './App.css';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { SingleCandidate } from './components/SingleCandidate/SingleCandidate';
import { Candidates } from './components/Candidates/Candidates.js';
import { Reports } from './components/Reports/Reports';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />} >
        <Route path={'/'} element={<Candidates/>}/>
        <Route path={'/candidates/:id'} element={<SingleCandidate/>} />
         <Route path={'/reports'} element={<Reports/>} />
      </Route>
    </Routes>
  );
}

export default App;
