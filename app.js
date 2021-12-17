import { signupUser, signInUser, redirectToPolls } from './fetch-utils.js';

// import functions and grab DOM elements
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

// let state
redirectToPolls();

// set event listeners

signUpForm.addEventListener('submit', async(event) =>{
    event.preventDefault();
    const user = await signupUser(signUpEmail.value, signUpPassword.value);

    if (user){
        redirectToPolls();
    } else {
        console.error(user);
    } 
  
    
});
signInForm.addEventListener('submit', async(event) =>{
    event.preventDefault();
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user){
        redirectToPolls();
    } else {
        console.error(user);
    } 
  
    
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
