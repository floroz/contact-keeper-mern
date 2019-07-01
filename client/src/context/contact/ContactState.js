import React, { useReducer } from 'react';
import ContactReducer from './contactReducer';
import ContactContext from './contactContext';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Mark Green',
        email: 'markgmail.com',
        phone: '111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'saragmail.com',
        phone: '222-222-222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Jim Bolley',
        email: 'jimgmail.com',
        phone: '333-333-333',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
