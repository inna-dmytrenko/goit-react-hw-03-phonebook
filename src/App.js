import { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'
import PhoneBookList from './components/PhoneBook/PhoneBookList'
import PhoneBookForm from './components/PhoneBookForm/PhoneBookForm'
import PhoneBookFilter from './components/PhoneBook/PhoneBookFilter'
import filterContacts from './components/helpers/FilterContacts'
import { Aside, Block } from './components/PhoneBook/PhoneBook.styled'

export default class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56', id: 'id-1' },
      { name: 'Hermione Kline', number: '443-89-12', id: 'id-2' },
      { name: 'Eden Clements', number: '645-17-79', id: 'id-3' },
      { name: 'Annie Copeland', number: '227-91-26', id: 'id-4' },
    ],
    name: '',
    number: '',
    filter: '',
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    console.log(contacts)
    const parseContacts = JSON.parse(contacts)
    console.log(parseContacts)
    if (parseContacts) {
      this.setState({ contacts: parseContacts })
    }
    //  this.setState({ contacts: parseContacts })
    
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate')
    if (this.state.contacts !== prevState) {
      console.log('Обновилось поле contacts')
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  handleSetUserInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  addContact() {
    const { name, number } = this.state
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    }
    this.setState((prev) => ({
      contacts: [...prev.contacts, contact],
      name: '',
      number: '',
    }))
  }
  handleAddContact = (e) => {
    e.preventDefault()
    const { name, number, contacts } = this.state
    if (
      contacts.some((el) => el.name === name) ||
      contacts.some((el) => el.number === number)
    ) {
      alert(`${name} is already in contacts`)
    } else {
      this.addContact()
    }
  }
  handleDeleteContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== e.target.id),
    })
  }
  handleChangeFilter = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    const { name, number } = this.state
    const contacts = filterContacts(this.state.contacts, this.state.filter)
    return (
      <Aside>
        <h1>Phonebook</h1>
        <PhoneBookForm
          contacts={contacts}
          name={name}
          number={number}
          onSetUserInfo={this.handleSetUserInfo}
          onAddContact={this.handleAddContact}
        />
        <Block>
          <h2>Contacts</h2>
          <PhoneBookFilter
            filterValue={this.state.filter}
            onSetFilter={this.handleChangeFilter}
          />
          <PhoneBookList
            contacts={contacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Block>
      </Aside>
    )
  }
}
// function App() {
//   return <Form />
// }

// export default App
