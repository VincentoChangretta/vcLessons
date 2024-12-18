import { Logo } from "../../ui/Logo";
import { ThemeBtn } from "../../ui/ThemeBtn";
import { HeaderNav } from "./HeaderNav";
export const Header = () => {
  return (
    <header className="py-[30px]">
      <div className="container">
        <div className="inner">
          <Logo />
          <HeaderNav />
          <div className="flex gap-[20px] items-center">
            <button className="btn shrink-0">Записаться</button>
            <ThemeBtn />
          </div>
        </div>
      </div>
    </header>
  );
};
