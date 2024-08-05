const classnNumberMaker = () => {
  const randomNumber = Math.floor(Math.random() *  3)
  const abc = ['a', 'b', 'c']
  const xyz = ['x', 'y', 'z']
  const result = `${abc[randomNumber]}${randomNumber} - ${xyz[randomNumber]}`.toUpperCase()
  console.log(result)
}

export { classnNumberMaker }