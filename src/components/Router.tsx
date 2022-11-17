import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import ResultPage from '../pages/MyOreumResult';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
