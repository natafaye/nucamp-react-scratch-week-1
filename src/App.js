import Toolbar from "./Toolbar"

function App() {
  const paragraph = <p>I'm a paragraph {5 + 3}</p>

  const myName = 5 + 3

  return (
    <>
      <Toolbar/>
      <div className="bg-primary text-white p-3 m-3">
        Hi there { myName }{" "}
        { 5 + 3 }
        { paragraph }
      </div>
    </>
  )
  
}

export default App