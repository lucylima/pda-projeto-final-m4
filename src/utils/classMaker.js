const randomNumber = () => { return Math.floor(Math.random() * 3) }
const classnNumberMaker = () => {
  const abc = ['a', 'b', 'c', 'd']
  const xyz = ['x', 'y', 'z', 'w']
  const result =
    `${abc[randomNumber()]}${randomNumber()} - ${xyz[randomNumber()]}`.toUpperCase()
  return result
}

export { classnNumberMaker }