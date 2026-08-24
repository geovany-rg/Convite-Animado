/* =========================================================
   O OCEANO COR-DE-ROSA DA SOPHIA
   SCRIPT.JS
========================================================= */

"use strict";


/* =========================================================
   CONFIGURAÇÕES DA FESTA
========================================================= */

const CONFIG = {

    nome: "Sophia Emanuely",

    idade: "4 anos",

    titulo: "O Oceano Cor-de-Rosa da Sophia",

    data: "28 de novembro de 2026",

    horario: "13:00",

    local:
        "Local com piscina — Uso infantil liberado com acompanhamento de responsável",

    link:
        "https://maps.app.goo.gl/SGfxecVLVifhaA4a7",

    assinatura:
        "Com carinho, Sophia 💕"

};


/* =========================================================
   ELEMENTOS
========================================================= */

const entrada =
    document.getElementById("entrada");

const mergulho =
    document.getElementById("mergulho");

const oceano =
    document.getElementById("oceano");

const bauTesouro =
    document.getElementById("bau-tesouro");

const presentes =
    document.getElementById("presentes");

const conchaConvite =
    document.getElementById("concha-convite");

const modalCarta =
    document.getElementById("modal-carta");

const modalDownload =
    document.getElementById("modal-download");

const fecharCarta =
    document.getElementById("fechar-carta");

const fecharDownload =
    document.getElementById("fechar-download");

const cartaModalConteudo =
    document.getElementById("carta-modal-conteudo");

const downloadConvite =
    document.getElementById("download-convite");

const mensagemDownload =
    document.getElementById("mensagem-download");


/* =========================================================
   ESTADO
========================================================= */

let bauAberto = false;

let conviteGerado = false;


/* =========================================================
   FUNÇÕES UTILITÁRIAS
========================================================= */

