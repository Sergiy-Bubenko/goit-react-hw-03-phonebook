import { Component } from 'react/cjs/react.production.min';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          Name <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.props.handleChange}
            value={this.props.state.name}
          />
        </label>
        <br />
        <label>
          Number <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.props.handleChange}
            value={this.props.state.number}
          />
        </label>
        <br />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
