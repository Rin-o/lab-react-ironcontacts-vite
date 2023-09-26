import "./App.css";
import { useState } from "react";
import contactsJSON from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  const randomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsJSON.length);
    const randomContact = contactsJSON[randomIndex];
    const newArray = contacts.concat(randomContact);
    setContacts(newArray);
  };

  const sortByName = () => {
    const newArray = contacts.concat();
    const sortedNames = newArray.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(sortedNames);
  };

  const sortByPop = () => {
    const newArray = [...contacts];
    newArray.splice
    setContacts(sortedPop);
  };

  const removeButton = (id) => {
    const newArray = contacts.filter(contact =>
      contact.id !== id

    )

    setContacts(newArray);
  };



  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={randomContact}>Add RandomContact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPop}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
                <td>
                  <img src={oneContact.pictureUrl} style={{ height: "200px" }} />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar ? "🏆" : null}</td>
                <td>{oneContact.wonEmmy ? "🏆" : null}</td>
                <td><button onClick={() => removeButton(oneContact.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
