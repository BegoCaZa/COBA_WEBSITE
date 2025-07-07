const messages = {
	name: {
		required: 'This field is required',
		wrong: 'Wrong format, letters only'
	},
	email: {
		required: 'Can’t be blank',
		wrong: 'Wrong format, email only'
	},
	message: {
		required: 'Can’t be blank',
		wrong: 'Please, submit a message'
	}
};
const patterns = {
	onlyLetters: /^[A-Za-z]+$/,
	onlyNumbers: /^\d+$/,
	allCharacters: /^[A-Za-z0-9\s@#\-_.]+$/, // puedes extender este si lo necesitas
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // ✅ patrón válido para email
};

const nameValidations = {
	required: messages.name.required,
	pattern: {
		value: patterns.onlyLetters,
		message: messages.name.wrong
	}
};

const emailValidations = {
	required: messages.email.required,
	pattern: {
		value: patterns.email,
		message: messages.email.wrong
	}
};
const messageValidations = {
	required: messages.message.required,
	pattern: {
		value: patterns.allCharacters,
		message: messages.message.wrong
	}
};

export const FORM_VALIDATIONS = {
	NAME: nameValidations,
	EMAIL: emailValidations,
	MESSAGE: messageValidations
};
