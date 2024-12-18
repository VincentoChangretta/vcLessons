import { Route, Routes } from "react-router-dom";
import { Header } from "./components/global/header/Header";
import { pathnames } from "../public/appData";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { useTheme } from "./components/theme/useTheme";

function App() {
  const {theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="pb-[100px]">
        <Routes>
          <Route path={pathnames.home} element={<MainPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
