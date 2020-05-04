import React, { Component } from 'react';
import SingUpForm from './comoonents/SingUpForm/SingUpForm';
import ContactList from './comoonents/Contact/ContactList';
import Filter from './comoonents/Filter/Filter';
import styles from './App.module.css';

const filterContactsWithQuery = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleGetContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContactsWithQuery(contacts, filter);

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phonebook</h2>
        <SingUpForm getContact={this.handleGetContact} contacts={contacts} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter
          contacts={contacts}
          value={filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
