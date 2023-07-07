
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

const validate = (state) => {
  const errors = {};
  const regPassword = new RegExp("[0-9]");

  if (state.email === "") {
    errors.email = "Su email está vacío";
  } else if (state.email.length > 35) {
    errors.email = "Su email sobrepasa la cantidad de caracteres";
  } else if (!regexEmail.test(state.email)) {
    errors.email = "Debe ser un correo electrónico";
  }

  if (state.password.length < 6) {
    errors.password = "Debe tener más de 6 caracteres ";
  } else if (!regPassword.test(state.password)) {
    errors.password = "La contraseña debe contener al menos 1 numero";
  } else if (state.password.length > 10) {
    errors.password = "Debe tener menos de 10 caracteres ";
  }

  return errors;
};

export default validate;