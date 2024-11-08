const mycircle = document.getElementById("circle");
let top =0;
let left =0;

document.addEventListener("keydown",  (event) => {
   switch (event.key) {
    case 'ArrowUp':
        top -= 10; 
        break;
        case 'ArrowDown':
            top += 10; 
            break;
            case 'ArrowLeft':
                left -= 10; 
                break;
                case 'ArrowRight':
                    left += 10; 
                    break;
   }
   mycircle.style.top = top + "px";
   mycircle.style.left = left + "px";

})
