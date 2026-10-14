import {useSelector, useDispatch} from "react-redux";
import productsSlice, { fetchProducts } from "./productsSlice";
import { useEffect } from "react";

export default function Products() {
    const {data, loading, error} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);     

    return(
        <div>
            {
                data?.map((product) => (
                    <div key={product.id}>
                        <h4>{product.title}</h4>
                    </div>
                ))
            }
        </div>
    )

}