import { FC } from "react";
import { ProgrammItem } from "../../../../../public/appDataTypes";

interface CardProps {
  technology: ProgrammItem;
}

export const ProgTechnologyCard: FC<CardProps> = ({ technology }) => {
  return (
    <article className="mb-[20px]">
      <div></div>
      <h4 className="smallTitle mb-[10px]">{technology.name}</h4>
      {technology.text && <p className="mb-[10px]">{technology.text}</p>}
      <ul className="flex flex-col gap-[10px]">
        {technology.description.map((item, index) => (
          <li key={index} className="relative">
            {index !== technology.description.length - 1 && (
              <div className="dotLine" style={{height: "calc(100% - 6px)"}}></div>
            )}
            <div className="dot"></div>
            <strong className="">{item.slice(0, item.indexOf(":") + 1)}</strong>
            {item.slice(item.indexOf(":") + 1)}
          </li>
        ))}
      </ul>
    </article>
  );
};
