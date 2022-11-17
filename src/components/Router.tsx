import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import MyOreumResultPage from '../pages/MyOreumResult';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/result' element={<MyOreumResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
