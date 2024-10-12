import { useEffect, useState } from "react";
import Product from "./Product";
import PriceFilter from "./PriceFilter";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [maxPriceParent, setMaxPriceParent] = useState(100);
  const [filteredProducts, setFilteredProducts] = useState([])

  // Simulare API call pentru produse (In cazul nostru nu e neaparat nevoie de acel async, dar facem o simulare)
  useEffect(() => {
    const fetchProducts = async () => {
      const apiProducts = [
        { id: 1, name: "Produs 1", price: 50 },
        { id: 2, name: "Produs 2", price: 75 },
        { id: 3, name: "Produs 3", price: 100 },
        { id: 4, name: "Produs 4", price: 150 },
      ];
      setProducts(apiProducts);
    };

    fetchProducts();
  }, []);

  // Setam produsele filtrate, in functie de maxPricePrent, adica in functie de pretul din PriceFilter
  useEffect(() => {
    setFilteredProducts(products.filter((product) => product.price <= maxPriceParent))
  
  }, [products, maxPriceParent])
  // Atunci cand maxPriceParent ca si valoare (state) este schimbat din componenta PriceFilter prin setMaxPriceParent, 
  // se va trigarui acest useEffect, deoarece maxPriceParent este pus in dependintele useEffect-ului
  // Exact la fel se intampla si pentru products. Initial products va fi un array gol (vezi in products in useState),
  // dar dupa ce products isi va schimba state-ul (vezi fetchProducts()), atunci se va trigarui automat din nou acest useEffect,
  // si va incerca din nou sa filtreze produsele
  // useEffect-ul asta este apelat oridecateori products SAU / SI maxPriceParent isi schimba valoarea (state-ul)
  
  

  return (
    <div>
      <h1>Lista de Produse</h1>
      <PriceFilter
        maxPriceChild={maxPriceParent}
        setMaxPriceChild={setMaxPriceParent}
      />
      <div className="product-list">
        {/* Afisam produsele filtrate (prin map si <Product />) */}
        {filteredProducts.map((productParent) => (
          <Product key={productParent.id} productChild={productParent} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
