import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const ctx = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = ctx;
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts.."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
