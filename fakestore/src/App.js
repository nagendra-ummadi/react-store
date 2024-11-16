import { useEffect, useState } from "react";
import ProductCard from './ProductCard'
import "./App.css";


function App() {
  let [products, updateProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }
    , [])

  async function getProducts() {
    let result = await fetch("https://fakestoreapi.com/products")
    let productList = await result.json()
    // console.log(productList)
    updateProducts(productList)
    console.log(products)

  }

  if (products.length === 0) {
    return (
      <h1>Fetching Data....</h1>
    )
  }

  return (
    <>
      <Header />
      <div className="product-list">

        {
          products.map((p) => {
            return <ProductCard {...p} key={p.id}></ProductCard>
          })
        }

      </div>
    </>

  )
}

function Header() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  )
}
export default App;