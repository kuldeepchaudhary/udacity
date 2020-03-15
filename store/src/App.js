import ReactDom from 'react-dom';
import React, { Component } from 'react';
// import ContactsAPI from './utils/ContactsAPI';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    query: '',
    contacts: [
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg'
      },
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg'
      },
    ]
  }

  // componentDidMount = () => {
  //   ContactsAPI.getAll().then((contacts) => {
  //     this.setState(() => ({
  //       contacts
  //     }))
  //   })
  // }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    // ContactsAPI.remove(contact)
  }

  updateQuery = (e) => {
    this.setState({
      query: e.target.value.trim()
    })
  }

  render() {

    return(
      <div>
        <ListContacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
          />
      </div>
    )
  }
}

export default App;

