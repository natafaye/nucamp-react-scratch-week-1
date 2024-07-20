import CartList from "./CartList"

export default function App() {
  const cart = ["chair", "shoes"]
  return (
    <div>
      <div>Items in Cart: {cart.length}</div>
      <p>{3 + 5}</p>
      <CartList shoppingCart={cart}/>
    </div>
  )
}