import React from 'react';
import './App.css';
import Header from "./Header";
import ContactCard from "./ContactCard";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id:"1",
      name:"John",
      email:"john23@gmail.com",
    },
    {
      id:"2",
      name:"Doe",
      email:"doe14@gmail.com",
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div> 
  );
}

export default App;
