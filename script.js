/* =========================================================
   CONVITE — JAVASCRIPT COMPLETO E INTEGRADO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const mundo = document.querySelector(".mundo-oceano");
    const botaoMergulhar = document.querySelector("#btn-mergulhar");
    const botaoPresentes = document.querySelector("#btn-presentes");
    const botaoBaixar = document.querySelector("#btn-baixar-convite");

    const surpresa = document.querySelector(".surpresa-mergulho, .surpresa-oceano");
    const presentes = document.querySelector(".presentes-oceano");
    const conviteFinal = document.querySelector(".convite-final-oceano, .parte-segredo");


    /* =====================================================
       ENTRADA NO OCEANO
       ===================================================== */

    function iniciarOceano() {

        if (!mundo) return;

        mundo.classList.add("oceano-ativo");
        document.body.classList.add("mergulho-ativo");

        iniciarParticulas();
        iniciarBolhasExtras();

    }


    if (botaoMergulhar) {

        botaoMergulhar.addEventListener("click", () => {

            iniciarOceano();

            setTimeout(() => {

                if (surpresa) {

                    surpresa.style.display = "block";
                    surpresa.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 300);

        });

    }


    /* =====================================================
       ROLAGEM — MERGULHO
       ===================================================== */

    let ultimaPosicao = window.scrollY;
    let rolando = false;

    window.addEventListener("scroll", () => {

        const posicaoAtual = window.scrollY;

        if (posicaoAtual > ultimaPosicao) {
            document.body.classList.add("descendo");
        } else {
            document.body.classList.remove("descendo");
        }

        ultimaPosicao = posicaoAtual;

        if (!rolando) {

            window.requestAnimationFrame(() => {
                atualizarMergulho();
                rolando = false;
            });

            rolando = true;

        }

    }, { passive: true });


    function atualizarMergulho() {

        const altura = document.documentElement.scrollHeight - window.innerHeight;

        if (altura <= 0) return;

        const progresso = window.scrollY / altura;

        document.documentElement.style.setProperty(
            "--progresso-mergulho",
            progresso
        );

        if (progresso > 0.15) {
            document.body.classList.add("mergulho-profundo");
        } else {
            document.body.classList.remove("mergulho-profundo");
        }

        if (progresso > 0.45) {
            document.body.classList.add("mergulho-intermediario");
        }

        if (progresso > 0.75) {
            document.body.classList.add("mergulho-final");
        }

    }


    /* =====================================================
       REVELAÇÃO DOS ELEMENTOS (SCROLL)
       ===================================================== */

    const elementosRevelar = document.querySelectorAll(
        ".revelar, .bloco-oceano, .item-presente, .surpresa-card, .decoracao-mergulho, .dado-festa, .presente-card"
    );


    if ("IntersectionObserver" in window) {

        const observador = new IntersectionObserver(

            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {
                        entrada.target.classList.add("visivel");
                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }

        );


        elementosRevelar.forEach((elemento) => {
            observador.observe(elemento);
        });

    } else {

        elementosRevelar.forEach((elemento) => {
            elemento.classList.add("visivel");
        });

    }


    /* =====================================================
       SEREIA — MOVIMENTO SUAVE
       ===================================================== */

    const sereia = document.querySelector(".sereia-personagem, .sereia-oceano");

    if (sereia) {

        let tempo = 0;

        function animarSereia() {

            tempo += 0.02;

            const movimentoY = Math.sin(tempo) * 8;
            const movimentoX = Math.cos(tempo * 0.7) * 4;

            sereia.style.transform = `translate3d(${movimentoX}px, ${movimentoY}px, 0)`;

            requestAnimationFrame(animarSereia);

        }

        animarSereia();

    }


    /* =====================================================
       PARTÍCULAS / BRILHOS
       ===================================================== */

    function iniciarParticulas() {

        let container = document.querySelector(".brilhos-oceano, .particulas-oceano");

        if (!container) {

            container = document.createElement("div");
            container.className = "brilhos-oceano";
            mundo?.appendChild(container);

        }


        const quantidade = window.innerWidth <= 600 ? 20 : 35;

        for (let i = 0; i < quantidade; i++) {

            const particula = document.createElement("span");

            particula.style.left = `${Math.random() * 100}%`;
            particula.style.top = `${Math.random() * 100}%`;
            particula.style.animationDelay = `${Math.random() * 8}s`;
            particula.style.animationDuration = `${5 + Math.random() * 8}s`;

            const tamanho = 2 + Math.random() * 4;

            particula.style.width = `${tamanho}px`;
            particula.style.height = `${tamanho}px`;

            container.appendChild(particula);

        }

    }


    /* =====================================================
       BOLHAS EXTRAS
       ===================================================== */

    function iniciarBolhasExtras() {

        let container = document.querySelector(".bolhas-oceano");

        if (!container) return;

        const bolhasExistentes = container.querySelectorAll("span").length;
        const quantidadeTotal = 30;

        for (let i = bolhasExistentes; i < quantidadeTotal; i++) {

            const bolha = document.createElement("span");

            bolha.style.left = `${Math.random() * 100}%`;

            const tamanho = 4 + Math.random() * 12;

            bolha.style.width = `${tamanho}px`;
            bolha.style.height = `${tamanho}px`;
            bolha.style.animationDuration = `${7 + Math.random() * 10}s`;
            bolha.style.animationDelay = `${Math.random() * 10}s`;

            container.appendChild(bolha);

        }

    }


    /* =====================================================
       BOTÃO — MERGULHE MAIS FUNDO
       ===================================================== */

    const botoesMergulho = document.querySelectorAll("[data-mergulhar], .botao-mergulhar");

    botoesMergulho.forEach((botao) => {

        botao.addEventListener("click", () => {

            const seletorDestino = botao.dataset.mergulhar || ".surpresa-mergulho";
            const destino = document.querySelector(seletorDestino);

            if (!destino) return;

            destino.style.display = "block";
            destino.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });


    /* =====================================================
       BOTÃO — PRESENTES
       ===================================================== */

    if (botaoPresentes) {

        botaoPresentes.addEventListener("click", () => {

            if (!presentes) return;

            presentes.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }


    /* =====================================================
       DOWNLOAD DO CONVITE
       ===================================================== */

    if (botaoBaixar) {

        botaoBaixar.addEventListener("click", (e) => {

            const arquivo = botaoBaixar.dataset.arquivo || botaoBaixar.getAttribute("href");

            if (arquivo && arquivo !== "#") {

                const link = document.createElement("a");
                link.href = arquivo;
                link.download = botaoBaixar.dataset.nome || "convite-sereia.png";

                document.body.appendChild(link);
                link.click();
                link.remove();

            } else {
                e.preventDefault();
                alert("O arquivo do convite estará disponível em breve para download!");
            }

        });

    }


    /* =====================================================
       ANIMAÇÃO E MOVIMENTO DOS PEIXES
       ===================================================== */

    const peixes = document.querySelectorAll(".peixe");

    peixes.forEach((peixe, index) => {

        peixe.style.animationDirection = "normal";
        peixe.style.animationIterationCount = "infinite";
        peixe.style.animationTimingFunction = "linear";

    });

    function ajustarPeixes() {

        peixes.forEach((peixe, index) => {

            const deslocamento = Math.sin((window.scrollY * 0.001) + index) * 3;
            peixe.style.transform = `translateY(${deslocamento}px)`;

        });

    }

    window.addEventListener("scroll", ajustarPeixes, { passive: true });


    /* =====================================================
       REDUÇÃO DE MOVIMENTO (ACESSIBILIDADE)
       ===================================================== */

    const prefereMovimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");

    function verificarMovimento() {

        if (prefereMovimentoReduzido.matches) {
            document.body.classList.add("movimento-reduzido");
        } else {
            document.body.classList.remove("movimento-reduzido");
        }

    }

    verificarMovimento();

    if (prefereMovimentoReduzido.addEventListener) {
        prefereMovimentoReduzido.addEventListener("change", verificarMovimento);
    }


    /* =====================================================
       EFEITO VISUAL AO CLICAR
       ===================================================== */

    document.addEventListener("click", (evento) => {

        const alvo = evento.target.closest("button, .botao-mergulhar, .botao-presente, a");

        if (!alvo) return;

        const brilho = document.createElement("span");
        brilho.style.position = "fixed";
        brilho.style.left = `${evento.clientX}px`;
        brilho.style.top = `${evento.clientY}px`;
        brilho.style.width = "15px";
        brilho.style.height = "15px";
        brilho.style.borderRadius = "50%";
        brilho.style.background = "rgba(185, 255, 255, 0.8)";
        brilho.style.boxShadow = "0 0 12px rgba(185, 255, 255, 1)";
        brilho.style.pointerEvents = "none";
        brilho.style.transform = "translate(-50%, -50%) scale(1)";
        brilho.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        brilho.style.zIndex = "9999";

        document.body.appendChild(brilho);

        setTimeout(() => {
            brilho.style.transform = "translate(-50%, -50%) scale(2.5)";
            brilho.style.opacity = "0";
        }, 10);

        setTimeout(() => {
            brilho.remove();
        }, 500);

    });


    /* =====================================================
       INICIALIZAÇÃO AUTOMÁTICA
       ===================================================== */

    iniciarOceano();
    atualizarMergulho();
    ajustarPeixes();

});
