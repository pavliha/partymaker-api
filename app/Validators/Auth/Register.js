module.exports = class Register {

  get rules() {
    return {
      name: 'required',
      phone: 'required|unique:users,phone',
      email: 'required|email|unique:users,email',
      password: 'required'
    }
  }

  get messages() {
    return {
      'phone.unique': 'Пользователь с таким телефоном уже есть',
      'email.unique': 'Пользователь с такой почтой уже есть'
    }
  }

  get validateAll() {
    return true
  }

}
