
changeThemeDarkButton.onclick = function(){

    document.body.style.backgroundColor = 'rgb(29, 41, 54)';
    setColorForPar('rgb(240, 248, 255)', aboutUs.children[0].children)
    // infoBody.style.color = "rgb(240, 248, 255)"
    changeThemeLightButton.style.display = "block"
    changeThemeDarkButton.style.display = "none"
    aboutUs.style.boxShadow = "none"
}
        
changeThemeLightButton.onclick = function (){
    document.body.style.backgroundColor = 'rgb(240, 248, 255)';
    setColorForPar('black', aboutUs.children[0].children)
    changeThemeLightButton.style.display = "none";
    changeThemeDarkButton.style.display = "block";
    aboutUs.style.boxShadow = "0 0 15px 9px rgba(255,122,0,0.4)";
}

function setColorForPar(color, elements){
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].className === 'infoBody') {
            elements[i].style.color = color
        }
    }
}
