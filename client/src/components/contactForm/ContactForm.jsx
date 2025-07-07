import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form_validation';
import {
	StyledButton,
	StyledErrorMessage,
	StyledForm,
	StyledInput,
	StyledInputContainer,
	StyledInputLabel,
	StyledTextArea
} from './contactForm.styles';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		setValue
	} = useForm({
		mode: 'onBlur'
	});

	// const data = watch();

	const onSubmit = data => {
		//envia al formulario?
		console.log(data);
	};
	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledInputContainer>
				<StyledInputLabel htmlFor='name'>Nombre</StyledInputLabel>
				<StyledInput
					id='name'
					type='text'
					placeholder='Escribe tu nombre'
					{...register('name', FORM_VALIDATIONS.NAME)}
					$error={!!errors.name}
				/>
				<StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledInputLabel htmlFor='email'>Email</StyledInputLabel>
				<StyledInput
					id='email'
					type='email'
					placeholder='Escribe tu email'
					{...register('email', FORM_VALIDATIONS.EMAIL)}
					$error={!!errors.email}
				/>
				<StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
			</StyledInputContainer>

			<StyledInputContainer>
				<StyledInputLabel htmlFor='message'>Mensaje</StyledInputLabel>
				<StyledTextArea
					id='message'
					placeholder='Escribe tu mensaje'
					{...register('message', FORM_VALIDATIONS.MESSAGE)}
					$error={!!errors.message}
				/>
				<StyledErrorMessage>{errors.message?.message}</StyledErrorMessage>
			</StyledInputContainer>
			<StyledButton type='submit'>Enviar</StyledButton>
		</StyledForm>
	);
};

export default ContactForm;
