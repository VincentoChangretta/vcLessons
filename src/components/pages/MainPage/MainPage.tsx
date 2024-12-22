import { MainPageExpert } from "./MainPageExpert/MainPageExpert";
import { MainPageInfo } from "./MainPageInfo/MainPageInfo";
import { MainPageTop } from "./MainPageTop";
import { MainPageWhatWeDo } from "./MainPageWhatWeDo/MainPageWhatWeDo";

export const MainPage = () => {
  return (
    <>
      <MainPageTop />
      <MainPageExpert/>
      <MainPageWhatWeDo />
      <MainPageInfo />
    </>
  );
};
