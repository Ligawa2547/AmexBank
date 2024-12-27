// Validate email address (must end with @wgu.college)
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@wgu\.college$/;
  return emailRegex.test(email);
};

// Validate password (at least 8 characters, 1 uppercase letter, 1 number)
export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// Validate form inputs for registration
export const validateRegistrationForm = ({ email, password, confirmPassword }) => {
  const errors = {};

  if (!validateEmail(email)) {
    errors.email = 'Email must end with @wgu.college.';
  }

  if (!validatePassword(password)) {
    errors.password = 'Password must be at least 8 characters long, include an uppercase letter and a number.';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match.';
  }

  return errors;
};

