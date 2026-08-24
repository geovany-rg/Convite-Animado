// =========================================================
// CONVITE SOPHIA EMANUELY
// PARTE 1.2 — ENTRADA LEVE NO OCEANO
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

    // Impede cliques repetidos
    botaoEntrada.disabled = true;

    // Inicia a transição
    entrada.classList.add("mergulhando");

    // Aguarda a transição curta
    setTimeout(() => {

        entrada.style.display = "none";

        mundoOceano.style.display = "flex";

        mundoOceano.setAttribute(
            "aria-hidden",
            "false"
        );

        // Faz a próxima tela aparecer
        requestAnimationFrame(() => {

            mundoOceano.classList.add(
                "mundo-visivel"
            );

        });

    }, 850);

});
