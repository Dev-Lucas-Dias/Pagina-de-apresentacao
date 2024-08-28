function togglemode(){
    const html = document.documentElement
    html.classList.toggle("light")


    const img =document.querySelector("#profile img")
 if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/Avatar-2.png')
    }else{
        img.setAttribute('src', './assets/avatar.png')
    }
    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto de Lucas Dias sorrindo usando camisa branca e azul, óculos de sol, com barba e fundo branco')
    }else{
        img.setAttribute('alt', 'Foto de Lucas Dias sorrindo usando camisa social preta, com barba e fundo branco')
    }
}

