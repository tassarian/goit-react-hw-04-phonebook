import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';

import { useState } from 'react';
import { Container } from './Global.styled';
import { Section } from './Section/Section';

// const BASE_STATE = [
// 	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// 	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// 	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// 	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
	const [contacts, setContacts] = useState(() => {
		const stringifyedContacts = localStorage.getItem('contacts_key');
		const parsedContacts = JSON.parse(stringifyedContacts) ?? [];
		return parsedContacts;
	});
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const normalContacts = JSON.stringify(contacts);
		localStorage.setItem('contacts_key', normalContacts);
	}, [contacts]);

	const handleFormSubmit = (name, number) => {
		setContacts(prevState => [
			...prevState,
			{
				id: nanoid(),
				name,
				number,
			},
		]);
	};

	const handleFilter = e => {
		setFilter(e.target.value);
	};

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	const handleDelete = id => {
		setContacts(prevState => prevState.filter(el => el.id !== id));
	};

	return (
		<Container>
			<Section title="Phonebook">
				<Form contacts={contacts} handleForm={handleFormSubmit} />
			</Section>
			<Section title="Contacts">
				{contacts.length > 0 && (
					<ContactList
						filter={handleFilter}
						contacts={filteredContacts}
						onDelete={handleDelete}
					/>
				)}
			</Section>
		</Container>
	);
};

export default App;
