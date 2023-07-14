import { Component } from 'react';
import { Button, Input, InputTitle, StyledForm } from './Form.styled';
import { PropTypes } from 'prop-types';

export class Form extends Component {
	state = {
		name: '',
		number: '',
	};

	onFormChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();
		if (
			this.props.contacts.find(
				contact =>
					contact.name.toLowerCase() ===
						this.state.name.toLowerCase() ||
					contact.number === this.state.number.toLowerCase()
			)
		) {
			return alert(
				`${this.state.name} or ${this.state.number} is already in contacts`
			);
		}
		this.props.handleForm(this.state);
		this.setState({ name: '', number: '' });
	};

	render() {
		return (
			<StyledForm onSubmit={this.onFormSubmit}>
				<InputTitle>Name</InputTitle>
				<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					onChange={this.onFormChange}
					value={this.state.name}
				/>
				<InputTitle>Number</InputTitle>
				<Input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					onChange={this.onFormChange}
					value={this.state.number}
				/>
				<Button type="submit">Add contact</Button>
			</StyledForm>
		);
	}
}

Form.propTypes = {
	contacts: PropTypes.array.isRequired,
	handleForm: PropTypes.func.isRequired,
};
