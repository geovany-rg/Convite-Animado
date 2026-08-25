/* =========================================================
   O OCEANO COR-DE-ROSA DA SOPHIA
   SCRIPT.JS — COMPATÍVEL COM O HTML ATUAL
========================================================= */

"use strict";

/* =========================================================
   CONFIGURAÇÕES PADRÃO
========================================================= */

const CONFIG = {
    nome: "Sophia Emanuely",
    idade: "4 anos",
    titulo: "O Oceano Cor-de-Rosa da Sophia",
    data: "28 de novembro de 2026",
    horario: "13:00",
    local: "Local da Festa",
    link: "https://maps.app.goo.gl/SGfxecVLVifhaA4a7",
    assinatura: "Com carinho, Sophia 💕"
};

/* =========================================================
   ELEMENTOS DO HTML ATUAL
========================================================= */

const entrada = document.getElementById("entrada");
const oceano = document.getElementById("oceano");
const bauSecao = document.getElementById("bau-secao");
const cartaSecao = document.getElementById("carta-secao");
const presentes = document.getElementById("presentes");
const fundoMar = document.getElementById("fundo-mar");
const conchaFinal = document.getElementById("concha-final");

const bauTesouro = document.getElementById("bau-tesouro");
const conchaConvite = document.getElementById("concha-convite");

const modalCarta = document.getElementById("modal-carta");
const modalDownload = document.getElementById("modal-download");

const fecharCarta = document.getElementById("fechar-carta");
const fecharCartaModalBotao = document.getElementById("fechar-carta-modal");
const fecharDownload = document.getElementById("fechar-download");

const cartaModalConteudo = document.getElementById("carta-modal-conteudo");
const downloadConvite = document.getElementById("download-convite");
const mensagemDownload = document.getElementById("mensagem-download");
const dadosConvite = document.getElementById("dados-convite");

/* =========================================================
   ESTADO
========================================================= */

let bauAberto = false;
let conviteGerado = false;
let conviteImagemPronta = false;
let imagemConvite = null;

/* =========================================================
   UTILITÁRIOS
========================================================= */

function esperar(tempo) {
    return new Promise(resolve => setTimeout(resolve, tempo));
}

