import { useCart } from "../context/CartContext";
import { PaystackButton } from "react-paystack";

const PAYSTACK_PUBLIC_KEY = "pk_test_ed36f8bac8ec943516302a742539dcba3c6ff3cb"; // Replace with your own test key

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  const userEmail = "customer@example.com"; // Replace with dynamic email in the future

  const paystackProps = {
    email: userEmail,
    amount: total, // in kobo (100 NGN = 10000)
    publicKey: PAYSTACK_PUBLIC_KEY,
    text: "Checkout with Paystack 💳",
    onSuccess: () => alert("Payment complete! 🎉"),
    onClose: () => alert("Payment closed."),
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow flex items-center">
              <img src={item.img} className="w-24 h-24 object-cover rounded mr-4" />
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>${(item.price / 100).toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => decreaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
            </div>
          ))}

          <div className="text-right text-xl font-bold text-indigo-800">
            Total: ${(total / 100).toFixed(2)}
          </div>

          <div className="text-right">
            <PaystackButton {...paystackProps} className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition" />
          </div>
        </div>
      )}
    </div>
  );
}
