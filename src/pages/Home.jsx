import React from "react";
import Card from "../components/Card/Card";
import Carrinho from "../components/Carrinho/Carrinho";

export default function Home() {
  return (
    <main className="cont">
      <Card />
      <Carrinho className="carrinhoG"/>
    </main>
  );
}
