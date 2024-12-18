import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";

export const MainPageTop = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="relative mb-[70px]">
      <div className="container">
        <div className="pt-[120px]">
          <div className="mb-[60px]">
            <div className="relative z-10 text-center mb-[30px]">
              <h1 className=" text-6xl font-extrabold text-primaryColor leading-[90px]">
                <span className={`${theme === "dark" ? "mainTitleDark" : "text-primaryColor"}  `}>
                  Твой путь к веб-успеху <br /> начинается с
                </span>
                <span className="ml-[20px] px-[35px] py-[7px] bg-primaryColor text-primaryColorInv rounded-[50px]">
                  vcLessons!
                </span>
              </h1>
            </div>
            <h3 className="max-w-[850px] mx-auto text-center">
              Мы предлагаем увлекательные и доступные уроки по HTML, CSS,
              JavaScript и Git, которые помогут тебе освоить основы и создавать
              первые сайты. <br /> Присоединяйся к нам и открой для себя
              безграничные возможности веб-технологий!
            </h3>
          </div>
          <div className="flex justify-center gap-[100px] text-[200px]">
            <div className={`${theme === "dark" ? "htmlIcon animate-bounceOne" : "text-htmlColor"} `}>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className={`${theme === "dark" ? "cssIcon animate-bounceTwo" : "text-cssColor"} `}>
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className={`${theme === "dark" ? "jsIcon animate-bounceThree" : "text-jsColor"} `}>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className={`${theme === "dark" ? "gitIconLight animate-bounceFor" : "text-gitColor"} `}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
