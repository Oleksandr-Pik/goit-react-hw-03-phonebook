import React from 'react';
import ContactListItem from 'components/ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactListItem contact={contact} onDeleteContact={onDeleteContact} />
      </li>
    ))}
  </ul>
);

export default ContactList;
