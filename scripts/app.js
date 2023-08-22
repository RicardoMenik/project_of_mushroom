// Projeto Escolar sobre cogumelo

// 1. Passo (Declarar as variaveis para poder criar uma função sobre a imagem dentro de uma div)

let img_div_content = document.querySelectorAll(".content_mid_item");

// 2. Passo (Declarar uma estrutura de repetição para acessar a imagem em particular)

for(let i = 0; i <= img_div_content.length; i++) {
    img_div_content[i].addEventListener("click", () => {
        if(img_div_content[i].style.width === "30%") {
            img_div_content[i].style.width = "20%"
        } else {
            img_div_content[i].style.width = "30%"
        }
    })
}