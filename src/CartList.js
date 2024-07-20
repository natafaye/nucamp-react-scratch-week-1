import CartItem from "./CartItem"

// map ["chair", "shoes", "fdsfd", "fdsfds"] to [<li>chair</li>, <li>shoes</li>, <li>fdsfdsf</li>, <li>fdsfdsf</li>]
// props.shoppingCart.map( item => <li>{item}</li> )

export default function CartList(props) { // props = { shoppingCart: ["chair", "shoes", "fdsfd", "fdsfds"] }
    console.log(props.shoppingCart)
    return (
        <ul>
            { props.shoppingCart.map( item => <CartItem cartItem={item} key={item}/> ) }
        </ul>
    )
}

function Badge() {
    return <span className="badge bg-secondary">New</span>
}