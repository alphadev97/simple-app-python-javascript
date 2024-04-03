import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    if (!response.ok) {
      throw new Error("Failed to fetch contacts");
    }
    const data = await response.json();
    setContacts(data.contact);
    console.log(data.contact);
  };

  return (
    <>
      <ContactList />
    </>
  );
}

export default App;
