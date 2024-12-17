import { faCss3, faGithub, faHtml5, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { Navitem, TechItem } from "./appDataTypes";

export const pathnames = {
    home: "/",
    lessons: "/lessons",
    programm: "/programm",
    about: "/about",
}

export const headerNavData: Navitem[] = [
    {name: "Главная", path: pathnames.home},
    {name: "Занятия", path: pathnames.lessons},
    {name: "Программа", path: pathnames.programm},
    {name: "О нас", path: pathnames.about},
]

export const technologyData: TechItem[]= [
    {name: "HTML", FaIcon: faHtml5},
    {name: "CSS", FaIcon: faCss3},
    {name: "JavaScript", FaIcon: faSquareJs},
    {name: "GitHub", FaIcon: faGithub},
]