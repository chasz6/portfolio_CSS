// Me gusta
const like = document.getElementById("like");
like.addEventListener("click", e => {
    document.getElementById("conteo").innerHTML = `Le diste 1 me gusta, ¡gracias!`;
    document.getElementById("like").src = "./imgs/red-heart.png"
});