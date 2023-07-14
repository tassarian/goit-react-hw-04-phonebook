import styled from 'styled-components';

export const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: max-content;
`;

export const StyledInput = styled.input`
	display: inline-block;
	margin-bottom: 20px;
`;

export const StyledItem = styled.li`
	font-weight: bold;
	span {
		margin-left: 5px;
		font-weight: normal;
	}
`;

export const StyledButton = styled.button`
	border: none;
	border-radius: 5px;
	background-color: red;
	color: white;
	margin-left: 20px;
	display: inline-block;

	&:hover,
	&:active {
		background-color: black;
	}
`;
