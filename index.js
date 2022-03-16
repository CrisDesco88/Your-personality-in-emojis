let myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById('emojiContainer');
const pushBtn = document.getElementById('push-btn');
const unshiftBtn = document.getElementById('unshift-btn');
const emojiInput = document.getElementById("emoji-input");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

let renderEmojis = () => {
    emojiContainer.innerHTML='';
    myEmojis.forEach(element => {
    const emoji = document.createElement('span');
    emoji.textContent = element;
    emojiContainer.append(emoji);
})};


pushBtn.addEventListener('click', () => {
    
    if(emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = '';
    renderEmojis();
    }
    
});

unshiftBtn.addEventListener('click', () => {
    if(emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = '';
    renderEmojis();
    }
    
});

popBtn.addEventListener('click', () => { 
    myEmojis.pop()
    renderEmojis(); 
});

shiftBtn.addEventListener('click', () => {
    myEmojis.shift()
    renderEmojis();  
});


