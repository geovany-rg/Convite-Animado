/* =========================================================
   CONVITE SEREIA — INTERAÇÃO PARTE 1
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const botaoMergulhar = document.querySelector("#btn-mergulhar");
    const secaoHero = document.querySelector("#hero");
    const mundo = document.querySelector(".mundo-oceano");

    if (botaoMergulhar) {
        botaoMergulhar.addEventListener("click", () => {
            
            // 1. Aplica o efeito visual do mergulho
            document.body.classList.add("mergulho-ativo");

            // 2. Transição suave de rolagem/revelação após 500ms
            setTimeout(() => {
                if (secaoHero) {
                    secaoHero.style.display = "flex";
                    secaoHero.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 500);

            // 3. Remove a classe de animação temporária
            setTimeout(() => {
                document.body.classList.remove("mergulho-ativo");
            }, 1300);
        });
    }

    // Gerador dinâmico de bolhas de fundo
    criarBolhasSubmarinas();
});

function criarBolhasSubmarinas() {
    const containerBolhas = document.querySelector(".bolhas-oceano");
    if (!containerBolhas) return;

    const quantidadeBolhas = 15;

    for (let i = 0; i < quantidadeBolhas; i++) {
        const bolha = document.createElement("div");
        bolha.className = "bolha-elemento";
        
        // Posicionamento aleatório
        const tamanho = Math.random() * 12 + 6; // 6px a 18px
        bolha.style.width = `${tamanho}px`;
        bolha.style.height = `${tamanho}px`;
        bolha.style.left = `${Math.random() * 100}%`;
        bolha.style.animationDuration = `${Math.random() * 6 + 4}s`; // 4s a 10s
        bolha.style.animationDelay = `${Math.random() * 3}s`;

        containerBolhas.appendChild(bolha);
    }
}
