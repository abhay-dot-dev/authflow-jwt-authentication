import Logout from "../components/Logout";
import { useEffect, useState } from "react"
import { productData } from "../services/authService";


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await productData();
                setProducts(response.products);
            } catch (error) {
                console.error(error);
            }
        }

        fetchProducts();
    }, [])
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Our Products</h1>
                <Logout />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    products.map((p) => (
                        <div
                            className="rounded-lg border bg-white p-5 shadow-sm transition hover:shadow-md cursor-pointer"
                            key={p.id}>
                            <p className="text-lg font-semibold text-gray-800">Name: {p.name}</p>
                            <p className="text-sm text-gray-600">Description: {p.description}</p>
                            <p className="font-bold text-green-600">Price: {p.price}</p>
                            <p className="text-xs text-gray-500">Category: {p.category}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Products