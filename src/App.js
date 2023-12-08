import style from './app.module.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Layout} from "./components/Layout/Layout";
import {Catalogue} from "./pages/Catalogue";
import {Favorites} from "./pages/Favorites";

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='catalogue' element={<Catalogue />} />
                  <Route path='favorites' element={<Favorites />} />
              </Route>
              <Route
                  path="*"
                  element={<Navigate to="/" replace />}
              />
          </Routes>
      </>
  );
}

export default App;
