// Save user token to localStorage
export const saveToken = (token) => {
  localStorage.setItem('wguToken', token);
};

// Get user token from localStorage
export const getToken = () => {
  return localStorage.getItem('wguToken');
};

// Remove user token from localStorage (logout)
export const removeToken = () => {
  localStorage.removeItem('wguToken');
};

// Check if a user is logged in
export const isLoggedIn = () => {
  return !!getToken();
};

