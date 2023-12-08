import React from 'react';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <>
    <span>
      {contact.name}: {contact.number}{' '}
    </span>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </>
);

export default ContactListItem;
