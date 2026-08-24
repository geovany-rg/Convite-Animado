// =========================================================
// CONVITE SOPHIA EMANUELY
// PARTE 1.2 — ENTRADA NO FUNDO DO MAR
// =========================================================


// =========================================================
// ELEMENTOS
// =========================================================

const botaoEntrada = document.getElementById("botaoEntrada");
const entrada = document.getElementById("entrada");
const mundoOceano = document.getElementById("mundoOceano");


// =========================================================
// ENTRAR NA AVENTURA
// =========================================================

botaoEntrada.addEventListener("click", () => {

    // Evita que a pessoa clique várias vezes
    botaoEntrada.disabled = true;

    // Adiciona a animação de mergulho
    entrada.classList.add("mergulhando");

    // Aguarda a animação terminar
    setTimeout(() => {

        // Esconde a primeira tela
        entrada.style.display = "none";

        // Mostra o próximo mundo
        mundoOceano.style.display = "flex";
        mundoOceano.setAttribute("aria-hidden", "false");

        // Pequeno atraso para a animação aparecer corretamente
        setTimeout(() => {

            mundoOceano.classList.add("mundo-visivel");

        }, 50);

    }, 1800);

});
