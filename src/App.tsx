import { Route, Routes } from "react-router-dom";
import { Header } from "./components/global/header/Header";
import { pathnames } from "../public/appData";
import { MainPage } from "./components/pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={pathnames.home} element={<MainPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
