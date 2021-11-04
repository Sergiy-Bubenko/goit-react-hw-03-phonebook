import { Component } from 'react/cjs/react.production.min';
import s from './ContactList.module.css';
class ContactList extends Component {
  render() {
    return (
      <ul className={s.ContactList}>
        {this.props.contacts
          .filter(cont =>
            cont.name.toLowerCase().includes(this.props.filter.toLowerCase()),
          )
          .map(contact => (
            <li key={contact.id} id={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={s.ContactListBtn}
                onClick={this.props.onDeleteBtn}
              >
                delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;
