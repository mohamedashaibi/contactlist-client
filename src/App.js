import './App.css';
import ContactList from './Components/Contact/ContactList';
import Form from './Components/Form/Form';
import axios from './axios'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GET } from './Redux/Actions/Contact';

function App() {
  const selector = useSelector(state=>state.ContactReducer.contacts)

  const [contacts, setContacts] = useState(selector)

  const dispatcher = useDispatch()

  useEffect(() => {
    async function fetchData(){
      dispatcher({type: GET})
    }
    fetchData()
  },[dispatcher])
   
  return (
    <div className="App">
      {console.log("Contacts in app.js = "+selector)}
      <Form/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
