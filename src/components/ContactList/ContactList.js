import { Component } from 'react/cjs/react.production.min';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteBtn } = this.props;
    return (
      <ul className={s.ContactList}>
        {contacts
          .filter(cont =>
            cont.name.toLowerCase().includes(filter.toLowerCase()),
          )
          .map(contact => (
            <li key={contact.id} id={contact.id}>
              {contact.name}: {contact.number}
              <button className={s.ContactListBtn} onClick={onDeleteBtn}>
                delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