function irPara(secao) {

    if (!secao) {
        return;
    }

    secao.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function esperar(tempo) {

    return new Promise(
        resolve => setTimeout(
            resolve,
            tempo
        )
    );

}


/* =========================================================
   INICIALIZAÇÃO DOS DADOS
========================================================= */

function carregarDadosDaFesta() {

    const campos =
        document.querySelectorAll(
            "[data-convite]"
        );

    campos.forEach(campo => {

        const tipo =
            campo.dataset.convite;

        if (
            Object.prototype.hasOwnProperty.call(
                CONFIG,
                tipo
            )
        ) {

            campo.textContent =
                CONFIG[tipo];

        }

    });

}


/* =========================================================
   REMOVER TRANSIÇÃO DE MERGULHO
========================================================= */

/*
    O botão antigo "Mergulhar" não será mais utilizado
    para controlar a navegação.

    O usuário pode simplesmente rolar a página.

    Isso evita travamentos e problemas em celulares
    mais simples.
*/

function desativarMergulho() {

    const botao =
        document.getElementById(
            "btn-mergulhar"
        );

    if (!botao) {
        return;
    }

    botao.disabled = true;

    botao.style.display = "none";

}


/* =========================================================
   CARTA DA SOPHIA
========================================================= */

function criarCartaModal() {

    if (!cartaModalConteudo) {
        return;
    }


    cartaModalConteudo.innerHTML = `

        <div class="carta carta-modal-interna">

            <div class="carta-decoracao">
                🐚
            </div>

            <div class="carta-conteudo">

                <p class="carta-pequeno-titulo">
                    💕 Uma mensagem especial
                </p>

                <h2>
                    Uma mensagem de Sophia
                </h2>

                <div class="linha-decorativa">
                    🌊 ✨ 🌊
                </div>


                <div class="texto-carta">

                    <p>
                        Existe um tesouro esperando
                        para ser encontrado...
                    </p>

                    <p>
                        Talvez o verdadeiro tesouro
                        seja descobrir onde essa
                        aventura vai nos levar.
                    </p>

                    <p>
                        Procure no lugar indicado
                        e siga as pistas.
                    </p>

                </div>


                <div class="dados-festa">


                    <!-- LOCAL -->

                    <div class="dado-festa">

                        <span class="icone-dado">
                            📍
                        </span>

                        <div>

                            <strong>
                                LOCAL
                            </strong>

                            <span>
                                ${CONFIG.local}
                            </span>

                            <a
                                href="${CONFIG.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver localização
                            </a>

                        </div>

                    </div>


                    <!-- DATA -->

                    <div class="dado-festa">

                        <span class="icone-dado">
                            📅
                        </span>

                        <div>

                            <strong>
                                DATA
                            </strong>

                            <span>
                                ${CONFIG.data}
                            </span>

                        </div>

                    </div>


                    <!-- HORÁRIO -->

                    <div class="dado-festa">

                        <span class="icone-dado">
                            🕐
                        </span>

                        <div>

                            <strong>
                                HORÁRIO
                            </strong>

                            <span>
                                ${CONFIG.horario}
                            </span>

                        </div>

                    </div>


                    <!-- MAPA -->

                    <div class="dado-festa">

                        <span class="icone-dado">
                            🔗
                        </span>

                        <div>

                            <strong>
                                MAPA
                            </strong>

                            <a
                                href="${CONFIG.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Abrir localização
                            </a>

                        </div>

                    </div>

                </div>


                <div class="assinatura">

                    <p>
                        Com carinho,
                    </p>

                    <strong>
                        Sophia 💕
                    </strong>

                </div>

            </div>

        </div>

    `;

}


/* =========================================================
   ABRIR CARTA
========================================================= */

function abrirCarta() {

    criarCartaModal();


    if (!modalCarta) {
        return;
    }


    modalCarta.classList.add(
        "ativo"
    );


    modalCarta.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
        Impede apenas a rolagem do fundo enquanto
        a carta está aberta.
    */

    document.body.classList.add(
        "modal-aberto"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   FECHAR CARTA
========================================================= */

function fecharCartaModal() {

    if (!modalCarta) {
        return;
    }


    modalCarta.classList.remove(
        "ativo"
    );


    modalCarta.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-aberto"
    );


    document.body.style.overflow =
        "";


    /*
        NÃO manda automaticamente para outra seção.

        O usuário pode continuar exatamente de onde estava.
    */

}


/* =========================================================
   BAÚ
========================================================= */

async function abrirBau() {

    if (!bauTesouro) {
        return;
    }


    /*
        Se já abriu anteriormente,
        apenas mostra a carta novamente.
    */

    if (bauAberto) {

        abrirCarta();

        return;

    }


    bauAberto = true;


    /*
        Animação do baú.
    */

    bauTesouro.classList.add(
        "bau-aberto"
    );


    const fechadura =
        bauTesouro.querySelector(
            ".bau-fechadura"
        );


    if (fechadura) {

        fechadura.textContent =
            "✨";

    }


    /*
        Espera a animação terminar.
    */

    await esperar(750);


    /*
        SOMENTE AGORA a carta aparece.

        Ela não aparece por rolagem.
    */

    abrirCarta();

}


/* =========================================================
   MODAL DE DOWNLOAD
========================================================= */

function abrirModalDownload() {

    if (!modalDownload) {
        return;
    }


    modalDownload.classList.add(
        "ativo"
    );


    modalDownload.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-aberto"
    );


    document.body.style.overflow =
        "hidden";

}


function fecharModalDownload() {

    if (!modalDownload) {
        return;
    }


    modalDownload.classList.remove(
        "ativo"
    );


    modalDownload.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-aberto"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   PREPARAR CONVITE
========================================================= */

async function prepararConvite() {

    if (!conchaConvite) {
        return;
    }


    if (conviteGerado) {

        abrirModalDownload();

        return;

    }


    conviteGerado = true;


    if (mensagemDownload) {

        mensagemDownload.classList.add(
            "ativo"
        );


        const texto =
            mensagemDownload.querySelector(
                "p"
            );


        if (texto) {

            texto.textContent =
                "Preparando seu convite...";

        }

    }


    conchaConvite.classList.add(
        "concha-processando"
    );


    await esperar(700);


    const canvas =
        criarImagemConvite();


    if (!canvas) {

        conviteGerado = false;

        conchaConvite.classList.remove(
            "concha-processando"
        );

        if (mensagemDownload) {

            mensagemDownload.classList.remove(
                "ativo"
            );

        }

        return;

    }


    window.__conviteCanvas =
        canvas;


    if (mensagemDownload) {

        const texto =
            mensagemDownload.querySelector(
                "p"
            );


        if (texto) {

            texto.textContent =
                "Convite preparado! 💕";

        }

    }


    conchaConvite.classList.remove(
        "concha-processando"
    );


    await esperar(400);


    abrirModalDownload();

}


/* =========================================================
   GERAÇÃO DA IMAGEM
========================================================= */

function criarImagemConvite() {

    const largura = 1080;

    const altura = 1350;


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.width =
        largura;

    canvas.height =
        altura;


    const ctx =
        canvas.getContext(
            "2d"
        );


    if (!ctx) {
        return null;
    }


    /* =====================================================
       FUNDO EM DEGRADÊ SUAVE
    ====================================================== */

    const gradiente =
        ctx.createLinearGradient(
            0,
            0,
            0,
            altura
        );


    gradiente.addColorStop(
        0,
        "#b9f4f8"
    );

    gradiente.addColorStop(
        0.20,
        "#75dce9"
    );

    gradiente.addColorStop(
        0.48,
        "#35bdd7"
    );

    gradiente.addColorStop(
        0.72,
        "#168eb5"
    );

    gradiente.addColorStop(
        1,
        "#07547f"
    );


    ctx.fillStyle =
        gradiente;


    ctx.fillRect(
        0,
        0,
        largura,
        altura
    );


    /* =====================================================
       LUZ DO OCEANO
    ====================================================== */

    const luz =
        ctx.createRadialGradient(
            largura / 2,
            130,
            20,
            largura / 2,
            130,
            650
        );


    luz.addColorStop(
        0,
        "rgba(255,255,255,0.58)"
    );


    luz.addColorStop(
        0.35,
        "rgba(255,255,255,0.20)"
    );


    luz.addColorStop(
        1,
        "rgba(255,255,255,0)"
    );


    ctx.fillStyle =
        luz;


    ctx.fillRect(
        0,
        0,
        largura,
        720
    );


    /* =====================================================
       RAIOS DE LUZ
    ====================================================== */

    ctx.save();


    ctx.globalAlpha =
        0.12;


    ctx.fillStyle =
        "#ffffff";


    ctx.beginPath();

    ctx.moveTo(120, 0);
    ctx.lineTo(330, 0);
    ctx.lineTo(560, 700);
    ctx.lineTo(390, 700);

    ctx.closePath();

    ctx.fill();


    ctx.beginPath();

    ctx.moveTo(650, 0);
    ctx.lineTo(820, 0);
    ctx.lineTo(700, 700);
    ctx.lineTo(540, 700);

    ctx.closePath();

    ctx.fill();


    ctx.restore();


    /* =====================================================
       BOLHAS
    ====================================================== */

    const bolhas = [

        [100, 190, 18],
        [950, 230, 25],
        [170, 520, 13],
        [900, 650, 19],
        [100, 900, 22],
        [970, 1050, 14],
        [760, 370, 11],
        [310, 760, 16]

    ];


    bolhas.forEach(
        bolha => {

            desenharBolha(
                ctx,
                bolha[0],
                bolha[1],
                bolha[2]
            );

        }
    );


    /* =====================================================
       PEIXES
    ====================================================== */

    /*
        Os peixes foram espelhados para apontarem
        para a direita.
    */

    desenharEmojiEspelhado(
        ctx,
        "🐟",
        100,
        390,
        60
    );


    desenharEmojiEspelhado(
        ctx,
        "🐠",
        900,
        470,
        65
    );


    desenharEmojiEspelhado(
        ctx,
        "🐟",
        150,
        850,
        55
    );


    desenharEmojiEspelhado(
        ctx,
        "🐠",
        870,
        930,
        55
    );


    /* =====================================================
       TÍTULO
    ====================================================== */

    ctx.textAlign =
        "center";


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 48px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "O Oceano",
        largura / 2,
        150
    );


    ctx.fillStyle =
        "#ff69b4";


    ctx.font =
        "bold 64px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "Cor-de-Rosa",
        largura / 2,
        225
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 46px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "da Sophia",
        largura / 2,
        290
    );


    /* =====================================================
       SEREIA
    ====================================================== */

    desenharEmoji(
        ctx,
        "🧜‍♀️",
        540,
        405,
        120
    );


    /* =====================================================
       GOLFINHO
    ====================================================== */

    desenharEmoji(
        ctx,
        "🐬",
        540,
        545,
        95
    );


    /* =====================================================
       NOME DA SOPHIA
    ====================================================== */

    ctx.fillStyle =
        "#ff9dcc";


    ctx.font =
        "bold 56px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.nome,
        largura / 2,
        665
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 30px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.idade,
        largura / 2,
        710
    );


    /* =====================================================
       CARD DE INFORMAÇÕES
    ====================================================== */

    const cardX = 75;

    const cardY = 755;

    const cardW = 930;

    const cardH = 370;


    desenharRetanguloArredondado(
        ctx,
        cardX,
        cardY,
        cardW,
        cardH,
        38,
        "rgba(255,255,255,0.17)"
    );


    ctx.strokeStyle =
        "rgba(255,255,255,0.42)";


    ctx.lineWidth =
        2;


    ctx.stroke();


    ctx.textAlign =
        "left";


    /* DATA */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 25px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📅 DATA",
        cardX + 40,
        cardY + 55
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "25px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.data,
        cardX + 40,
        cardY + 93
    );


    /* HORÁRIO */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 25px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "🕐 HORÁRIO",
        cardX + 40,
        cardY + 145
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "25px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.horario,
        cardX + 40,
        cardY + 183
    );


    /* LOCAL */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 25px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📍 LOCAL",
        cardX + 40,
        cardY + 235
    );


    /*
        O texto do local é muito comprido.
        Será quebrado automaticamente.
    */

    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "22px Trebuchet MS, Arial, sans-serif";


    const linhasLocal =
        quebrarTexto(
            ctx,
            CONFIG.local,
            820
        );


    linhasLocal
        .slice(0, 2)
        .forEach(
            (linha, index) => {

                ctx.fillText(
                    linha,
                    cardX + 40,
                    cardY +
                    273 +
                    index * 32
                );

            }
        );


    /* =====================================================
       LINK
    ====================================================== */

    ctx.textAlign =
        "center";


    ctx.fillStyle =
        "#ffe8f4";


    ctx.font =
        "bold 21px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📍 Localização:",
        largura / 2,
        1170
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "18px Trebuchet MS, Arial, sans-serif";


    const partes =
        quebrarTexto(
            ctx,
            CONFIG.link,
            850
        );


    partes.forEach(
        (parte, index) => {

            ctx.fillText(
                parte,
                largura / 2,
                1205 +
                index * 26
            );

        }
    );


    /* =====================================================
       ASSINATURA
    ====================================================== */

    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "italic 30px Georgia, serif";


    ctx.fillText(
        CONFIG.assinatura,
        largura / 2,
        1290
    );


    return canvas;

}


