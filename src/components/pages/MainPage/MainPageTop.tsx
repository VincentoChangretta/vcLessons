import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { technologyData } from "../../../../public/appData";
import { TechItem } from "../../../../public/appDataTypes";

const colorMap: Record<string, string> = {
  HTML: "text-htmlColor",
  CSS: "text-cssColor",
  JavaScript: "text-jsColor",
  GitHub: "text-gitColor",
};

const setColor = (color: string): string => {
  return colorMap[color] || "text-[#1a1a1a]"; 
};

export const MainPageTop = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="pt-[400px]">
          <div className="relative z-10 max-w-[900px]">
            <h1 className=" text-6xl font-extrabold text-primaryColor leading-[85px] mb-[40px]">
              <span className="text-primaryColorDark">
                Твой путь к веб-успеху начинается с
              </span>
              <span className="ml-[20px] px-[35px] py-[7px] bg-primaryColor text-primaryColorInv rounded-[50px]">
                vcLessons!
              </span>
            </h1>
          </div>
          <div className="flex gap-[20px] text-xl">
            {technologyData.map((technology: TechItem, index) => (
              <div
                key={index}
                className="px-[40px] py-[5px] bg-[#eee] shadow-lg rounded-standartRadius border-b-8 border-[#CECECE]"
              >
                <span className="mr-[10px]">
                  <FontAwesomeIcon
                    icon={technology.FaIcon}
                    className={`${setColor(technology.name)}`}
                  />
                </span>
                {technology.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
