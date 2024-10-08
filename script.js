const formulario = document.querySelector("#form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const imagem = document.getElementById("imagem").value;
    const projeto = document.getElementById("projeto").value;
    const descricao = document.getElementById("descricao").value;

    const li = document.createElement("li");
    li.classList.add("item");

    li.innerHTML = `
                        <div class="item-img">
                        <img src="${imagem}" alt="site everyday a cat">
                    </div>
                    <div class="item-information">
                        <h4>${titulo}</h4>
                        <p>${descricao}</p>
                        <a href="${projeto}">Link do projeto</a>
                    </div>
    
    `

    const lista = document.querySelector(".list");
    lista.appendChild(li);
})