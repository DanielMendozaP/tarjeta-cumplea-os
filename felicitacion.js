/* =====================================================
   TÍTULO
===================================================== */

const titulo =
    document.getElementById(
        "titulo-cumpleanos"
    );


const textoTitulo =
    "FELIZ CUMPLEAÑOS";


[...textoTitulo].forEach(
    (letra, indice) => {

        const elemento =
            document.createElement(
                "span"
            );


        if (letra === " ") {

            elemento.classList.add(
                "espacio-titulo"
            );

        } else {

            elemento.classList.add(
                "letra-cumpleanos"
            );


            const retraso =
                indice * 110;


            elemento.style.animationDelay =
                `${retraso}ms, ${retraso + 750}ms`;


            elemento.textContent =
                letra;
        }


        titulo.appendChild(
            elemento
        );
    }
);


/* =====================================================
   MENSAJE POR BLOQUES
===================================================== */

const bloquesMensaje =
    document.querySelectorAll(
        ".bloque-mensaje"
    );


function mostrarMensajePorBloques() {

    const esperaInicial =
        2200;


    const tiempoEntreBloques =
        2600;


    bloquesMensaje.forEach(
        (bloque, indice) => {

            const retraso =
                esperaInicial
                +
                indice
                *
                tiempoEntreBloques;


            setTimeout(
                () => {

                    bloque.classList.add(
                        "visible"
                    );

                },
                retraso
            );
        }
    );
}


mostrarMensajePorBloques();


/* =====================================================
   DESTELLOS MÁGICOS
===================================================== */

const capaDestellos =
    document.getElementById(
        "capa-destellos"
    );


function crearDestellos() {

    const cantidad =
        90;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const destello =
            document.createElement(
                "span"
            );


        destello.classList.add(
            "destello"
        );


        destello.style.left =
            `${Math.random() * 100}%`;


        destello.style.top =
            `${Math.random() * 100}%`;


        const tamano =
            3
            +
            Math.random() * 6;


        destello.style.setProperty(
            "--tamano",
            `${tamano}px`
        );


        const duracion =
            2
            +
            Math.random() * 3;


        destello.style.setProperty(
            "--duracion",
            `${duracion}s`
        );


        const retraso =
            Math.random() * 6;


        destello.style.setProperty(
            "--retraso",
            `${retraso}s`
        );


        capaDestellos.appendChild(
            destello
        );
    }
}


crearDestellos();


/* =====================================================
   CELEBRACIÓN FINAL
===================================================== */

const cierreCumpleanos =
    document.getElementById(
        "cierre-cumpleanos"
    );


const capaCelebracion =
    document.getElementById(
        "capa-celebracion"
    );


function lanzarCelebracionFinal() {

    /*
        Mostramos el cierre.
    */

    cierreCumpleanos.classList.add(
        "visible"
    );


    const simbolos = [
        "♥",
        "✨",
        "★",
        "✦",
        "✧",
        "•"
    ];


    const colores = [
        "#fff3a6",
        "#ffd166",
        "#ffb347",
        "#ffffff",
        "#ffb6d9",
        "#ff8fc7"
    ];


    const cantidad =
        140;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const particula =
            document.createElement(
                "span"
            );


        particula.classList.add(
            "particula-celebracion"
        );


        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random()
                    *
                    simbolos.length
                )
            ];


        /*
            Posición horizontal.
        */

        particula.style.setProperty(
            "--x",
            `${Math.random() * 100}%`
        );


        /*
            Tamaño.
        */

        particula.style.setProperty(
            "--tamano",
            `${
                10
                +
                Math.random() * 22
            }px`
        );


        /*
            Color.
        */

        particula.style.setProperty(
            "--color",
            colores[
                Math.floor(
                    Math.random()
                    *
                    colores.length
                )
            ]
        );


        /*
            Duración.
        */

        const duracion =
            4.5
            +
            Math.random() * 3;


        particula.style.setProperty(
            "--duracion",
            `${duracion}s`
        );


        /*
            Altura.
        */

        const altura =
            -500
            -
            Math.random() * 450;


        particula.style.setProperty(
            "--altura",
            `${altura}px`
        );


        /*
            Movimiento lateral.
        */

        const desplazamiento =
            -110
            +
            Math.random() * 220;


        particula.style.setProperty(
            "--desplazamiento",
            `${desplazamiento}px`
        );


        /*
            Giro.
        */

        const giro =
            -360
            +
            Math.random() * 720;


        particula.style.setProperty(
            "--giro",
            `${giro}deg`
        );


        capaCelebracion.appendChild(
            particula
        );


        /*
            Eliminamos del DOM al terminar.
        */

        setTimeout(
            () => {

                particula.remove();

            },
            (duracion * 1000) + 300
        );
    }
}


/* =====================================================
   DISPARO FINAL

   Último bloque:
   ~17.8 segundos

   Dejamos tiempo para leer la firma.
===================================================== */

setTimeout(
    lanzarCelebracionFinal,
    20500
);