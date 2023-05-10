const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin') {
    window.location.href = 'otra-pagina.html'; // Redirige a otra página
  } else {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Acceso denegado. Verifique su usuario y contraseña.';
    loginForm.appendChild(errorMessage);
  }
});