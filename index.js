const circle = document.getElementById("circle");
//let top =0;
//let left =0;

//document.addEventListener("keydown",  (event) => {
   //switch (event.key) {
    //case 'ArrowUp':
        //top -= 10; 
        //break;
        //case 'ArrowDown':
            //top += 10; 
            //break;
            //case 'ArrowLeft':
             //   left -= 10; 
           //     break;
         //       case 'ArrowRight':
       //             left += 10; 
     //               break;
   //}
   //mycircle.style.top = top + "px";
  // mycircle.style.left = left + "px";

//})

  
    // document.addEventListener("mousemove", (event) => {
    //     const posX = event.clientX
    //     const posY = event.clientY

    //   mycircle.style.left = `${posX - mycircle.offsetWidth / 2}px`;
    //   mycircle.style.top = `${posY - mycircle.offsetHeight / 2}px`;
    // });
  
  

    let isMoving = false;
    
    const startMoving = (event) => {


        isMoving = true;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    

        circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
        circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
    
        document.addEventListener('mousemove', moveCircle);
    };
    
    const stopMoving = () => {

        isMoving = false;
        document.removeEventListener('mousemove', moveCircle);
    };
    
    const moveCircle = (event) => {
        if (!isMoving) return;
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
        circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
        
    };
    
    document.addEventListener('mousedown', startMoving);
    document.addEventListener('mouseup', stopMoving);