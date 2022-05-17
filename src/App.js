import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Components } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<Components.AuthLayout />}/>
        <Route path="/*" element={<Components.MainLayout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
