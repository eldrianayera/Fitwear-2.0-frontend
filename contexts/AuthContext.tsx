import { createContext, ReactNode, useContext, useState } from "react";

export type Product = {
  id: string;
  name: string;
  price: string;
  image?: string;
  description?: string;
  category?: string;
};

interface GlobalContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Default values
const defaultState: GlobalContextType = {
  products: [],
  setProducts: () => {},
};

const GlobalContext = createContext<GlobalContextType>(defaultState);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <GlobalContext.Provider value={{ products, setProducts }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for easier usage
export const useGlobalContext = () => useContext(GlobalContext);
