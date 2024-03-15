import {useState,useEffect} from 'react'

const CallApiUseEffect = () => {
    const [productList, setProductList] = useState([])

    async function fetchAllProducts(){
        try{
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json()

            if (response && result.products) setProductList(result.products)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchAllProducts();
    },[])
  return (
    <div>
        <h1>CallApiUseEffect</h1>

        <ul>
            {
                productList && productList.length > 0 
                ? productList.map((item) => <li key={item.id}>{item.title}</li>)
                : null
            }
        </ul>
    </div>

  )
}

export default CallApiUseEffect