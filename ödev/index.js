const boxes = document.querySelectorAll('.b');
function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0 ; i < 6 ; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}



boxes.forEach(b=>{
    b.addEventListener('click', function(){
        boxes.forEach(box => box.classList.remove('big'));
        this.classList.add('big');
        boxes.forEach(box=>{
            box.style.backgroundColor = getRandomColor();
        });
    });
});