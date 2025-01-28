import "./Card.css";
import useItem from "../../hooks/useItem";

export default function Card() {
  const { items, addToCart, formatCurrency } = useItem(); // Pegando os itens e a função de adicionar ao carrinho
  // const handleAddToCart = (item) => {
  //   addToCart(item); // Chama a função de adicionar no carrinho

  // };

  return (
    <div>
      <div className="cards">
        {items.map((item) => (
          <div key={item.uniqueId} className="card">
            <img src={item.imageUrl} alt={item.name} />
            <div className="card-item">
              <h1>{item.name}</h1>
              <div className="precos">
                <p>Preço:{formatCurrency(item.sellingPrice)}</p>
                <span className="preco-false">({formatCurrency(item.price)})</span>
              </div>
            </div>
            <button onClick={() => addToCart(item)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
