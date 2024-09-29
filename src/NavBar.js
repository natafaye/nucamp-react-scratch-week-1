
/* NavBar({ petList: [ ........ ], color: "green" }) */

export default function NavBar(props) {
    return <div>
        The color is {props.color}
        You have {props.petList.length} pets
    </div>
}