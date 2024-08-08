import { Global } from "@emotion/react";
import { FC } from 'react'
import { Route, Routes } from "react-router-dom";
import Bucket from "./pages/Bucket";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import CarsCatalog from './pages/Catalog';
import { GLOBAL_STYLES } from "./styles/global.styles";
import NotFoundPage from "./pages/NotFoundPage";
import './styles/app.css';


const App: FC = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="catalog" element={<CarsCatalog />} />
          <Route path="bucket" element={<Bucket />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
