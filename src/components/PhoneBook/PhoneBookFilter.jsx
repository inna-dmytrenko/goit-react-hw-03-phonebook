import { Component } from "react";
import PropTypes from "prop-types";
import { Label, Input } from "../PhoneBookForm/PhoneBookForm.styled";

export default class PhoneBookFilter extends Component {
  render() {
    const { onSetFilter, filterValue } = this.props;
    return (
      <Label>
        <p>Filter contacts by name: </p>
        <Input
          name="filter"
          onInput={onSetFilter}
          type="text"
          value={filterValue}
        />
      </Label>
    );
  }
}
PhoneBookFilter.propTypes = {
  onSetFilter: PropTypes.func.isRequired,
};
