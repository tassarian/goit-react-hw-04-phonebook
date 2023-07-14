import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: max-content;
`;

export const InputTitle = styled.span`
	margin-bottom: 5px;
`;

export const Input = styled.input`
	margin-bottom: 20px;
`;

export const Button = styled.button`
	width: max-content;
	padding: 5px 10px;

	border: none;
	border-radius: 5px;
	margin: 0 auto;
	background-color: lightgrey;
	&:active {
		background-color: lightgreen;
	}
`;
