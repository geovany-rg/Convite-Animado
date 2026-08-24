// =========================================================
// CONVITE SOPHIA EMANUELY
// JAVASCRIPT COMPLETO
// ENTRADA → MERGULHO → OCEANO → SCROLL
// =========================================================


// =========================================================
// ELEMENTOS PRINCIPAIS
// =========================================================

const botaoEntrada = document.getElementById("botaoEntrada");
const entrada = document.getElementById("entrada");
const mundoOceano = document.getElementById("mundoOceano");


// =========================================================
// VERIFICAÇÃO
// =========================================================

if (!botaoEntrada || !entrada || !mundoOceano) {

    console.warn(
        "Elementos principais do convite não foram encontrados."
    );

}


// =========================================================
// ENTRAR NA AVENTURA
// =========================================================

if (botaoEntrada) {

    botaoEntrada.addEventListener("click", () => {

        // Impede cliques repetidos
        botaoEntrada.disabled = true;

        // Adiciona estado visual de mergulho
        entrada.classList.add("mergulhando");

        // Pequeno atraso para a animação começar
        setTimeout(() => {

            // Mostra o oceano
            mundoOceano.style.display = "flex";

            mundoOceano.setAttribute(
                "aria-hidden",
                "false"
            );


            // Força o navegador a reconhecer
            // que o oceano foi exibido
            requestAnimationFrame(() => {

                mundoOceano.classList.add(
                    "mundo-visivel"
                );


                // Rola suavemente para o oceano
                setTimeout(() => {

                    mundoOceano.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

            });


            // Esconde a tela inicial depois
            // que o mergulho começou
            setTimeout(() => {

                entrada.style.display = "none";

            }, 700);

        }, 500);

    });

}


// =========================================================
// PEIXES
// =========================================================
//
// Os peixes são criados pelo JavaScript.
//
// IMPORTANTE:
// Todos começam do lado esquerdo
// e nadam para a DIREITA.
//
// 🐟 ➡️
// =========================================================

function criarPeixes() {

    const mundo = document.getElementById(
        "mundoOceano"
    );

    if (!mundo) {
        return;
    }


    // Evita criar peixes duplicados
    if (
        mundo.querySelector(
            ".peixes-oceano"
        )
    ) {

        return;

    }


    const container = document.createElement(
        "div"
    );

    container.className =
        "peixes-oceano";

    container.setAttribute(
        "aria-hidden",
        "true"
    );


    // Quantidade de peixes
    const quantidadePeixes = 7;


    for (
        let i = 1;
        i <= quantidadePeixes;
        i++
    ) {

        const peixe = document.createElement(
            "span"
        );

        peixe.className =
            `peixe peixe-${i}`;


        // Emoji de peixe
        peixe.textContent = "🐟";


        // IMPORTANTE:
        // scaleX(1) mantém o peixe
        // olhando para a DIREITA.
        peixe.style.transform =
            "scaleX(1)";


        container.appendChild(
            peixe
        );

    }


    mundo.appendChild(
        container
    );

}


// =========================================================
// CRIA OS PEIXES
// =========================================================

criarPeixes();


// =========================================================
// INTERAÇÃO COM SCROLL
// =========================================================
//
// Quando o usuário começa a descer,
// pequenas animações podem ser ativadas.
// =========================================================

let ultimoScroll = 0;

window.addEventListener(
    "scroll",
    () => {

        const scrollAtual =
            window.scrollY;


        // Se começou a descer
        if (
            scrollAtual >
            ultimoScroll
        ) {

            document.body.classList.add(
                "descendo-oceano"
            );

        }


        // Atualiza posição
        ultimoScroll =
            scrollAtual;

    },
    {
        passive: true
    }
);


// =========================================================
// OBSERVADOR DO OCEANO
// =========================================================
//
// Detecta quando a segunda parte
// realmente entrou na tela.
// =========================================================

const observadorOceano =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach(
                (item) => {

                    if (
                        item.isIntersecting
                    ) {

                        mundoOceano.classList.add(
                            "oceano-ativo"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.2
        }
    );


if (mundoOceano) {

    observadorOceano.observe(
        mundoOceano
    );

}


// =========================================================
// ANIMAÇÃO EXTRA DOS PEIXES
// =========================================================
//
// Depois que os peixes existem,
// adicionamos pequenas variações
// aleatórias de atraso.
// =========================================================

function animarPeixes() {

    const peixes =
        document.querySelectorAll(
            ".peixe"
        );


    peixes.forEach(
        (peixe, indice) => {

            peixe.style.animationDelay =
                `${indice * 1.4}s`;

        }
    );

}


// =========================================================
// EXECUTA ANIMAÇÃO DOS PEIXES
// =========================================================

animarPeixes();


// =========================================================
// ACESSIBILIDADE
// =========================================================
//
// Permite entrar usando Enter ou espaço
// quando o botão estiver selecionado.
// =========================================================

if (botaoEntrada) {

    botaoEntrada.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {

                evento.preventDefault();

                botaoEntrada.click();

            }

        }
    );

}


// =========================================================
// FINAL
// =========================================================
//
// Parte 1:
//      Tela de entrada
//
// Clique:
//      Mergulho
//
// Parte 2:
//      Oceano encantado
//
// Peixes:
//      🐟 ➡️
//
// Próximo:
//      Parte 3
//      Segredo
//      Local
//      Data
//      Horário
//      Baú
//      Carta
//      Concha final
//
// =========================================================

console.log(
    "🌊 Convite da Sophia carregado!"
);

console.log(
    "🐟 Peixes configurados para nadar para a DIREITA."
);
