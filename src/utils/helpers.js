// Format date in a user-friendly way
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Capitalize the first letter of a string
export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Calculate the progress percentage
export const calculateProgress = (completed, total) => {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
};

