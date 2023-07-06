import * as loginConnection from '../connection/loginConnection.js';
import { checkEmail, checkPassword } from '../assets/functions.js';

export function login(email, password) {
    loginConnection.login(email, password);
}

export function validateEmail(email) {
    return checkEmail(email);
}

export function validatePassword(password) {
    return checkPassword(password);
}