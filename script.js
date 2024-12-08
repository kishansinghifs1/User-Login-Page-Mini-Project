const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const register = document.querySelector('.register-link');
const buttonpopup = document.querySelector('.btnlog');
const cloose = document.querySelector('.icon-close');
register.addEventListener('click',() =>{
    wrapper.classList.add('active');
})
loginlink.addEventListener('click',() =>{
    wrapper.classList.remove('active');
})
buttonpopup.addEventListener('click',() =>{
    wrapper.classList.add('active-popup');
})
cloose.addEventListener('click',() =>{
    wrapper.classList.remove('active-popup');
}) 
let isLoggedIn = false; 
function handleLogin(event) {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }
  console.log('Login:', { email, password });
  fetch("http://localhost:7050/signin?username="+email+"&password="+password)
  .then(function(response){
          response.text()
          .then(function(ans){
            document.getElementById("welcome-message").innerHTML = ans;
            isLoggedIn = true; 
            updateLoginLogoutButton(); 
          })
      });
}

function handleRegister(event) { 
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  if (!username || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }
  console.log('Register:', { username, email, password });
  fetch("http://localhost:7050/signup?username="+email+"&password="+password+"&name="+username)
  .then(function(response){
          response.text()
          .then(function(ans){
            document.getElementById("welcome-message").innerHTML = ans;
          })
      });

 }
 function handleLogout() {
  isLoggedIn = false; 
  updateLoginLogoutButton(); 
  location.reload();
}
function updateLoginLogoutButton() {
  const button = document.getElementById('loginLogoutButton');
  if (isLoggedIn) {
    button.innerText = 'Logout';
    button.onclick = handleLogout; 
  } else {
    button.innerText = 'Login';
    button.onclick = function() {
    };
  }
}