/* =========================================================
   BOLHAS
========================================================= */

function desenharBolha(
    ctx,
    x,
    y,
    tamanho
) {

    ctx.save();


    ctx.beginPath();


    ctx.arc(
        x,
        y,
        tamanho,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        "rgba(255,255,255,0.12)";


    ctx.fill();


    ctx.strokeStyle =
        "rgba(255,255,255,0.65)";


    ctx.lineWidth =
        3;


    ctx.stroke();


    /*
        Pequeno brilho dentro da bolha.
    */

    ctx.beginPath();


    ctx.arc(
        x - tamanho * 0.3,
        y - tamanho * 0.3,
        tamanho * 0.18,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        "rgba(255,255,255,0.75)";


    ctx.fill();


    ctx.restore();

}


/* =========================================================
   EMOJI
========================================================= */

function desenharEmoji(
    ctx,
    emoji,
    x,
    y,
    tamanho
) {

    ctx.save();


    ctx.textAlign =
        "center";


    ctx.textBaseline =
        "middle";


    ctx.font =
        `${tamanho}px Arial`;


    ctx.fillText(
        emoji,
        x,
        y
    );


    ctx.restore();

}


/* =========================================================
   EMOJI ESPELHADO
========================================================= */

function desenharEmojiEspelhado(
    ctx,
    emoji,
    x,
    y,
    tamanho
) {

    ctx.save();


    ctx.translate(
        x,
        y
    );


    /*
        Espelha horizontalmente o emoji.
    */

    ctx.scale(
        -1,
        1
    );


    ctx.textAlign =
        "center";


    ctx.textBaseline =
        "middle";


    ctx.font =
        `${tamanho}px Arial`;


    ctx.fillText(
        emoji,
        0,
        0
    );


    ctx.restore();

}


/* =========================================================
   RETÂNGULO ARREDONDADO
========================================================= */

function desenharRetanguloArredondado(
    ctx,
    x,
    y,
    largura,
    altura,
    raio,
    preenchimento
) {

    ctx.beginPath();


    ctx.moveTo(
        x + raio,
        y
    );


    ctx.lineTo(
        x + largura - raio,
        y
    );


    ctx.quadraticCurveTo(
        x + largura,
        y,
        x + largura,
        y + raio
    );


    ctx.lineTo(
        x + largura,
        y + altura - raio
    );


    ctx.quadraticCurveTo(
        x + largura,
        y + altura,
        x + largura - raio,
        y + altura
    );


    ctx.lineTo(
        x + raio,
        y + altura
    );


    ctx.quadraticCurveTo(
        x,
        y + altura,
        x,
        y + altura - raio
    );


    ctx.lineTo(
        x,
        y + raio
    );


    ctx.quadraticCurveTo(
        x,
        y,
        x + raio,
        y
    );


    ctx.closePath();


    ctx.fillStyle =
        preenchimento;


    ctx.fill();

}


/* =========================================================
   QUEBRAR TEXTO
========================================================= */

function quebrarTexto(
    ctx,
    texto,
    larguraMaxima
) {

    const palavras =
        texto.split(" ");


    const linhas = [];


    let linhaAtual =
        "";


    palavras.forEach(
        palavra => {

            const teste =
                linhaAtual
                    ? `${linhaAtual} ${palavra}`
                    : palavra;


            const medida =
                ctx.measureText(
                    teste
                ).width;


            if (
                medida >
                larguraMaxima
            ) {

                if (linhaAtual) {

                    linhas.push(
                        linhaAtual
                    );

                }


                linhaAtual =
                    palavra;

            } else {

                linhaAtual =
                    teste;

            }

        }
    );


    if (linhaAtual) {

        linhas.push(
            linhaAtual
        );

    }


    return linhas;

}


/* =========================================================
   DOWNLOAD
========================================================= */

function baixarConvite() {

    const canvas =
        window.__conviteCanvas;


    if (!canvas) {

        alert(
            "O convite ainda está sendo preparado. Tente novamente."
        );

        return;

    }


    canvas.toBlob(
        blob => {

            if (!blob) {

                alert(
                    "Não foi possível gerar o convite."
                );

                return;

            }


            const url =
                URL.createObjectURL(
                    blob
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href =
                url;


            link.download =
                "convite-sophia-emanuely.png";


            document.body.appendChild(
                link
            );


            link.click();


            link.remove();


            setTimeout(
                () => {

                    URL.revokeObjectURL(
                        url
                    );

                },
                1000
            );


            if (mensagemDownload) {

                const texto =
                    mensagemDownload.querySelector(
                        "p"
                    );


                if (texto) {

                    texto.textContent =
                        "Convite baixado com sucesso! 💕";

                }

            }

        },
        "image/png"
    );

}


/* =========================================================
   LINKS DE PRESENTES
========================================================= */

function configurarPresentes() {

    const links =
        document.querySelectorAll(
            ".botao-presente"
        );


    links.forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    console.log(
                        "Abrindo sugestão de presente:",
                        link.textContent.trim()
                    );

                }
            );

        }
    );

}


