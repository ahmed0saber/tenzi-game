var active_boxes = document.getElementsByClassName('active');
var boxes = document.getElementsByClassName('box');

roll();

function toggle(x){
    if(boxes[x].classList.contains('active')){
        boxes[x].classList.remove('active');
        boxes[x].classList.add('freezed');
    }else{
        boxes[x].classList.remove('freezed');
        boxes[x].classList.add('active');
    }
}

function roll(){
    for (var i = 0; i < active_boxes.length; i++){
        active_boxes[i].textContent = Math.floor((Math.random() * 6) + 1);
    }
    if(boxes[0].textContent == boxes[1].textContent && boxes[0].textContent == boxes[2].textContent && boxes[0].textContent == boxes[3].textContent && boxes[0].textContent == boxes[4].textContent && boxes[0].textContent == boxes[5].textContent){
        console.log('You win !');
        win();
    }else{
        console.log('You have not won yet, but you can !');
    }
}

function win(){
    document.getElementsByClassName("alert")[0].style.display = "block";
}

function exit(){
    document.getElementsByClassName("alert")[0].style.display = "none";
    console.log("closed");
}

function restart(){
    for (var i = 0; i < boxes.length; i++){
        boxes[i].textContent = '';
        boxes[i].classList.remove('freezed');
        boxes[i].classList.add('active');
    }
    roll();
}