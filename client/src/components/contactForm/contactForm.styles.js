import styled from 'styled-components';
import { TYPOGRAPHY } from '../../styles/Typography';
import { COLORS } from '../../styles/Colors';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;

	padding-top: 20px;
	width: 100%;
`;

export const StyledInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
`;

export const StyledInputLabel = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: ${COLORS.irishCoffeeDarkest};
	text-align: left;
	width: 100%;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 16px;
	border-radius: 10px;
	border: 1.5px solid
		${({ $error }) => ($error ? 'red' : `${COLORS.irishCoffeeDarker}`)};

	background-color: ${COLORS.white};
	font-size: 15px;
	color: ${COLORS.irishCoffeeDarkest};
	&:focus {
		outline: none;
		border-color: ${COLORS.irishCoffee};
	}
`;

export const StyledErrorMessage = styled.span`
	color: ${COLORS.red};
	font-size: 12px;
	text-align: left;
	width: 100%;
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	padding: 16px;
	border-radius: 10px;
	border: 1.5px solid ${COLORS.irishCoffeeDarker};
	background-color: ${COLORS.white};
	font-family: ${TYPOGRAPHY.bodyFont};
	font-size: 15px;
	color: ${COLORS.irishCoffeeDarkest};
	&:focus {
		outline: none;
		border-color: ${COLORS.irishCoffee};
	}
`;

export const StyledButton = styled.button`
	width: 100%;
	padding: 16px;
	border-radius: 10px;
	border: none;
	background-color: ${COLORS.irishCoffeeDark};
	color: ${COLORS.white};
	font-size: 15px;
	font-family: ${TYPOGRAPHY.bodyFont};
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.irishCoffee};
	}
`;