/* =========================================================
   ANIMAÇÕES
========================================================= */

function prepararAnimacoes() {

    const estilo =
        document.createElement(
            "style"
        );


    estilo.textContent = `

        .bau-aberto {
            animation:
                bauAbrindo 0.8s
                ease both !important;
        }


        @keyframes bauAbrindo {

            0% {
                transform:
                    scale(1)
                    rotate(0);
            }

            30% {
                transform:
                    scale(1.08)
                    rotate(-3deg);
            }

            60% {
                transform:
                    scale(1.12)
                    rotate(3deg);
            }

            100% {
                transform:
                    scale(1)
                    rotate(0);
            }

        }


        .concha-processando {

            animation:
                conchaProcessando
                0.7s
                ease-in-out
                infinite alternate !important;

        }


        @keyframes conchaProcessando {

            from {

                transform:
                    scale(0.95)
                    rotate(-5deg);

            }

            to {

                transform:
                    scale(1.08)
                    rotate(5deg);

            }

        }


        body.modal-aberto {
            overflow: hidden;
        }

    `;


    document.head.appendChild(
        estilo
    );

}


/* =========================================================
   ELEMENTOS VISÍVEIS
========================================================= */

function observarElementos() {

    const elementos =
        document.querySelectorAll(
            ".presente-card, " +
            ".carta, " +
            ".concha, " +
            ".coral-profundo, " +
            ".peixe-profundo"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elementos.forEach(
            elemento => {

                elemento.classList.add(
                    "visivel"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visivel"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    elementos.forEach(
        elemento => {

            observer.observe(
                elemento
            );

        }
    );

}


/* =========================================================
   OBSERVAR SEÇÕES
========================================================= */

function observarSecoes() {

    const secoes =
        document.querySelectorAll(
            "section"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "secao-visivel"
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.20
            }
        );


    secoes.forEach(
        secao => {

            observer.observe(
                secao
            );

        }
    );

}


/* =========================================================
   FECHAMENTO DOS MODAIS
========================================================= */

function configurarFechamentoModais() {

    document
        .querySelectorAll(
            ".modal-overlay"
        )
        .forEach(
            overlay => {

                overlay.addEventListener(
                    "click",
                    () => {

                        const modal =
                            overlay.closest(
                                ".modal"
                            );


                        if (!modal) {
                            return;
                        }


                        modal.classList.remove(
                            "ativo"
                        );


                        modal.setAttribute(
                            "aria-hidden",
                            "true"
                        );


                        document.body.classList.remove(
                            "modal-aberto"
                        );


                        document.body.style.overflow =
                            "";

                    }
                );

            }
        );

}


/* =========================================================
   TECLA ESC
========================================================= */

function configurarTeclaEsc() {

    document.addEventListener(
        "keydown",
        evento => {

            if (
                evento.key !== "Escape"
            ) {

                return;

            }


            fecharCartaModal();

            fecharModalDownload();

        }
    );

}


/* =========================================================
   PROTEÇÃO CONTRA CLIQUE DUPLO
========================================================= */

function protegerCliqueRapido(
    elemento,
    callback,
    intervalo = 500
) {

    if (!elemento) {
        return;
    }


    let bloqueado = false;


    elemento.addEventListener(
        "click",
        evento => {

            if (bloqueado) {

                evento.preventDefault();

                return;

            }


            bloqueado = true;


            callback(
                evento
            );


            setTimeout(
                () => {

                    bloqueado = false;

                },
                intervalo
            );

        }
    );

}


/* =========================================================
   CONFIGURAÇÃO DOS EVENTOS
========================================================= */

function configurarEventos() {

    /*
        O antigo botão Mergulhar não controla mais
        a navegação.
    */

    desativarMergulho();


    /*
        BAÚ
    */

    protegerCliqueRapido(
        bauTesouro,
        abrirBau,
        1000
    );


    /*
        CONCHA
    */

    protegerCliqueRapido(
        conchaConvite,
        prepararConvite,
        1200
    );


    /*
        FECHAR CARTA
    */

    if (fecharCarta) {

        fecharCarta.addEventListener(
            "click",
            fecharCartaModal
        );

    }


    /*
        FECHAR DOWNLOAD
    */

    if (fecharDownload) {

        fecharDownload.addEventListener(
            "click",
            fecharModalDownload
        );

    }


    /*
        DOWNLOAD
    */

    if (downloadConvite) {

        downloadConvite.addEventListener(
            "click",
            baixarConvite
        );

    }


    /*
        PRESENTES
    */

    configurarPresentes();


    /*
        MODAIS
    */

    configurarFechamentoModais();


    /*
        ESC
    */

    configurarTeclaEsc();

}


/* =========================================================
   PREPARAR PÁGINA
========================================================= */

function prepararPagina() {


    /*
        Garante que os modais comecem fechados.
    */

    if (modalCarta) {

        modalCarta.classList.remove(
            "ativo"
        );


        modalCarta.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (modalDownload) {

        modalDownload.classList.remove(
            "ativo"
        );


        modalDownload.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /*
        Carrega dados.
    */

    carregarDadosDaFesta();


    /*
        Prepara animações.
    */

    prepararAnimacoes();


    /*
        Observadores.
    */

    observarElementos();

    observarSecoes();


    /*
        Eventos.
    */

    configurarEventos();

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        prepararPagina
    );

} else {

    prepararPagina();

}


/* =========================================================
   LOG
========================================================= */

console.log(
    "🌊 O Oceano Cor-de-Rosa da Sophia carregado!"
);

console.log(
    "💕 Sophia Emanuely — 4 anos"
);

console.log(
    "📅 28 de novembro de 2026 — 13:00"
);

console.log(
    "🏊 Local com piscina — Uso infantil liberado com acompanhamento de responsável"
);
