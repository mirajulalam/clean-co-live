import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from './routes/PublicRoutes';

function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
