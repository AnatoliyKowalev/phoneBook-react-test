import React, { Component } from 'react';
import './main.css';

import ContactsPhoneBook from './components/contactsPhoneBook/ContactsPhoneBook';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <ContactsPhoneBook />
      </div>
    );
  }
}

export default App;
