document.addEventListener('DOMContentLoaded', function() {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');
  const signupForm = document.getElementById('signupForm');
  const signinForm = document.getElementById('signinForm');

  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
  });

  // Simple form validation and submission handling
  signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      
      // Here you would typically send data to server
      console.log('Sign Up:', { name, email, password });
      alert('Account created successfully! Please sign in.');
      container.classList.remove("right-panel-active");
      signupForm.reset();
  });

  signinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;
      
      // Here you would typically send data to server
      console.log('Sign In:', { email, password });
      alert('Sign in successful!');
      signinForm.reset();
  });
});