const cpfValidator = (cpf) => {
  if (typeof cpf === 'string' && cpf.length === 11) {
    return cpf
  }else {
    throw new TypeError("Cpf formato inválido")
  }
}

const cpfFormatter = (value) => {
  const cpf = value.replace(/\D/g, '')
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

export { cpfValidator, cpfFormatter }