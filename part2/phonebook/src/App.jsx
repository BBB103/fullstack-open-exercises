// import { useState } from 'react'
// const App = () => {
//   const [persons, setPersons] = useState([
//     {
//       name: 'Arto Hellas',
//       number: "0912345678",
//       id: "1"
//     }
//   ])

//   const [list, setList] = useState([])
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [newfindName, setNewfindName] = useState('')
//   const addPerson = (event) => {
//     console.log(persons)
//     event.preventDefault()
//     const personObject = {
//       name: newName,
//       number: newNumber,
//       id: String(persons.length + 1),
//     }
//     if ((newName=="")||(newNumber=="")) {
//       alert(`Please fill out all the information`)
//       return
//     }
//     const nameExists = persons.some(person => person.name === newName)
//     if (nameExists) {
//       alert(`${newName} is already inside. Please use a new name.`)
//       return
//     }
//     setPersons(persons.concat(personObject))
//     setNewName('')
//     setNewNumber('')
//   }
  
//   const handleNameChange = (event) => {
//     event.preventDefault()
//     console.log(newName)
//     setNewName(event.target.value)
//   }
// let searching=false
//   const handlefindNameChange = (event) => {
//     if(newfindName!=""){

//       searching=true
//       console.log(searching)
//     }
//     event.preventDefault()
//     setNewfindName(event.target.value)
//     setList(persons.filter(value=>(value.name.includes(newfindName))))
//     console.log('newfindName',newfindName)
//     console.log('List', list)
//   }

//   const handleNumberChange = (event) => {
//     event.preventDefault()
//     console.log(newNumber)
//     setNewNumber(event.target.value)
//   }

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <form>
//         <div>
//           name: <input placeholder="Search for someone" value={newfindName} onChange={handlefindNameChange}/>
//         </div>
//       </form>

//       <h2>Add a new</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           name: <input placeholder="Enter full name" value={newName} onChange={handleNameChange}/>
//         </div>
//         <div>
//           number: <input placeholder="Enter full number" value={newNumber} onChange={handleNumberChange}/>
//         </div>
//         <div>
//           <button type="submit" >add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>
//       <div>
//         {!searching ? (
//           persons.map((person) => (
//             <div key={person.id}>
//               {person.name} {person.number}
//             </div>
//           ))
//         ) : (
//           list.map((person) => (
//             <div key={person.id}>
//               {person.name} {person.number}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   )

// }
// export default App

import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };
    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
  };
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setSearching(term.length > 0);
  };

  // Filter persons based on search term
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
      <h2>Phonebook</h2>
      
      {/* Search input */}
      <div>
        filter shown with: <input 
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <h2>add a new</h2>
      {/* Add person form */}
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {/* Render filtered or full list based on searching state */}
        {searching ? (
          filteredPersons.map(person => (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          ))
        ) : (
          persons.map(person => (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;