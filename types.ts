export type dataType = {
  id: number;
  title: string;
  img: string;
  info: {
    id: number;
    text: string;
  }[];
}[];

export type titleType = {
  text: string;
};

export type PacientType = {
  data: any[];
  handlerClick(id: number): void;
};

export type PacientCardType = {
  title: string;
  img: string;
  info: any[];
  handlerClick(id: number): void;
  id: number;
};

export type SymptomsType = {
  img: string;
  title: string;
};

export type CarouselBtnType = {
  deg: number;
  img: string;
  text: string;
  top: number;
  left: number;
  bottom: number;
};
