import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import MyOreumResultPage from '../pages/MyOreumResult';
import ShareResultPage from '../pages/ShareResult';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />} />
        <Route path='/result/:id' element={<MyOreumResultPage />} />
        <Route path='/share/:id' element={<ShareResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
