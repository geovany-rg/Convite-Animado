// =========================================================
// CONVITE SOPHIA EMANUELY
// JAVASCRIPT — TELA 1
// =========================================================


// =========================================================
// ELEMENTOS
// =========================================================

const botaoEntrada = document.getElementById("botaoEntrada");
const entrada = document.getElementById("entrada");


// =========================================================
// ENTRAR NA AVENTURA
// =========================================================

if (botaoEntrada && entrada) {

    botaoEntrada.addEventListener("click", () => {

        // Impede vários cliques
        botaoEntrada.disabled = true;

        // Inicia a animação da tela
        entrada.classList.add("saindo");


        // Aguarda a animação terminar
        setTimeout(() => {

            /*
             * Por enquanto não vamos esconder
             * nem trocar de tela aqui.
             *
             * A próxima etapa será colocar
             * o OCEANO logo abaixo desta tela.
             */

            const proximaTela =
                document.getElementById("mundoOceano");


            // Se a próxima tela existir,
            // fazemos a rolagem até ela.
            if (proximaTela) {

                proximaTela.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }


            // Libera o botão novamente
            // caso precisemos voltar à tela.
            setTimeout(() => {

                botaoEntrada.disabled = false;

            }, 1000);


        }, 850);

    });

}
