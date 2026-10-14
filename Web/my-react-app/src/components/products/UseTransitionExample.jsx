
import React, { useState, useEffect, useTransition } from "react";

const StartTransitionExample = () => {
    const [errors, setErrors] = useState(null);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [isPending, startTransition] = useTransition();

    const fetchData = async () => {
        try {
            const apiResponse = await fetch(
                "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
            );

            if (!apiResponse.ok) {
                throw new Error("Some issue with the network/API");
            }

            const result = await apiResponse.json();

            setProducts(result);
            setFilteredData(result);
        } catch (error) {
            setErrors(error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;

        // 1. Urgent update
        // Input value changes immediately
        setSearch(value);

        // 2. Non-urgent update
        // Filtering and rendering are treated as low priority
        startTransition(() => {
            const result = products.filter((product) =>
                product.name
                    .toLowerCase()
                    .includes(value.toLowerCase())
            );

            setFilteredData(result);
        });
    };

    return (
        <div className="max-w-2xl mx-auto p-6">

            <h1 className="text-2xl font-bold mb-4">
                Product Search
            </h1>

            {/* Search */}
            <div className="mb-2">
                <input
                    type="search"
                    placeholder="Search for product"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                    value={search}
                    onChange={handleSearch}
                />
            </div>

            {/* Keep fixed height so layout doesn't jump */}
            <div className="h-6 mb-2">
                {isPending && (
                    <span className="text-blue-500 text-sm">
                        Searching...
                    </span>
                )}
            </div>

            {/* Error */}
            {errors && (
                <div className="text-red-500 mb-4">
                    {errors}
                </div>
            )}

            {/* Products */}
            <div className="border rounded overflow-hidden">

                {filteredData.length > 0 ? (
                    filteredData.map((product) => (
                        <div
                            key={product.id}
                            className="text-lg text-blue-500 border-b py-2 px-3"
                        >
                            {product.name}
                        </div>
                    ))
                ) : (
                    <div className="text-gray-500 p-4">
                        No products found
                    </div>
                )}

            </div>

        </div>
    );
};

export default StartTransitionExample;

