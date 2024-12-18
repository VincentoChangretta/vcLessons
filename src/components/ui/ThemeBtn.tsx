import { classNames } from "../helpers/classNames/classNames";
import { useTheme } from "../theme/useTheme";

export const ThemeBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={() => toggleTheme()}
      className={classNames(
        "",
        {
          "bg-primaryColorDark": theme === "light",
          "bg-primaryColorInv": theme === "dark",
        },
        ["relative w-[70px] h-[30px] rounded-standartRadius cursor-pointer shrink-0"]
      )}
    >
      <div
        className={classNames(
          "",
          {
            "bg-primaryColorInv": theme === "light",
            "bg-primaryColorDark left-auto right-[3px]": theme === "dark",
            
          },
          [
            "absolute w-[22px] h-[22px] rounded-full top-2/4 left-[4px] -translate-y-2/4 transition-all",
          ]
        )}
      ></div>
    </div>
  );
};
