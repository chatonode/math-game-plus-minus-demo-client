// TODO

const validateNumber = (numberValue: number) => {
  return numberValue.toString().trim().length !== 0
}

// const validateFirstName = (firstNameValue) => {
//   return firstNameValue.trim().length !== 0
// }

// const validateLastName = (lastNameValue) => {
//   return lastNameValue.trim().length !== 0
// }

// const validateEmail = (emailValue) => {
//   const trimmedEmail = emailValue.trim()

//   if (trimmedEmail.length === 0) {
//     return false
//   }

//   // Else
//   return trimmedEmail.toLowerCase().match(
//     // @ref-link: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   )
// }

export {
  validateNumber
}
