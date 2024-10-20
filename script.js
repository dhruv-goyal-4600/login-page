document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  // Validate Email/Username (Simple Pattern)
  const usernamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!usernamePattern.test(username)) {
    alert('Please enter a valid email or username.');
    return;
  }

  // Validate Password (Minimum 6 Characters)
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Validate Phone Number (10 Digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // Validate Address (Not Empty)
  if (address.trim() === '') {
    alert('Address cannot be empty.');
    return;
  }

  // If All Validations Pass, Show Welcome Message
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('welcomeMessage').classList.remove('hidden');
});
