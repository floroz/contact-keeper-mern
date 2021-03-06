import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const contactCtx = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactCtx;
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge badge-${
            type === 'professional' ? 'success' : 'primary'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
