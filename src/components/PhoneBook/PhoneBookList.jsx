import { Component } from "react";

import PhoneBookListItem from "./PhoneBookListItem";

export default class PhoneBookList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => {
          return (
            <PhoneBookListItem
              key={id}
              number={number}
              name={name}
              id={id}
              onDeleteContact={this.props.onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}
