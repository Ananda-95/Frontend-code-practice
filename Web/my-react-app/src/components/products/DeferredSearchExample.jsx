import React, {
    useState,
    useEffect,
    useDeferredValue
} from "react";

const DeferredSearchExample = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const deferredSearch = useDeferredValue(search);

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await fetch(
                    "https://dummyjson.com/products?limit=100"
                );

                const data = await response.json();

                setProducts(data.products);

            } catch (error) {

                console.error(error);

            }

        };

        fetchProducts();

    }, []);

    const filteredProducts = products.filter((product) =>
        product.title
            .toLowerCase()
            .includes(deferredSearch.toLowerCase())
    );

    return (
        <div>

            <h2>Product Search</h2>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <p>
                Actual Search: {search}
            </p>

            <p>
                Deferred Search: {deferredSearch}
            </p>

            <p>
                Results: {filteredProducts.length}
            </p>

            <ul>

                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.title}
                    </li>
                ))}

            </ul>

        </div>
    );
};

export default DeferredSearchExample;