function irPara(secao) {
    if (!secao) return;

    secao.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function textoDataConvite(tipo, fallback) {
    const elemento = document.querySelector(
        `[data-convite="${tipo}"]`
    );

    if (!elemento) return fallback;

    const texto = elemento.textContent.trim();

    return texto || fallback;
}

/* =========================================================
   DADOS DO CONVITE
========================================================= */

function carregarDadosDaFesta() {

    const valores = {

        nome: textoDataConvite(
            "nome",
            CONFIG.nome
        ),

        idade: textoDataConvite(
            "idade",
            CONFIG.idade
        ),

        titulo: textoDataConvite(
            "titulo",
            CONFIG.titulo
        ),

        data: textoDataConvite(
            "data",
            CONFIG.data
        ),

        horario: textoDataConvite(
            "horario",
            CONFIG.horario
        ),

        local: textoDataConvite(
            "local",
            CONFIG.local
        ),

        link: textoDataConvite(
            "link",
            CONFIG.link
        )

    };

    Object.assign(
        CONFIG,
        valores
    );


    document
        .querySelectorAll(
            "[data-convite]"
        )
        .forEach(
            campo => {

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

            }
        );

}

/* =========================================================
   PEIXES
========================================================= */

function corrigirDirecaoPeixes() {

    const peixes =
        document.querySelectorAll(
            ".peixe, " +
            ".peixe-profundo, " +
            ".cardume span"
        );


    peixes.forEach(
        peixe => {

            peixe.style.transform =
                "scaleX(-1)";

        }
    );

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
                                Abrir mapa
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


                <button
                    id="fechar-carta-modal-interno"
                    class="botao-fechar-carta"
                    type="button"
                >
                    Fechar carta
                </button>

            </div>

        </div>

    `;


    const fecharInterno =
        document.getElementById(
            "fechar-carta-modal-interno"
        );


    if (fecharInterno) {

        fecharInterno.addEventListener(
            "click",
            fecharCartaModal
        );

    }

}


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

}


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


function atualizarMensagemDownload(
    texto,
    mostrar = true
) {

    if (!mensagemDownload) {
        return;
    }


    const paragrafo =
        mensagemDownload.querySelector(
            "p"
        );


    if (paragrafo) {

        paragrafo.textContent =
            texto;

    }


    mensagemDownload.classList.toggle(
        "ativa",
        mostrar
    );


    mensagemDownload.classList.toggle(
        "ativo",
        mostrar
    );

}

/* =========================================================
   IMAGEM DO CONVITE
========================================================= */

function obterCaminhoImagemConvite() {

    if (
        dadosConvite?.dataset.imagemConvite
    ) {

        return (
            dadosConvite.dataset
                .imagemConvite
        );

    }


    return "convite-sophia-emanuely.jpg";

}


function carregarImagemConvite() {

    return new Promise(
        resolve => {

            const caminho =
                obterCaminhoImagemConvite();


            const imagem =
                new Image();


            imagem.onload = () => {

                imagemConvite =
                    imagem;

                conviteImagemPronta =
                    true;

                resolve(true);

            };


            imagem.onerror = () => {

                imagemConvite =
                    null;

                conviteImagemPronta =
                    false;

                resolve(false);

            };


            imagem.src =
                caminho;

        }
    );

}

/* =========================================================
   PREPARAR CONVITE
========================================================= */

async function prepararConvite() {

    if (!conchaConvite) {
        return;
    }


    if (
        conviteGerado &&
        conviteImagemPronta
    ) {

        abrirModalDownload();

        return;

    }


    conviteGerado =
        true;


    atualizarMensagemDownload(
        "Preparando seu convite...",
        true
    );


    conchaConvite.classList.add(
        "concha-processando"
    );


    const imagemCarregada =
        await carregarImagemConvite();


    await esperar(350);


    conchaConvite.classList.remove(
        "concha-processando"
    );


    if (!imagemCarregada) {

        conviteGerado =
            false;


        atualizarMensagemDownload(
            "Não foi possível localizar a imagem do convite.",
            true
        );


        return;

    }


    atualizarMensagemDownload(
        "Convite preparado! 💕",
        true
    );


    await esperar(350);


    abrirModalDownload();

}

/* =========================================================
   DOWNLOAD DA IMAGEM REAL DO CONVITE
========================================================= */

async function baixarConvite() {

    const caminho =
        obterCaminhoImagemConvite();


    if (!caminho) {

        atualizarMensagemDownload(
            "A imagem do convite não foi configurada.",
            true
        );


        return;

    }


    atualizarMensagemDownload(
        "Preparando o download...",
        true
    );


    try {

        const resposta =
            await fetch(
                caminho,
                {
                    cache: "no-cache"
                }
            );


        if (!resposta.ok) {

            throw new Error(
                "Imagem não encontrada"
            );

        }


        const blob =
            await resposta.blob();


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
            "convite-sophia-emanuely.jpg";


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


        atualizarMensagemDownload(
            "Convite baixado com sucesso! 💕",
            true
        );


    } catch (erro) {

        console.warn(
            "Download por blob falhou:",
            erro
        );


        /*
           Fallback para arquivos locais
           ou servidores que não permitem fetch.
        */

        const link =
            document.createElement(
                "a"
            );


        link.href =
            caminho;


        link.download =
            "convite-sophia-emanuely.jpg";


        link.target =
            "_blank";


        link.rel =
            "noopener noreferrer";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        atualizarMensagemDownload(
            "O convite foi aberto para você salvar a imagem. 💕",
            true
        );

    }

}

/* =========================================================
   PRESENTES
========================================================= */

function configurarPresentes() {

    document
        .querySelectorAll(
            ".botao-presente"
        )
        .forEach(
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
   ANIMAÇÕES EXTRAS
========================================================= */

function prepararAnimacaoBau() {

    if (
        document.getElementById(
            "estilos-js-sophia"
        )
    ) {

        return;

    }


    const estilo =
        document.createElement(
            "style"
        );


    estilo.id =
        "estilos-js-sophia";


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
        !(
            "IntersectionObserver"
            in window
        )
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


function observarSecoes() {

    const secoes =
        document.querySelectorAll(
            "section"
        );


    if (
        !(
            "IntersectionObserver"
            in window
        )
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
   MODAIS
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


    let bloqueado =
        false;


    elemento.addEventListener(
        "click",
        evento => {

            if (bloqueado) {

                evento.preventDefault();

                return;

            }


            bloqueado =
                true;


            callback(
                evento
            );


            setTimeout(
                () => {

                    bloqueado =
                        false;

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

    protegerCliqueRapido(
        bauTesouro,
        abrirBau,
        900
    );


    protegerCliqueRapido(
        conchaConvite,
        prepararConvite,
        1200
    );


    if (fecharCarta) {

        fecharCarta.addEventListener(
            "click",
            fecharCartaModal
        );

    }


    if (fecharCartaModalBotao) {

        fecharCartaModalBotao.addEventListener(
            "click",
            fecharCartaModal
        );

    }


    if (fecharDownload) {

        fecharDownload.addEventListener(
            "click",
            fecharModalDownload
        );

    }


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
   GARANTIR MODAIS FECHADOS
========================================================= */

function fecharModaisInicialmente() {

    [
        modalCarta,
        modalDownload
    ]
        .forEach(
            modal => {

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

    fecharModaisInicialmente();


    console.log(
        "🌊 O Oceano Cor-de-Rosa da Sophia carregado!"
    );


    console.log(
        `💕 ${CONFIG.nome} — ${CONFIG.idade}`
    );


    console.log(
        `📅 ${CONFIG.data} — ${CONFIG.horario}`
    );


    console.log(
        `📍 ${CONFIG.local}`
    );

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
