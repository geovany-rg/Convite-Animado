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

    local: "Local da Festa",

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

let mergulhoExecutado = false;

let bauAberto = false;

let conviteGerado = false;

let bloqueandoTransicao = false;


/* =========================================================
   FUNÇÕES UTILITÁRIAS
========================================================= */


/*
    Rola suavemente até determinada seção.
*/

function irPara(secao) {

    if (!secao) {
        return;
    }

    secao.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/*
    Espera alguns milissegundos.
*/

function esperar(tempo) {

    return new Promise(
        resolve => setTimeout(
            resolve,
            tempo
        )
    );
}


/*
    Bloqueia/desbloqueia temporariamente
    algumas interações.
*/

function bloquearPagina(valor) {

    if (valor) {

        document.body.dataset.transicao =
            "ativa";

    } else {

        delete document.body.dataset.transicao;

    }
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
   BOTÃO "MERGULHAR"
========================================================= */

async function iniciarMergulho() {

    if (bloqueandoTransicao) {
        return;
    }

    if (mergulhoExecutado) {

        irPara(oceano);

        return;
    }

    bloqueandoTransicao = true;

    bloquearPagina(true);

    mergulhoExecutado = true;


    /*
        Pequeno efeito inicial na entrada.
    */

    entrada.style.transition =
        "opacity 0.7s ease, transform 1.2s ease";

    entrada.style.opacity = "0";

    entrada.style.transform =
        "scale(1.15)";


    await esperar(650);


    /*
        Mostra a tela de mergulho.
    */

    mergulho.classList.add("ativo");

    mergulho.style.opacity = "1";

    mergulho.style.visibility =
        "visible";


    /*
        Posiciona o usuário no mergulho.
    */

    mergulho.scrollIntoView({
        behavior: "instant",
        block: "start"
    });


    await esperar(2200);


    /*
        Esconde o mergulho.
    */

    mergulho.style.opacity = "0";


    await esperar(700);


    mergulho.classList.remove("ativo");

    mergulho.style.visibility =
        "hidden";


    /*
        Revela o oceano.
    */

    entrada.style.display =
        "none";

    mergulho.style.display =
        "none";

    oceano.style.display =
        "block";


    irPara(oceano);


    bloquearPagina(false);

    bloqueandoTransicao = false;

}


/* =========================================================
   BAÚ DO TESOURO
========================================================= */

async function abrirBau() {

    if (bauAberto) {
        abrirCarta();
        return;
    }

    bauAberto = true;


    /*
        Classe utilizada para a animação
        do baú.
    */

    bauTesouro.classList.add(
        "bau-aberto"
    );


    /*
        Troca visual simples da fechadura.
    */

    const fechadura =
        bauTesouro.querySelector(
            ".bau-fechadura"
        );

    if (fechadura) {

        fechadura.textContent =
            "✨";

    }


    /*
        Pequeno atraso para parecer
        que o baú realmente abriu.
    */

    await esperar(900);


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


/*
    Abre a carta.
*/

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


    document.body.style.overflow =
        "hidden";

}


/*
    Fecha a carta.
*/

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


    document.body.style.overflow =
        "";


    /*
        Depois que a carta fecha,
        a aventura continua.
    */

    setTimeout(() => {

        irPara(presentes);

    }, 350);

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


    /*
        Pequena animação antes
        da geração da imagem.
    */

    conchaConvite.classList.add(
        "concha-processando"
    );


    await esperar(800);


    /*
        Cria o convite.
    */

    const canvas =
        criarImagemConvite();


    if (!canvas) {

        if (mensagemDownload) {

            mensagemDownload.classList.remove(
                "ativo"
            );

        }

        return;

    }


    /*
        Guarda o canvas para
        o botão de download.
    */

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


    await esperar(500);


    abrirModalDownload();

}


/* =========================================================
   GERAÇÃO DA IMAGEM DO CONVITE
========================================================= */

function criarImagemConvite() {

    /*
        Tamanho pensado para compartilhamento
        em celular.
    */

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
       FUNDO
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
        "#74e6f4"
    );

    gradiente.addColorStop(
        0.45,
        "#32c6df"
    );

    gradiente.addColorStop(
        1,
        "#075b88"
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
            180,
            30,
            largura / 2,
            180,
            550
        );


    luz.addColorStop(
        0,
        "rgba(255,255,255,0.45)"
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
        700
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
       PEIXES DECORATIVOS
    ====================================================== */

    desenharEmoji(
        ctx,
        "🐟",
        90,
        390,
        60
    );

    desenharEmoji(
        ctx,
        "🐠",
        900,
        470,
        65
    );

    desenharEmoji(
        ctx,
        "🐟",
        150,
        850,
        55
    );

    desenharEmoji(
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
       SEREIA / GOLFINHO
    ====================================================== */

    desenharEmoji(
        ctx,
        "🧜‍♀️",
        540,
        400,
        120
    );


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
        `${CONFIG.idade} anos`,
        largura / 2,
        735
    );


    /* =====================================================
       CARD DE INFORMAÇÕES
    ====================================================== */

    const cardX = 100;

    const cardY = 780;

    const cardW = 880;

    const cardH = 330;


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


    /* Data */

    ctx.textAlign =
        "left";

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


    /* Horário */

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


    /* Local */

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
        "24px Trebuchet MS, Arial, sans-serif";


    ctx.fillText(
        CONFIG.local,
        cardX + 45,
        cardY + 290
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
        "📍 Abra o mapa pelo link:",
        largura / 2,
        1170
    );


    ctx.fillStyle =
        "#ffffff";

    ctx.font =
        "18px Trebuchet MS, Arial, sans-serif";


    /*
        O link pode ser grande.
        Fazemos quebra em duas linhas.
    */

    const linkTexto =
        CONFIG.link;


    const limite =
        850;


    const partes =
        quebrarTexto(
            ctx,
            linkTexto,
            limite
        );


    partes.forEach(
        (parte, index) => {

            ctx.fillText(
                parte,
                largura / 2,
                1210 +
                (index * 27)
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
   DESENHAR BOLHA
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
   DESENHAR EMOJI
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
   DOWNLOAD DO CONVITE
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


            /*
                Atualiza a mensagem.
            */

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

                    /*
                        Aqui futuramente podemos
                        colocar os links reais
                        dos produtos.
                    */

                    console.log(
                        "Abrindo sugestão de presente:"
                        ,
                        link.textContent.trim()
                    );

                }
            );

        }
    );

}


/* =========================================================
   ANIMAÇÃO DO BAÚ
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
                ease-in-out infinite alternate !important;
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

        body[data-transicao="ativa"] {
            cursor: wait;
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

    /*
        Elementos podem receber a classe
        "visivel" quando entram na tela.
    */

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
   DETECÇÃO DA SEÇÃO ATUAL
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
   FECHAR MODAIS CLICANDO FORA
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
   EVITAR CLIQUE DUPLO
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


    /* Botão de mergulho */

    protegerCliqueRapido(
        btnMergulhar,
        iniciarMergulho,
        1200
    );


    /* Baú */

    protegerCliqueRapido(
        bauTesouro,
        abrirBau,
        1000
    );


    /* Concha */

    protegerCliqueRapido(
        conchaConvite,
        prepararConvite,
        1200
    );


    /* Fechar carta */

    if (fecharCarta) {

        fecharCarta.addEventListener(
            "click",
            fecharCartaModal
        );

    }


    /* Fechar download */

    if (fecharDownload) {

        fecharDownload.addEventListener(
            "click",
            fecharModalDownload
        );

    }


    /* Baixar convite */

    if (downloadConvite) {

        downloadConvite.addEventListener(
            "click",
            baixarConvite
        );

    }


    /* Links de presente */

    configurarPresentes();


    /* Modais */

    configurarFechamentoModais();


    /* ESC */

    configurarTeclaEsc();

}


/* =========================================================
   AJUSTES INICIAIS
========================================================= */

function prepararPagina() {

    /*
        Garante que algumas telas
        estejam no estado correto.
    */

    if (mergulho) {

        mergulho.classList.remove(
            "ativo"
        );

    }


    if (modalCarta) {

        modalCarta.classList.remove(
            "ativo"
        );

    }


    if (modalDownload) {

        modalDownload.classList.remove(
            "ativo"
        );

    }


    /*
        Carrega os dados.
    */

    carregarDadosDaFesta();


    /*
        Prepara animações.
    */

    prepararAnimacaoBau();


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
   LOG DE DESENVOLVIMENTO
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
