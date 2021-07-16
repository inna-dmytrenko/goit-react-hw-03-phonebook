import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Label, Input } from "./PhoneBookForm.styled";
export default class PhoneBookForm extends Component {
  render() {
    const { onSetUserInfo, onAddContact, name, number } = this.props;

    return (
      <Form action="" onSubmit={onAddContact}>
        <Label htmlFor="">
          <p>Name </p>
          <Input
            onInput={onSetUserInfo}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Search name"
          />
        </Label>
        <Label htmlFor="">
          <p>Number</p>
          <Input
            onInput={onSetUserInfo}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Search number"
          />
        </Label>
        <Button>Add contact</Button>
      </Form>
    );
  }
}
PhoneBookForm.propTypes = {
  onSetUserInfo: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
