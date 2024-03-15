import { useState, useEffect } from "react";

const CallApiUseEffect = () => {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(false)

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (response && result.products) setProductList(result.products);
    } catch (error) {
      console.error(error);
    }
  }

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

  useEffect(() => {
    if(count=== 5) fetchAllProducts()
    setShowText(true)

    //cleanup
    return () => {
        
    }
  },[count])
  return (
    <div>
      <h1>CallApiUseEffect</h1>
      <p>Count is {count}</p>
      {showText ? <h3>Hello World</h3> : null}
      <button onClick={() => setCount(c => c+1)}>Count</button>
      <ul>
        {
            productList && productList.length > 0
          ? productList.map((item) => <li key={item.id}>{item.title}</li>)
          : null
        }
      </ul>
    </div>
  );
};

export default CallApiUseEffect;
