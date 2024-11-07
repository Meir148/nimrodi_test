import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Reception from './pages/Reception/Reception';
import Floor from './pages/Floor/Floor';
import Forbidden from './pages/Forbidden/Forbidden';
import PrivateRoute from './utils/PrivateRoute';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const { role: currentRole } = useSelector((state: RootState) => state.role);

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Reception />} />
        <Route
          path="/floor/:floorId"
          element={
            <PrivateRoute role={currentRole}>
              <Floor />
            </PrivateRoute>
          }
        />
        <Route path="/forbidden" element={<Forbidden />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App;

//App.tsx