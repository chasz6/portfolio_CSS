// Me gusta
const like = document.getElementById("like")
like.addEventListener("click", e => {
    document.getElementById("conteo").innerHTML = `Le diste 1 me gusta, ¡gracias!`;
    document.getElementById("like").src = "./imgs/red-heart.png"
});

// Me gusta logo (sólo en desktop)
const tap = document.querySelector(".inner-circle")
tap.addEventListener("dblclick", e => {
    document.getElementById("conteo").innerHTML = `Le diste 1 me gusta, ¡gracias!`;
    document.getElementById("like").src = "./imgs/red-heart.png"
})


/*************************
 * Sección de comentarios
 *************************/

// Despliega la sección de comentarios
const showMenu = document.getElementById("comentar")
showMenu.addEventListener("click", e => {
    const menu = document.getElementById("comment-writing")
    menu.style.display = "flex"
})

// Comentar
const publicar = document.getElementById("publicar")
publicar.addEventListener("click", e => {
    const parent = document.getElementById("comment-section")
    const comment = document.createElement("p")
    comment.style.textAlign = "left"
    comment.style.marginTop = "0"
    comment.textContent = document.getElementById("text-comment").value
    parent.insertAdjacentElement("beforeend", comment)
    comment.scrollIntoView()
    
    console.log(comment)
});

// Color palabra publicar
const enviar = document.getElementById("text-comment")
enviar.addEventListener("keypress", e => {
    const publicar = document.getElementById("publicar")
    if (document.getElementById("text-comment").value.length > -1) {
        publicar.style.color = "rgb(78, 167, 226)"
    }
    publicar.onlick = () => {
        text.value = "";
    }
})

// Descomentar



/********************
 * Sección de guardar
 ********************/

// Guarda en colección
const save = document.getElementById("save")
save.addEventListener("click", e => {
    save.src = "./imgs/black-save.png"
    save.id = "black-save"
    const guardado = document.querySelector(".counter")
    const msg = document.createElement("p")
    msg.textContent = "Guardado en colección"
    msg.style.margin = "0"
    msg.style.textAlign = "right"
    msg.style.color = "rgb(78, 167, 226)"
    guardado.insertAdjacentElement("beforebegin", msg)
    function disapear() {
        msg.style.display = "none";
    }
    setTimeout(disapear, 1500)
})