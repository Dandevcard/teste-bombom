import React from "react";
import "./Carrinho.css";
import useItem from "../../hooks/useItem";
import { LuSquareX } from "react-icons/lu";

export default function Carrinho() {
  const { cart, deletToCart, getTotalPrice, formatCurrency, finish } =
    useItem();

  const deletItem = (uniqueId) => {
    deletToCart(uniqueId);
  };

  return (
    <div className="carrinho-container">
      {/* Cabeçalho fixo */}
      <header className="header-carrinho">
        <h2>Meu Carrinho</h2>
      </header>
      {/* Área de itens - será rolável */}
      <div className="carrinho-itens">
        {cart.length === 0 ? (
          <p className="carrinho-vazio">Carrinho vazio</p>
        ) : (
          cart.map((item) => (
            <div key={item.uniqueId} className="carrinho-item">
              <div className="item-info">
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <h2 className="item-name">{item.name}</h2>
                  <p className="preco-false">({formatCurrency(item.price)})</p>
                  <p>{formatCurrency(item.sellingPrice)}</p>
                </div>
              </div>
              <button
                className="remover-btn"
                onClick={() => deletItem(item.uniqueId)}
              >
                <LuSquareX />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Rodapé fixo */}
      <footer className="carrinho-footer">
        <div className="prices">
          <h3>Total</h3>
          <h4>{formatCurrency(getTotalPrice())}</h4>
        </div>
        <div>
          {cart.length >= 5 && (
            <p className="frete-gratis">
              Parabéns, sua compra tem frete grátis
            </p>
          )}
        </div>
        <button className="finalizar-compra" onClick={() => finish()}>
          Finalizar Compra
        </button>
      </footer>
    </div>
  );
}
