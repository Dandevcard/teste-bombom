import React, { createContext, useState, useEffect } from "react";
import data from "../dados.json";
import { toast } from "react-toastify";

export const itemContext = createContext({
  items: [],
  cart: [],
  addToCart: () => {}, // Função para adicionar itens ao carrinho,
  deletToCart: () => {},
  finish: () => {},
});
export function ItemContextProvider({ children }) {
  const [dados, setDados] = useState({ items: [] });
  const [cart, setCart] = useState([]); // Carrinho de compras

  useEffect(() => {
    setDados(data);
  }, []);

  const addToCart = (item) => {
    // Verifica se o item já está no carrinho usando o uniqueId
    const itemExist = cart.some(
      (cartItem) => cartItem.uniqueId === item.uniqueId
    );
    if (itemExist) {
      toast.warn("esse item Ja existe no carrinho");
      return;
    }
    setCart((prevCart) => [...prevCart, item]); // Adiciona o item ao carrinho
    toast.success(`${item.name} foi adicionado!`);
  };
  const deletToCart = (uniqueId) => {
    setCart((currentState) =>
      currentState.filter((item) => item.uniqueId !== uniqueId)
    );
    toast.info("Item removido do carrinho");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.sellingPrice, 0 / 100);
  
  };
  const finish = () => {
    if (cart.length < 1) {
      toast.warn("Adicione um item ao carrinho")
    } else {
      toast.success(`Você finalizou sua compra de ${cart.length} items`);
    }
    setCart([])
  };
  const formatCurrency = (value) => {
    return (value / 100).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  // const formatCurrency=(value) => {
  //   return value/100
  // }
  return (
    <itemContext.Provider
      value={{
        items: dados.items,
        cart,
        addToCart,
        deletToCart,
        getTotalPrice,
        formatCurrency,
        finish,
      }}
    >
      {children}
    </itemContext.Provider>
  );
}
