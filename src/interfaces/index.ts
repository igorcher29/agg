export interface ICardData {
  id: number | undefined;
  userId: number | undefined;
  title: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  body: string;
}
export interface IPropsDialog {
  open: boolean;
  data: ICardData;
  onClose(): void;
}
export interface IProps {
  data: ICardData;
  onClose(): void;
}

export interface ITextBlock {
  label: string | undefined;
  value: string | number | undefined;
}
