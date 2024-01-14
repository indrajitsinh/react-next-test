export interface FindProduct { }

export interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  }
  title: string;
}

export interface InitialState {
  data: Product[];
  limit: number;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  errorMessage: string;
}

export const initialState: InitialState = {
  data: [],
  limit: 10,
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};









