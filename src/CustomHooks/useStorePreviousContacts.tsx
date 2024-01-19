import { useState, useEffect } from "react";

interface Contact {
  name: string;
  title: string;
  email: string;
  profilePictureUrl: string;
}

const useStorePreviousContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts) as Contact[]);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) return;
    localStorage.setItem(
      "contacts",
      JSON.stringify(contacts)
    );
  }, [contacts]);

  const addContact = (
    name: string,
    title: string,
    email: string,
    profilePictureUrl: string = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
  ) => {
    if (
      !contacts.some((contact) => contact.email === email)
    ) {
      setContacts([
        ...contacts,
        { name, title, email, profilePictureUrl },
      ]);
    }
  };

  return { contacts, addContact };
};

export default useStorePreviousContacts;
