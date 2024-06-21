function flip() {
    const randomMove = Math.floor(Math.random() * 2);
    if (randomMove == 0) {
        document.getElementById('parent').innerHTML = 'Heads!';
        
    }

    else {
        document.getElementById('parent').innerHTML = 'Tails!';
    }
}