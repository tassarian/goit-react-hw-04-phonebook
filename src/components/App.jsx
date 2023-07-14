import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

const { Component } = require('react');
const { Container } = require('./Global.styled');
const { Section } = require('./Section/Section');

const BASE_STATE = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
class App extends Component {
	state = {
		contacts: BASE_STATE,
		filter: '',
	};

	componentDidMount() {
		const contacts = JSON.parse(window.localStorage.getItem('contacts'));
		if (contacts) {
			this.setState({ contacts });
		}
	}

	componentDidUpdate(_, prevState) {
		if (prevState.contacts.length !== this.state.contacts.length) {
			window.localStorage.setItem(
				'contacts',
				JSON.stringify(this.state.contacts)
			);
		}
	}

	handleFormSubmit = ({ name, number }) => {
		this.setState(prevState => ({
			contacts: [...prevState.contacts, { id: nanoid(), name, number }],
		}));
	};

	handleFilter = e => {
		this.setState({ filter: e.target.value });
	};

	filteredContacts = string => {
		return this.state.contacts.filter(contact => {
			return contact.name
				.toLowerCase()
				.includes(this.state.filter.toLowerCase(string));
		});
	};

	handleDelete = id => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(el => el.id !== id),
		}));
	};

	render() {
		return (
			<Container>
				<Section title="Phonebook">
					<Form
						contacts={this.state.contacts}
						handleForm={this.handleFormSubmit}
					/>
				</Section>
				<Section title="Contacts">
					<ContactList
						filter={this.handleFilter}
						contacts={this.filteredContacts()}
						onDelete={this.handleDelete}
					/>
				</Section>
			</Container>
		);
	}
}

export default App;
