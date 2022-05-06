import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './app-assets/vendors/css/vendors.min.css';
import './app-assets/css/bootstrap.css';
import './app-assets/css/bootstrap-extended.css';
import './app-assets/css/colors.css';
import './app-assets/css/components.css';
import './app-assets/css/themes/dark-layout.css';
import './app-assets/css/themes/semi-dark-layout.css';
import './app-assets/css/core/menu/menu-types/horizontal-menu.css';
import './app-assets/css/plugins/forms/wizard.css';
import './assets/css/style.css';
import './index.css';

import { Views } from './views';

function App() {
  return (
    <BrowserRouter>
      <div className="app-content content">
        <div className="content-overlay"></div>

          <div className="content-body">
          <Routes>
            <Route path='/inscription' element={<Views.InscriptionSteps />}/>
          </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
