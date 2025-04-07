// businessLogic/apiCalls.js

// Base API URL
const API_URL = 'https://restoreloans-apis.onrender.com'; // replace with your API URL

// Register API Request
export function registerUser(userData) {
  return fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

// Login API Request
export function loginUser(credentials) {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(credentials).toString(),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

// Forgot Password API Request
export function forgotPassword(email) {
  return fetch(`${API_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

// Create Loan API Request
export function createLoan(loanData) {
  return fetch(`${API_URL}/loans/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loanData),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

// Get Current User API Request
export function getCurrentUser() {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}

// Upload Document API Request
export function uploadDocument(formData) {
  return fetch(`${API_URL}/documents/upload`, {
    method: 'POST',
    body: formData, // no need to stringify the FormData
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error));
}
