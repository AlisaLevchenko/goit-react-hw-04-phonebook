import PropTypes from 'prop-types';

import s from './ContactsList.module.css';

function ContactList({ contacts, delate }) {
  return (
    <section className={s.container}>
      <ul className={s.contactsList}>
        {contacts.map(el => (
          <li key={el.id} className={s.contactsItem}>
            <p>
              {el.name}: <span>{el.number}</span>
            </p>
            <button className={s.button} onClick={() => delate(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  delate: PropTypes.func.isRequired,
};

export default ContactList;
