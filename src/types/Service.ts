import { StaticImageData } from "next/image";

export interface Service {
  imgSrc: StaticImageData;
  name: string;
  url: string;
}
