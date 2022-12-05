function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((acc, user, i, users) => {
    return i === users.length - 1 ? (acc + user.age) / users.length : acc + user.age;
    }, 0)
}