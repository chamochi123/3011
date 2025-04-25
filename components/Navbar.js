import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-indigo-600 cursor-pointer">3310</span>
        </Link>

        <div className="space-x-6 text-gray-700 font-medium">
          <Link href="/">
            <span className="hover:text-indigo-600 cursor-pointer">Home</span>
          </Link>
          <Link href="/shop">
            <span className="hover:text-indigo-600 cursor-pointer">Shop</span>
          </Link>
          <Link href="/cart">
            <span className="hover:text-indigo-600 cursor-pointer">
              Cart 🛒 ({totalItems})
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
