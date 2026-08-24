/* =========================================================
   CONVITE SOPHIA EMANUELY
   JAVASCRIPT COMPLETO
   ========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTOS
           ================================================= */


        const oceano =
            document.getElementById(
                "oceano"
            );


        const bolhas =
            document.getElementById(
                "bolhasOceano"
            );



        /* =================================================
           GARANTIR QUE A PÁGINA COMEÇA NO TOPO
           ================================================= */


        if (
            "scrollRestoration"
            in history
        ) {

            history.scrollRestoration =
                "manual";

        }


        window.scrollTo(
            0,
            0
        );



        /* =================================================
           CRIAÇÃO DE BOLHAS EXTRAS
           ================================================= */


        function criarBolhaExtra(
            quantidade = 8
        ) {


            if (!bolhas) {
                return;
            }


            const largura =
                window.innerWidth;


            for (
                let i = 0;
                i < quantidade;
                i++
            ) {


                const bolha =
                    document.createElement(
                        "span"
                    );


                bolha.classList.add(
                    "bolha-extra"
                );


                const tamanho =
                    Math.floor(
                        Math.random() * 14
                    ) + 5;


                const duracao =
                    (
                        Math.random() * 5
                        + 5
                    ).toFixed(2);


                const desvio =
                    Math.floor(
                        Math.random() * 100
                    ) - 50;


                const posicao =
                    Math.floor(
                        Math.random()
                        * largura
                    );


                bolha.style.left =
                    `${posicao}px`;


                bolha.style.setProperty(
                    "--tamanho",
                    `${tamanho}px`
                );


                bolha.style.setProperty(
                    "--duracao",
                    `${duracao}s`
                );


                bolha.style.setProperty(
                    "--desvio",
                    `${desvio}px`
                );


                bolhas.appendChild(
                    bolha
                );


                setTimeout(
                    () => {

                        bolha.remove();

                    },
                    (
                        Number(duracao)
                        * 1000
                    ) + 1000
                );

            }

        }



        /* =================================================
           MAIS BOLHAS QUANDO A PESSOA INTERAGE
           ================================================= */


        let ultimoToque =
            0;


        function respostaAoToque() {


            const agora =
                Date.now();


            /*
               Evita criar centenas
               de bolhas quando o
               navegador dispara
               vários eventos juntos.
            */

            if (
                agora -
                ultimoToque
                <
                180
            ) {

                return;

            }


            ultimoToque =
                agora;


            criarBolhaExtra(
                7
            );

        }



        /* =================================================
           TOQUE / CLIQUE
           ================================================= */


        if (oceano) {


            oceano.addEventListener(
                "pointerdown",
                respostaAoToque,
                {
                    passive: true
                }
            );


            oceano.addEventListener(
                "touchmove",
                respostaAoToque,
                {
                    passive: true
                }
            );


            oceano.addEventListener(
                "wheel",
                (evento) => {


                    if (
                        Math.abs(
                            evento.deltaY
                        ) > 0
                    ) {

                        criarBolhaExtra(
                            4
                        );

                    }

                },
                {
                    passive: true
                }
            );

        }



        /* =================================================
           BOLHAS QUANDO A PESSOA DESCE
           ================================================= */


        let ultimoScroll =
            window.scrollY;


        let ultimoDisparo =
            0;


        window.addEventListener(
            "scroll",
            () => {


                if (!oceano) {
                    return;
                }


                const agora =
                    Date.now();


                const atual =
                    window.scrollY;


                const descendo =
                    atual >
                    ultimoScroll;


                ultimoScroll =
                    atual;


                if (!descendo) {
                    return;
                }


                if (
                    agora -
                    ultimoDisparo
                    <
                    350
                ) {

                    return;

                }


                const topoOceano =
                    oceano.offsetTop;


                const fundoOceano =
                    topoOceano +
                    oceano.offsetHeight;


                const posicao =
                    window.scrollY +
                    window.innerHeight;


                const dentroOceano =
                    posicao >
                    topoOceano &&
                    window.scrollY <
                    fundoOceano;


                if (
                    dentroOceano
                ) {


                    ultimoDisparo =
                        agora;


                    criarBolhaExtra(
                        5
                    );

                }

            },
            {
                passive: true
            }
        );



        /* =================================================
           BOLHAS INICIAIS EXTRAS
           ================================================= */


        setTimeout(
            () => {

                criarBolhaExtra(
                    6
                );

            },
            1000
        );



        /* =================================================
           PEIXES
           =================================================

           O movimento dos peixes é feito
           exclusivamente pelo CSS.

           Não usamos JS para mover peixe.

           Portanto:

           ESQUERDA → DIREITA

           e nunca:

           DIREITA → ESQUERDA.
        */



        /* =================================================
           PROTEÇÃO CONTRA IMAGENS / ELEMENTOS
           ================================================= */


        document.addEventListener(
            "dragstart",
            (evento) => {

                if (
                    evento.target.tagName ===
                    "IMG"
                ) {

                    evento.preventDefault();

                }

            }
        );



        /* =================================================
           AJUSTE DE ORIENTAÇÃO
           ================================================= */


        function atualizarTela() {


            const altura =
                window.innerHeight;


            document.documentElement
                .style
                .setProperty(
                    "--altura-tela",
                    `${altura}px`
                );

        }


        atualizarTela();


        window.addEventListener(
            "resize",
            atualizarTela
        );



        /* =================================================
           DETECTAR QUANDO O OCEANO ENTROU NA TELA
           ================================================= */


        if (
            "IntersectionObserver"
            in window
        ) {


            const observador =
                new IntersectionObserver(
                    (entradas) => {


                        entradas.forEach(
                            (entrada) => {


                                if (
                                    entrada.isIntersecting
                                ) {


                                    /*
                                       Ao entrar no oceano,
                                       liberamos algumas
                                       bolhas adicionais.
                                    */

                                    criarBolhaExtra(
                                        5
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.15
                    }
                );


            if (oceano) {

                observador.observe(
                    oceano
                );

            }

        }



    }
);
