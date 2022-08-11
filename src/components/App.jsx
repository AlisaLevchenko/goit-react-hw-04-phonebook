import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import s from '../components/contactForm/ContactForm.module.css';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const repeatName = contacts.find(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (repeatName) {
      alert(`${newContact.name} ia already in contacts`);
      return;
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const handleChangeFilterForm = evt => {
    setFilter(evt.target.value);
  };

  const handleFilterContact = () => {
    const filteredContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredContact;
  };

  const handleDelate = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h1 className={s.title}>Contacts</h1>
      <Filter filter={filter} filterForm={handleChangeFilterForm} />
      <ContactList contacts={handleFilterContact()} delate={handleDelate} />
    </div>
  );
}
