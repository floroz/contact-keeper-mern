import React from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          className={`badge badge-${
            type === 'professional' ? 'success' : 'primary'
          }`}
        >
          {type}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
