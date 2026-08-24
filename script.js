/* =========================================================
   CONVITE — JAVASCRIPT COMPLETO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const mundo = document.querySelector(".mundo-oceano");
    const botaoMergulhar = document.querySelector("#btn-mergulhar");
    const botaoPresentes = document.querySelector("#btn-presentes");
    const botaoBaixar = document.querySelector("#btn-baixar-convite");

    const surpresa = document.querySelector(".surpresa-oceano");
    const presentes = document.querySelector(".presentes-oceano");
    const conviteFinal = document.querySelector(".convite-final-oceano");


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

                    surpresa.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 500);

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

    });


    function atualizarMergulho() {

        const altura =
            document.documentElement.scrollHeight -
            window.innerHeight;

        if (altura <= 0) return;

        const progresso =
            window.scrollY / altura;

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
       REVELAÇÃO DOS ELEMENTOS
       ===================================================== */

    const elementosRevelar = document.querySelectorAll(
        ".revelar, .bloco-oceano, .item-presente, .surpresa-card, .decoracao-mergulho"
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

    const sereia = document.querySelector(".sereia-oceano");

    if (sereia) {

        let tempo = 0;

        function animarSereia() {

            tempo += 0.018;

            const movimentoY =
                Math.sin(tempo) * 7;

            const movimentoX =
                Math.cos(tempo * 0.7) * 3;

            sereia.style.setProperty(
                "--sereia-y",
                `${movimentoY}px`
            );

            sereia.style.setProperty(
                "--sereia-x",
                `${movimentoX}px`
            );

            requestAnimationFrame(animarSereia);

        }

        animarSereia();

    }


    /* =====================================================
       PARTÍCULAS / BRILHOS
       ===================================================== */

    function iniciarParticulas() {

        let container =
            document.querySelector(".particulas-oceano");

        if (!container) {

            container =
                document.createElement("div");

            container.className =
                "particulas-oceano";

            mundo?.appendChild(container);

        }


        const quantidade =
            window.innerWidth <= 600
                ? 22
                : 38;


        for (let i = 0; i < quantidade; i++) {

            const particula =
                document.createElement("span");

            particula.className =
                "particula-oceano";

            particula.style.left =
                `${Math.random() * 100}%`;

            particula.style.top =
                `${Math.random() * 200}%`;

            particula.style.animationDelay =
                `${Math.random() * 8}s`;

            particula.style.animationDuration =
                `${5 + Math.random() * 8}s`;

            const tamanho =
                2 + Math.random() * 4;

            particula.style.width =
                `${tamanho}px`;

            particula.style.height =
                `${tamanho}px`;

            container.appendChild(particula);

        }

    }


    /* =====================================================
       BOLHAS EXTRAS
       ===================================================== */

    function iniciarBolhasExtras() {

        let container =
            document.querySelector(".bolhas-oceano");

        if (!container) return;


        const bolhasExistentes =
            container.querySelectorAll("span").length;


        const quantidadeTotal = 35;


        for (
            let i = bolhasExistentes;
            i < quantidadeTotal;
            i++
        ) {

            const bolha =
                document.createElement("span");

            bolha.style.left =
                `${Math.random() * 100}%`;

            const tamanho =
                4 + Math.random() * 14;

            bolha.style.width =
                `${tamanho}px`;

            bolha.style.height =
                `${tamanho}px`;

            bolha.style.animationDuration =
                `${7 + Math.random() * 12}s`;

            bolha.style.animationDelay =
                `${Math.random() * 12}s`;

            container.appendChild(bolha);

        }

    }


    /* =====================================================
       BOTÃO — MERGULHE MAIS FUNDO
       ===================================================== */

    const botoesMergulho =
        document.querySelectorAll(
            "[data-mergulhar], .btn-mergulhar"
        );


    botoesMergulho.forEach((botao) => {

        botao.addEventListener("click", () => {

            const destino =
                document.querySelector(
                    botao.dataset.mergulhar ||
                    ".surpresa-oceano"
                );

            if (!destino) return;

            destino.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            destino.classList.add(
                "surpresa-revelada"
            );

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
       LINKS DOS PRESENTES
       ===================================================== */

    const linksPresentes =
        document.querySelectorAll(
            ".presente-link, [data-presente-link]"
        );


    linksPresentes.forEach((link) => {

        link.addEventListener("click", (evento) => {

            const url =
                link.dataset.presenteLink ||
                link.getAttribute("href");

            if (
                !url ||
                url === "#" ||
                url === "javascript:void(0)"
            ) {

                evento.preventDefault();

                return;

            }

        });

    });


    /* =====================================================
       CONVITE FINAL
       ===================================================== */

    const botaoConviteFinal =
        document.querySelector(
            ".btn-convite-final"
        );


    if (botaoConviteFinal && conviteFinal) {

        botaoConviteFinal.addEventListener(
            "click",
            () => {

                conviteFinal.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =====================================================
       DOWNLOAD DO CONVITE
       ===================================================== */

    if (botaoBaixar) {

        botaoBaixar.addEventListener("click", () => {

            const arquivo =
                botaoBaixar.dataset.arquivo ||
                botaoBaixar.getAttribute("href");

            if (
                arquivo &&
                arquivo !== "#"
            ) {

                const link =
                    document.createElement("a");

                link.href = arquivo;

                link.download =
                    botaoBaixar.dataset.nome ||
                    "convite-sereia.png";

                document.body.appendChild(link);

                link.click();

                link.remove();

                return;

            }


            const imagem =
                document.querySelector(
                    "#imagem-convite, .imagem-convite-final"
                );


            if (
                imagem &&
                imagem.src
            ) {

                const link =
                    document.createElement("a");

                link.href =
                    imagem.src;

                link.download =
                    "convite-sereia.png";

                document.body.appendChild(link);

                link.click();

                link.remove();

            }

        });

    }


    /* =====================================================
       ANIMAÇÃO DOS PEIXES
       ===================================================== */

    const peixes =
        document.querySelectorAll(
            ".peixe"
        );


    peixes.forEach((peixe, index) => {

        /*
         * TODOS OS PEIXES:
         * ESQUERDA → DIREITA
         *
         * Não usamos scaleX(-1).
         * Não usamos alternate.
         * Não usamos reverse.
         */

        peixe.style.animationDirection =
            "normal";

        peixe.style.animationIterationCount =
            "infinite";

        peixe.style.animationTimingFunction =
            "linear";

        peixe.style.setProperty(
            "--peixe-index",
            index
        );

    });


    /* =====================================================
       MOVIMENTO SUAVE DOS PEIXES
       ===================================================== */

    function ajustarPeixes() {

        peixes.forEach((peixe, index) => {

            const deslocamento =
                Math.sin(
                    (window.scrollY * 0.001) +
                    index
                ) * 3;

            peixe.style.setProperty(
                "--movimento-peixe",
                `${deslocamento}px`
            );

        });

    }


    window.addEventListener(
        "scroll",
        ajustarPeixes,
        { passive: true }
    );


    /* =====================================================
       REDUÇÃO DE MOVIMENTO
       ===================================================== */

    const prefereMovimentoReduzido =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function verificarMovimento() {

        if (prefereMovimentoReduzido.matches) {

            document.body.classList.add(
                "movimento-reduzido"
            );

        } else {

            document.body.classList.remove(
                "movimento-reduzido"
            );

        }

    }


    verificarMovimento();


    if (
        prefereMovimentoReduzido.addEventListener
    ) {

        prefereMovimentoReduzido.addEventListener(
            "change",
            verificarMovimento
        );

    }


    /* =====================================================
       DATA / HORA AUTOMÁTICA
       ===================================================== */

    const elementosData =
        document.querySelectorAll(
            "[data-data-atual]"
        );


    elementosData.forEach((elemento) => {

        const agora =
            new Date();

        elemento.textContent =
            agora.toLocaleDateString(
                "pt-BR"
            );

    });


    /* =====================================================
       EFEITO DE CLIQUE / BRILHO
       ===================================================== */

    document.addEventListener(
        "click",
        (evento) => {

            const alvo =
                evento.target.closest(
                    "button, .botao-oceano, .presente-link"
                );

            if (!alvo) return;


            const brilho =
                document.createElement("span");

            brilho.className =
                "efeito-clique-oceano";

            brilho.style.left =
                `${evento.clientX}px`;

            brilho.style.top =
                `${evento.clientY}px`;

            document.body.appendChild(
                brilho
            );


            setTimeout(() => {

                brilho.remove();

            }, 700);

        }
    );


    /* =====================================================
       INICIALIZAÇÃO
       ===================================================== */

    iniciarOceano();

    atualizarMergulho();

    ajustarPeixes();

});
