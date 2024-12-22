import { programmData } from "../../../../public/appData";
import { ProgTechnologyCard } from "./ProgTechnologyCard";

export const MainPageInfoProgramm = () => {
  return (
    <div className="mx-auto">
      {programmData.map((technology) => (
        <ProgTechnologyCard key={technology.name} technology={technology} />
      ))}
    </div>
  );
};
