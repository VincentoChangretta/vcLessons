import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Navitem {
  name: string;
  path: string;
}
export interface TechItem {
  name: string;
  FaIcon: IconProp;
}

export interface ProgrammItem {
  name: string,
  text?: string,
  description: string[],
}
