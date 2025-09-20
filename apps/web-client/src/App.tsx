import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import GroupPage from './features/group/GroupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/group/:id" element={<GroupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;