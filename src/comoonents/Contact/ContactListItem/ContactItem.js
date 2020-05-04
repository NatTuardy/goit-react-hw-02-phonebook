import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <li className={styles.item} key={contact.id}>
        {contact.name} : {contact.number}
      </li>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.object,
};
