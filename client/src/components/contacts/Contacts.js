import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const ctx = useContext(ContactContext);
  const { contacts } = ctx;
  console.log(contacts);
  return (
    <>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
