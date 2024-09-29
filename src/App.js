import NavBar from "./NavBar"

const mappedArray = [
  <div>Butters</div>,
  <div>Lizzy</div>,
  <div>Red</div>,
  <div>Joey</div>,
]

export default function App() {
  const myPets = [
    {
      id: 0,
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      id: 1,
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      id: 2,
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      id: 3,
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      id: 4,
      name: "Oreo",
      age: 1,
      type: "bunny"
    }
  ]

  const myName = "Natalie"
  return (
    <div className="">
      App fdsfds
      <NavBar petList={myPets} color="green" /> 
      {/* NavBar({ petList: [ ........ ], color: "green" }) */}
      {myName}
      {" "}{3 + 5}
      {myPets.map(pet => <div key={pet.id}>{pet.name}</div>)}
    </div>
  )
}


//const myString = `My name is: ${myName}`