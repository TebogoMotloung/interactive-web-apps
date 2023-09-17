import{
    company,
    year
} from './configuration.js';

const message = '© ' + company + year 
document.querySelector('[data-key="footer"]').innerText = message

console.log('message', company, year);