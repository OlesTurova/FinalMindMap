window.addEventListener("mousedown", ClickDown);

function ClickDown(){

    if (event.which === 1){
        let cardmove = event.target;
        if (cardmove.classList.contains('imcard')){
            if (event.detail === 1){
                console.log('я карта');
                console.log(cardmove.className);

                let shiftX = event.clientX - cardmove.getBoundingClientRect().left;
                let shiftY = event.clientY - cardmove.getBoundingClientRect().top;
                cardmove.style.zIndex = 1000;

                moveAt(event.pageX, event.pageY);
                document.addEventListener('mousemove', onMouseMove);

                function moveAt(pageX, pageY) {
                    
                    cardmove.style.left = pageX - shiftX + 'px';
                    cardmove.style.top = pageY - shiftY + 'px';

                    console.log('стартуем')
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                    
                }

                window.addEventListener("mouseup", ClickUp);

                function ClickUp(){
                    if (event.which === 1){
                        document.removeEventListener('mousemove', onMouseMove);
                    }
                }
                }
            }
        }
    }

window.addEventListener("mouseup", ClickUp);

function ClickUp(){
    if (event.which === 1){
        console.log('мышку отпустили');
    }
    else if(event.which === 3){
        console.log('правая кнопочка');
    }
}

