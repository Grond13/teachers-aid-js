import * as registrationConnection from '../connection/registrationConnection.js';
import { checkEmail, checkPassword } from '../assets/functions.js';

export function register(name, surname, email, password){
    registrationConnection.register(name, surname, email, password);
}

export function validateName(name){
    return name.length >= 2;
}

export function validateEmail(email) {
    return checkEmail(email);
}

export function validatePasswords(password1, password2) {
    const match = password1 === password2;
    const isValid = password1.length > 6 && password2.length > 6;
    return { match, isValid };
  }