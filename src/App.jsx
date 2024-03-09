import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <>
      <div id="dashboard">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='dashboard' element={<Dashboard/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
};

export default App;
