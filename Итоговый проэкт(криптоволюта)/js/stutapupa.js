const textScrol = document.querySelectorAll('.block__text');
let indsex = 0;
console.log(textScrol);

const chixpix =(indexq) => {
    textScrol[indsex].classList.toggle("active");
}
setInterval(()=>{
    indsex++
    if ( indsex===4 ) {
        indsex =0
    }
    
    chixpix(indsex)
}, 350)