import ToolbarButton from "./ToolbarButton";

const toolbarButtonList = [
    {
        id: 0,
        title: "Copy"
    },
    {
        id: 1,
        title: "something else"
    },
    {
        id: 2,
        title: "Paste"
    },
    {
        id: 3,
        title: "another one"
    },
]

export default function Toolbar() {
  return (
    <div>
        { toolbarButtonList.map( toolbarButton => <ToolbarButton button={toolbarButton}/> ) }
        {/* <ToolbarButton button={toolbarButtonList[0]}/>
        <ToolbarButton button={toolbarButtonList[1]}/>
        <ToolbarButton button={toolbarButtonList[2]}/> */}
    </div>
  )
}

// props = {
//     button: {
//         id: 0,
//         title: "Copy"
//     }
// }