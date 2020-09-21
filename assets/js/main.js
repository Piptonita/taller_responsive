
class PersonalWeb{
    constructor(){
        this.abrirMenu();
    }

    abrirMenu(){
        let bars = document.getElementById('menu');
        let cross = document.getElementById('close');
        let opciones = document.getElementsByClassName('link');
        let menu = document.getElementsByClassName('mob-navigator');

        bars.addEventListener('click', ()=>{
            menu[0].style.cssText = "display: block; opacity:0;";
            window.setTimeout(()=>{
                menu[0].style.cssText += "opacity: 1; transition: 0.5s";
            }, 1);

        });
        cross.addEventListener('click', ()=>{
            menu[0].style.cssText += "opacity: 0; transition: 0.5s";
            window.setTimeout(()=>{
                menu[0].style.cssText = "display: none;";
            }, 500);
        });

        for(let i = 0; i <= opciones.length; i++){
            opciones[i].addEventListener('click',()=>{
                menu[0].style.cssText += "opacity: 0; transition: 0.5s";
                window.setTimeout(()=>{
                    menu[0].style.cssText = "display: none;";
                }, 500);
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    var personalweb = new PersonalWeb();
});