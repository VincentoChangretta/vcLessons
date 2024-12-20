import { Link } from "react-router-dom";
import { pathnames } from "../../public/appData";

export const Logo = () => {
  return (
    <Link className="text-3xl text-primaryColor font-extrabold p-[10px]" to={pathnames.home}>
        vcLessons
    </Link>
  );
}
