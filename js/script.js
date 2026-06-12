const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = this.href;

        document
            .getElementById("portal-transition")
            .classList
            .add("active");
            const texto = document.getElementById("portal-text");

if(destino.includes("agro")) {
    texto.innerText = "Acesso ao Agro do Futuro";
}

else if(destino.includes("sustentabilidade")) {
    texto.innerText = "Acesso à Região da Sustentabilidade...";
}

else if(destino.includes("missal")) {
    texto.innerText = "Acesso à Missal...";
}

else if(destino.includes("tecnologia")) {
    texto.innerText = "Acesso ao Centro Tecnológico...";
}

else if(destino.includes("autor")) {
    texto.innerText = "Acesso ao Arquivo da Criadora...";
}

else if(destino.includes("conclusao")) {
    texto.innerText = "Acesso ao Núcleo Central de Gaia...";
}

        setTimeout(() => {

            window.location.href = destino;

        }, 1800);

    });

});
