import { Logo } from "../../ui/Logo";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <header className="py-[30px]">
      <div className="container">
        <div className="inner">
          <Logo />
          <HeaderNav />
          <button className="btn">Записаться</button>
        </div>
      </div>
    </header>
  );
};
