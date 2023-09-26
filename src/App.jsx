import "./App.css";
import { useState } from "react";
import contactsJSON from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));

  const randomContact = () => {
    const randomNumber = contactsJSON [Math.floor(Math.random()*contactsJSON.length)];
    const randomIndex = contactsJSON [randomNumber];
  };


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
    
      <button onClick={randomContact()}>Add RandomContact</button>
        <table>
          <thead>
            <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((oneContact) =>{
          return (
            <tr key={oneContact.id}>
              <td>
                <img src={oneContact.pictureUrl} style={{height: "200px"}}/>
                </td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity}</td>
              <td>{oneContact.wonOscar ? "🏆" : null}</td>
              <td>{oneContact.wonEmmy ? "🏆" : null}</td>
            </tr>
          );
          })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
