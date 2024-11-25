import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])

  const [searchText, setSearchText] = useState("");

  console.log("search text : ", searchText)

  const handleSearchTextChange = (e) => {
     setSearchText(e.target.value)
  }


  useEffect(() => {
    if(searchText.trim() === ""){
      setFilteredProducts(products)
    }else{
      const filteredData = filteredProducts
      .filter((item, idx) => item.title.toLowerCase().includes(searchText.toLowerCase()))
      setFilteredProducts(filteredData)
    }
  }, [searchText])


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data)
      setFilteredProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div className="App">
      {/* <h1>Hello World</h1> */}
       <Header handleSearchChange = {handleSearchTextChange}/>
       <Products products = {filteredProducts}/>

    </div>
  );
}

export default App;
