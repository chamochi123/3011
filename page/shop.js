import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "3310 Signature Tee",
    price: 3499,
    img: "https://images.unsplash.com/photo-1585386959984-a41552262bc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Blackout Vibe",
    price: 2999,
    img: "https://images.unsplash.com/photo-1621870035891-0ee73e5c7cf3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Color Burst Tee",
    price: 2599,
    img: "https://images.unsplash.com/photo-1617057236704-1529ed7be7e5?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
        🛍️ Shop 3310
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <img
              src={product.img}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold text-indigo-700">{product.name}</h2>
            <p className="text-pink-600 font-bold text-lg">
              ${(product.price / 100).toFixed(2)}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
