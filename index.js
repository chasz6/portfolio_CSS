// Me gusta
const like = document.getElementById("like")
like.addEventListener("click", e => {
    document.getElementById("conteo").innerHTML = `Le diste 1 me gusta, ¡gracias!`;
    document.getElementById("like").src = "./imgs/red-heart.png"
});

// Despliega la sección de comentarios
const showMenu = document.getElementById("comentar")
showMenu.addEventListener("click", e => {
    const menu = document.getElementById("comment-section")
    menu.style.display = "flex"
})

// Comentar
const publicar = document.getElementById("publicar")
publicar.addEventListener("click", e => {
    const parent = document.getElementById("comment-section")
    const comment = document.createElement("p")
    comment.style.textAlign = "left"
    comment.textContent = document.getElementById("text-comment").value
    parent.insertAdjacentElement("beforebegin", comment)
    console.log(comment)
});

// Guarda en colección
const save = document.getElementById("save")
save.addEventListener("click", e => {
    document.getElementById("save").src = "./imgs/black-save.png"
    const guardado = document.querySelector(".counter")
    const msg = document.createElement("p")
    msg.textContent = "Guardado en colección"
    msg.style.margin = "0"
    msg.style.textAlign = "right"
    guardado.insertAdjacentElement("beforebegin", msg)
    setTimeout(e => {
        msg; 2000
    })
})