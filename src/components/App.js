import React from 'react';
import './App.css';
import Header from "./Header";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      {/*<ContactCard />
  <ContactList />*/}
    </div> 
  );
}

export default App;
