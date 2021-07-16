import { Component } from "react";
import PropTypes from "prop-types";
import { Item } from "./PhoneBook.styled";
import { Button } from "../PhoneBookForm/PhoneBookForm.styled";

export default class PhoneBookListItem extends Component {
  render() {
    const { name, number, onDeleteContact, id } = this.props;
    return (
      <Item>
        <p>
          {name} : {number}
        </p>

        <Button onClick={onDeleteContact} id={id}>
          Delete
        </Button>
      </Item>
    );
  }
}
PhoneBookListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
