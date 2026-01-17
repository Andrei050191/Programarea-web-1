
function isValidPassword(password) {
	const hasLength = password.length >= 8;
	const hasUppercase = /[A-Z]/.test(password);
	const hasNumber = /[0-9]/.test(password);
	const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
	return hasLength && hasUppercase && hasNumber && hasSpecial;
}
