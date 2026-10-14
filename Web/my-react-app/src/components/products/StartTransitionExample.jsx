import React, {useState, useEffect, startTransition} from "react";

const StartTransitionExample = () => {
    const [errors, setErrors] = useState(null);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData]= useState([]);

    const fetchData = async() => {

        try{
        const apiResponse = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json");
        if(!apiResponse.ok){
            throw new Error("some issue with the network/api");
        }
        const result = await apiResponse.json();

        setProducts(result)
    }catch(error){
        setErrors(error)
    }
    }

    useEffect(()=>{
        fetchData()
    },[])



 

    const handleSearch = (e) => {
       const value = e.target.value;
        setSearch(value);
            startTransition(()=>{
    const result = products.filter((product)=>(
        product.name.toLowerCase().includes(search.toLowerCase())
    ))
    setFilteredData(result)
    })

    }

  

    return(
        <div>
         
            <div>
                <input type="search" placeholder="search for product" className="border border-solid py-1 my-2" name="search" value={search} onChange={handleSearch} />
            </div>
            <div>
                {
                    filteredData.map((product)=>{
                        return <div id={product.id} className="text-xl text-blue-500">{product.name}</div>

                    })
                }
            </div>
               
        </div>
    )
}

export default StartTransitionExample