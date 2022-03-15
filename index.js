const myEmojis = ["👨‍💻", "⛷", "🍲"];

myEmojis.forEach(element => {
    console.log(element)
});

console.log(myEmojis.map(myEmojisItem => {
    return myEmojisItem.slice();
}))

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray)