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
        "Uso infantil liberado com acompanhamento de responsável",

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

const bauSecao =
    document.getElementById("bau-secao");

const cartaSecao =
    document.getElementById("carta-secao");

const presentes =
    document.getElementById("presentes");

const fundoMar =
    document.getElementById("fundo-mar");

const conchaFinal =
    document.getElementById("concha-final");

const btnMergulhar =
    document.getElementById("btn-mergulhar");

const bauTesouro =
    document.getElementById("bau-tesouro");

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
    document.getElementById(
        "carta-modal-conteudo"
    );

const downloadConvite =
    document.getElementById(
        "download-convite"
    );

const mensagemDownload =
    document.getElementById(
        "mensagem-download"
    );


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
        resolve =>
            setTimeout(
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
   PEIXES
   Todos devem nadar ESQUERDA → DIREITA.
========================================================= */

function corrigirDirecaoPeixes() {

    const peixes =
        document.querySelectorAll(
            ".peixe, " +
            ".peixe-profundo, " +
            ".cardume span"
        );


    peixes.forEach(peixe => {

        peixe.style.transform =
            "scaleX(-1)";

    });

}


/* =========================================================
   BAÚ DO TESOURO
========================================================= */

async function abrirBau() {

    if (!bauTesouro) {
        return;
    }


    if (bauAberto) {

        abrirCarta();

        return;

    }


    bauAberto = true;


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


    await esperar(700);


    abrirCarta();

}


/* =========================================================
   CARTA
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

                    <div class="dado-festa">

                        <span class="icone-dado">
                            📍
                        </span>

                        <div>

                            <strong>
                                LOCAL
                            </strong>

                            <a
                                href="${CONFIG.link}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${CONFIG.local}
                            </a>

                        </div>

                    </div>


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
        Não usamos overflow:hidden
        no body.

        Isso evita que celulares fiquem
        presos ou travados ao fechar a carta.
    */

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


    /*
        Não força nenhuma rolagem.

        O usuário continua exatamente
        de onde estava.
    */

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

}


/* =========================================================
   CONCHA FINAL
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
       FUNDO EM DEGRADÊ
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
        "#b8f6ff"
    );


    gradiente.addColorStop(
        0.25,
        "#6edff2"
    );


    gradiente.addColorStop(
        0.55,
        "#29b9d8"
    );


    gradiente.addColorStop(
        0.8,
        "#087da9"
    );


    gradiente.addColorStop(
        1,
        "#06466e"
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
       LUZ
    ====================================================== */

    const luz =
        ctx.createRadialGradient(
            largura / 2,
            130,
            20,
            largura / 2,
            200,
            650
        );


    luz.addColorStop(
        0,
        "rgba(255,255,255,0.55)"
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
        750
    );


    /* =====================================================
       BOLHAS
    ====================================================== */

    desenharBolha(
        ctx,
        100,
        180,
        18
    );

    desenharBolha(
        ctx,
        940,
        230,
        25
    );

    desenharBolha(
        ctx,
        180,
        620,
        13
    );

    desenharBolha(
        ctx,
        890,
        720,
        18
    );

    desenharBolha(
        ctx,
        120,
        1050,
        22
    );

    desenharBolha(
        ctx,
        970,
        1120,
        14
    );


    /* =====================================================
       PEIXES
       Espelhados para parecerem nadando
       corretamente para a direita.
    ====================================================== */

    desenharEmojiEspelhado(
        ctx,
        "🐟",
        90,
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
        170
    );


    ctx.fillStyle =
        "#ff69b4";


    ctx.font =
        "bold 64px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "Cor-de-Rosa",
        largura / 2,
        240
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 46px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "da Sophia",
        largura / 2,
        305
    );


    /* =====================================================
       SEREIA
    ====================================================== */

    desenharEmoji(
        ctx,
        "🧜‍♀️",
        540,
        410,
        120
    );


    /* =====================================================
       GOLFINHO
    ====================================================== */

    desenharEmoji(
        ctx,
        "🐬",
        540,
        560,
        100
    );


    /* =====================================================
       NOME
    ====================================================== */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 52px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.nome,
        largura / 2,
        690
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "bold 30px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.idade,
        largura / 2,
        735
    );


    /* =====================================================
       CARD
    ====================================================== */

    const cardX = 100;

    const cardY = 780;

    const cardW = 880;

    const cardH = 350;


    desenharRetanguloArredondado(
        ctx,
        cardX,
        cardY,
        cardW,
        cardH,
        35,
        "rgba(255,255,255,0.18)"
    );


    ctx.strokeStyle =
        "rgba(255,255,255,0.35)";


    ctx.lineWidth =
        2;


    ctx.stroke();


    ctx.textAlign =
        "left";


    /* DATA */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 26px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📅 DATA",
        cardX + 45,
        cardY + 60
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "26px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.data,
        cardX + 45,
        cardY + 100
    );


    /* HORÁRIO */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 26px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "🕐 HORÁRIO",
        cardX + 45,
        cardY + 155
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "26px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.horario,
        cardX + 45,
        cardY + 195
    );


    /* LOCAL */

    ctx.fillStyle =
        "#ffb4d9";


    ctx.font =
        "bold 26px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📍 LOCAL",
        cardX + 45,
        cardY + 250
    );


    ctx.fillStyle =
        "#ffffff";


    ctx.font =
        "22px Trebuchet MS, Arial, sans-serif";


    const localLinhas =
        quebrarTexto(
            ctx,
            CONFIG.local,
            cardW - 90
        );


    localLinhas.forEach(
        (linha, index) => {

            ctx.fillText(
                linha,
                cardX + 45,
                cardY +
                290 +
                index * 30
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
        "bold 20px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        "📍 Localização:",
        largura / 2,
        1190
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
                1225 +
                index * 27
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
        1300
    );


    return canvas;

}


/* =========================================================
   BOLHA
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
        "rgba(255,255,255,0.6)";


    ctx.lineWidth =
        3;


    ctx.stroke();


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


    let linhaAtual = "";


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
   PRESENTES
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

function prepararAnimacaoBau() {

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

            35% {
                transform:
                    scale(1.08)
                    rotate(-3deg);
            }

            65% {
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
                conchaProcessando 0.7s
                ease-in-out infinite alternate
                !important;

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


        /*
            Correção dos peixes.

            scaleX(-1) faz com que eles
            apontem para o lado correto.
        */

        .peixe,
        .peixe-profundo,
        .cardume span {

            transform:
                scaleX(-1);

        }

    `;


    document.head.appendChild(
        estilo
    );

}


/* =========================================================
   INTERSECTION OBSERVER
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
                threshold: 0.25
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

                    }
                );

            }
        );

}


/* =========================================================
   ESC
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
   EVENTOS
========================================================= */

function configurarEventos() {

    /*
        Se o botão de mergulho ainda estiver
        no HTML antigo, ele simplesmente
        ficará desativado.

        Isso evita a transição problemática
        no celular.
    */

    if (btnMergulhar) {

        btnMergulhar.style.display =
            "none";

    }


    /* BAÚ */

    protegerCliqueRapido(
        bauTesouro,
        abrirBau,
        900
    );


    /* CONCHA */

    protegerCliqueRapido(
        conchaConvite,
        prepararConvite,
        1200
    );


    /* FECHAR CARTA */

    if (fecharCarta) {

        fecharCarta.addEventListener(
            "click",
            fecharCartaModal
        );

    }


    /* FECHAR DOWNLOAD */

    if (fecharDownload) {

        fecharDownload.addEventListener(
            "click",
            fecharModalDownload
        );

    }


    /* DOWNLOAD */

    if (downloadConvite) {

        downloadConvite.addEventListener(
            "click",
            baixarConvite
        );

    }


    configurarPresentes();

    configurarFechamentoModais();

    configurarTeclaEsc();

}


/* =========================================================
   PREPARAR PÁGINA
========================================================= */

function prepararPagina() {

    carregarDadosDaFesta();

    prepararAnimacaoBau();

    corrigirDirecaoPeixes();

    observarElementos();

    observarSecoes();

    configurarEventos();


    /*
        Garantimos que os modais
        comecem fechados.
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
