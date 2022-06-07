const p1 = () => {
  let user = {}
  user.name = 'John'
  user.surname = 'Mike'
  user.name = 'Peter'
  delete user.name
  console.log(user);
}

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};

const p2 = () => {
  let res = 0
  for(i = 0;i<Object.keys(fruit).length;i++){
    res = res + Object.values(fruit)[i]
  }
  console.log(res)
}
