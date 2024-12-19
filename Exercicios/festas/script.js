document.addEventListener("DOMContentLoaded", function() {
    const kits = [
        { nome: "Kit Festa Infantil", descricao: "Inclui balões, mesa decorada e lembrancinhas.", imagem: "imagens/kit-aniversario" },
        { nome: "Kit Aniversário", descricao: "Decorativos, bolo fake e velas.", imagem: "imagens/kit-aniversario.jpg" },
        { nome: "Kit Casamento", descricao: "Mesa completa, louças e decoração.", imagem: "imagens/kit-casamento.jpg" },
        { nome: "Kit Temático", descricao: "Personalizado conforme o tema da festa.", imagem: "imagens/kit-tematico.jpg" }
    ];

    const listaKits = document.getElementById("lista-kits");
    
    kits.forEach(kit => {
        const kitDiv = document.createElement("div");
        kitDiv.classList.add("kit");
        kitDiv.innerHTML = `<img src="${kit.imagem}" alt="${kit.nome}"><div><h3>${kit.nome}</h3><p>${kit.descricao}</p><a href="#">Ver Detalhes</a></div>`;
        listaKits.appendChild(kitDiv);
    });

    const calendario = document.getElementById("calendario");
    const datasDisponiveis = ["2024-10-25", "2024-10-26", "2024-10-27"];
    
    datasDisponiveis.forEach(data => {
        const dataDiv = document.createElement("div");
        dataDiv.textContent = data;
        calendario.appendChild(dataDiv);
    });

    const formContato = document.getElementById("form-contato");
    formContato.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Mensagem enviada! Entraremos em contato em breve.");
        formContato.reset();
    });
});
