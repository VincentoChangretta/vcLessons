import { Link } from "react-router-dom";
import { headerNavData } from "../../../public/appData";
export const HeaderNav = () => {
  return (
    <ul className="flex items-center gap-[30px]">
      {headerNavData.map((item) => (
        <li key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
