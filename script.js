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
