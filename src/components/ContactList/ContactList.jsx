import { PropTypes } from 'prop-types';
import {
	StyledButton,
	StyledInput,
	StyledItem,
	StyledList,
} from './ContactList.styled';

export const ContactList = ({ filter, contacts, onDelete }) => {
	return (
		<>
			<StyledInput
				type="text"
				placeholder="Enter name for search here"
				onChange={filter}
			/>
			<StyledList>
				{contacts.map(contact => {
					return (
						<StyledItem key={contact.id}>
							{contact.name}:<span>{contact.number}</span>
							<StyledButton
								id={contact.id}
								onClick={() => onDelete(contact.id)}
							>
								Delete
							</StyledButton>
						</StyledItem>
					);
				})}
			</StyledList>
		</>
	);
};

ContactList.propTypes = {
	filter: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
};
