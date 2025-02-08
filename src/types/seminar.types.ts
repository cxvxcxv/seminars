//seminar data
export interface ISeminar extends TSeminarInput {
  id: number;
}

//seminar input data
export type TSeminarInput = {
  title: string;
  description?: string;
  date: string;
  time: string;
  photo?: string;
};
