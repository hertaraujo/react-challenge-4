export interface FoodType {
  image: string;
  name: string;
  description: string;
  price: number;
  id: number;
  available: boolean;
}

export interface ModalType {
  setIsOpen: () => void;
  isOpen: boolean;
}
