const arrStr = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']

function groupAnagram(arr, groups = []) {
  if (arr.length === 1) {
    groups.push(arr)
    return groups
  }
  const firstWord = arr[0]
  const group = [firstWord]
  const objWord = {}
  for (const w of firstWord) {
    objWord[w] = 1
  }
  let arrLeft = []
  for (let i = 1; i < arr.length; i++) {
    if (firstWord.length !== arr[i].length) {
      arrLeft.push(arr[i])
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (objWord[arr[i][j]] !== 1) {
          arrLeft.push(arr[i])
          i++
        }
      }
      group.push(arr[i])
    }
  }
  groups.push(group)
  return groupAnagram(arrLeft, groups)
}
console.log(groupAnagram(arrStr))