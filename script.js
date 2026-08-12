/* =====================================================
   FECHA DEL CUMPLEAÑOS
===================================================== */

const fechaCumpleanos =
    new Date(
        2026,
        7,
        25,
        0,
        0,
        0
    );


/* =====================================================
   CONTADOR
===================================================== */

const diasElemento =
    document.getElementById("dias");

const horasElemento =
    document.getElementById("horas");

const minutosElemento =
    document.getElementById("minutos");

const segundosElemento =
    document.getElementById("segundos");

const contador =
    document.getElementById(
        "contador"
    );

const botonSorpresa =
    document.getElementById(
        "boton-sorpresa"
    );


function actualizarContador() {

    const ahora =
        new Date();

    const diferencia =
        fechaCumpleanos.getTime()
        -
        ahora.getTime();


    if (diferencia <= 0) {

        diasElemento.textContent =
            "00";

        horasElemento.textContent =
            "00";

        minutosElemento.textContent =
            "00";

        segundosElemento.textContent =
            "00";


        /*
            No ocultamos nada.
            Solo mostramos la huella.
        */

        botonSorpresa.style.display =
            "block";


        /*
            Detenemos esta ejecución.
        */

        return;
    }


    const segundo =
        1000;

    const minuto =
        segundo * 60;

    const hora =
        minuto * 60;

    const dia =
        hora * 24;


    const dias =
        Math.floor(
            diferencia / dia
        );


    const horas =
        Math.floor(
            (
                diferencia % dia
            )
            / hora
        );


    const minutos =
        Math.floor(
            (
                diferencia % hora
            )
            / minuto
        );


    const segundos =
        Math.floor(
            (
                diferencia % minuto
            )
            / segundo
        );


    diasElemento.textContent =
        String(dias)
            .padStart(
                2,
                "0"
            );


    horasElemento.textContent =
        String(horas)
            .padStart(
                2,
                "0"
            );


    minutosElemento.textContent =
        String(minutos)
            .padStart(
                2,
                "0"
            );


    segundosElemento.textContent =
        String(segundos)
            .padStart(
                2,
                "0"
            );
}


/* =====================================================
   ESTRELLAS
===================================================== */

const capaEstrellas =
    document.getElementById(
        "capa-estrellas"
    );


function crearEstrellas() {

    const cantidad =
    window.innerWidth <= 800
        ? 28
        : 65;


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const estrella =
            document.createElement(
                "span"
            );


        estrella.classList.add(
            "estrella"
        );


        estrella.style.left =
            `${Math.random() * 100}%`;


        estrella.style.top =
            `${Math.random() * 70}%`;


        const tamano =
            2.5
            +
            Math.random() * 3.5;


        estrella.style.width =
            `${tamano}px`;


        estrella.style.height =
            `${tamano}px`;


        estrella.style.animationDuration =
            `${
                2
                +
                Math.random() * 3
            }s`;


        estrella.style.animationDelay =
            `${
                Math.random() * 4
            }s`;


        capaEstrellas.appendChild(
            estrella
        );
    }
}


/* =====================================================
   ESTRELLA FUGAZ
===================================================== */

const capaEstrellaFugaz =
    document.getElementById(
        "capa-estrella-fugaz"
    );


function crearEstrellaFugaz() {

    const estrella =
        document.createElement(
            "span"
        );


    estrella.classList.add(
        "estrella-fugaz"
    );


    estrella.style.left =
        `${
            5
            +
            Math.random() * 35
        }%`;


    estrella.style.top =
        `${
            5
            +
            Math.random() * 25
        }%`;


    capaEstrellaFugaz.appendChild(
        estrella
    );


    setTimeout(
        () => {

            estrella.remove();

        },
        1600
    );
}


/* =====================================================
   FRASES
===================================================== */

const capaFrases =
    document.getElementById(
        "capa-frases"
    );


const frasesBonitas = [

    "Sigue brillando ✨",

    "Confía en ti 🌟",

    "Nunca dejes de soñar 💫",

    "Disfruta tu camino 🌸",

    "Vienen cosas bonitas 💖",

    "Cree en lo que puedes lograr ✨",

    "Cada día cuenta 🌷",

    "Sonríe 😊",

    "Todo lo bueno está por venir 🌟",

    "Sigue creciendo 🦋",

    "Cumple tus sueños 💫",

    "Disfruta cada etapa 🌸",

    "Hoy falta menos ❤️",

    "Un nuevo año te espera ✨",

    "Nunca dejes de creer en ti 💖"

];


function crearFraseCayendo() {

    const frase =
        document.createElement(
            "span"
        );


    frase.classList.add(
        "frase-cayendo"
    );


    frase.textContent =
        frasesBonitas[
            Math.floor(
                Math.random()
                *
                frasesBonitas.length
            )
        ];


   const esCelular =
    window.innerWidth <= 800;


if (esCelular) {

    frase.style.left =
        `${
            Math.random() * 92
        }%`;

} else {

    frase.style.left =
        `${
            4
            +
            Math.random() * 82
        }%`;
}


    frase.style.fontSize =
    window.innerWidth <= 800
        ? `${11 + Math.random() * 3}px`
        : `${13 + Math.random() * 8}px`;


    const duracion =
        14
        +
        Math.random() * 6;


    frase.style.animationDuration =
        `${duracion}s`;


    capaFrases.appendChild(
        frase
    );


    setTimeout(
        () => {

            frase.remove();

        },
        duracion * 1000
    );
}


/* =====================================================
   CORAZONES DEL ÁRBOL
===================================================== */

const grupoCorazones =
    document.getElementById(
        "grupo-corazones"
    );


const coloresCorazon = [

    "#ff1744",
    "#ff3158",
    "#ff5271",
    "#ff7189",
    "#e60046",
    "#d91654",
    "#ff8da0",
    "#ffb0bd"
];


/*
    Esta función determina la forma
    general de la copa.

    No hacemos simplemente un rectángulo
    lleno de corazones.
*/

function dentroDeCopa(x, y) {

    const centroX = 250;
    const centroY = 195;

    const escalaX =
        (x - centroX) / 172;

    const escalaY =
        (195 - y) / 150;

    const formula =
        Math.pow(
            escalaX * escalaX
            +
            escalaY * escalaY
            -
            1,
            3
        )
        -
        escalaX
        *
        escalaX
        *
        Math.pow(
            escalaY,
            3
        );

    return (
        formula <= 0
        &&
        y > 25
        &&
        y < 355
    );
}


function crearCorazonesArbol() {

    const namespace =
        "http://www.w3.org/2000/svg";

     const cantidad =
        window.innerWidth <= 800
            ? 150
            : 750;

    let creados = 0;

    while (creados < cantidad) {

        const x =
            65 +
            Math.random() * 370;

        const y =
            30 +
            Math.random() * 330;

        if (!dentroDeCopa(x, y)) {
            continue;
        }

        const corazon =
            document.createElementNS(
                namespace,
                "text"
            );

        corazon.classList.add(
            "corazon-arbol"
        );

        corazon.setAttribute(
            "x",
            x
        );

        corazon.setAttribute(
            "y",
            y
        );

        corazon.setAttribute(
            "text-anchor",
            "middle"
        );

        corazon.setAttribute(
            "dominant-baseline",
            "middle"
        );

        corazon.textContent = "♥";


        /*
            Damos prioridad visual
            a la zona central e inferior
            de la copa.
        */

        const distanciaCentro =
            Math.abs(x - 250);

        const zonaCentral =
            distanciaCentro < 115
            &&
            y > 130;


        let tamano;

        if (zonaCentral) {

            /*
                Aquí colocamos corazones
                más grandes para tapar
                mejor tronco y ramas.
            */

            tamano =
                19 +
                Math.random() * 18;

        } else {

            const probabilidad =
                Math.random();

            if (probabilidad < 0.30) {

                tamano =
                    10 +
                    Math.random() * 7;

            } else if (
                probabilidad < 0.75
            ) {

                tamano =
                    17 +
                    Math.random() * 9;

            } else {

                tamano =
                    26 +
                    Math.random() * 12;
            }
        }


        corazon.setAttribute(
            "font-size",
            tamano
        );


        const color =
            coloresCorazon[
                Math.floor(
                    Math.random()
                    *
                    coloresCorazon.length
                )
            ];

        corazon.setAttribute(
            "fill",
            color
        );


        const rotacion =
            -18 +
            Math.random() * 36;

        corazon.style.setProperty(
            "--rotacion",
            `${rotacion}deg`
        );


        const retraso =
            2700 +
            Math.random() * 3500;

        corazon.style.animationDelay =
            `${retraso}ms`;


        grupoCorazones.appendChild(
            corazon
        );

        creados++;
    }
}

/* =====================================================
   INICIO
===================================================== */

actualizarContador();

setInterval(
    actualizarContador,
    1000
);


crearEstrellas();


crearEstrellaFugaz();

const intervaloEstrellaFugaz =
    window.innerWidth <= 800
        ? 4000
        : 2000;

setInterval(
    crearEstrellaFugaz,
    intervaloEstrellaFugaz
);


setTimeout(
    crearFraseCayendo,
    700
);

const intervaloFrases =
    window.innerWidth <= 800
        ? 5000
        : 3000;


setInterval(
    crearFraseCayendo,
    intervaloFrases
);


crearCorazonesArbol();

/* =====================================================
   CONFETI DE CORAZONES
===================================================== */

const capaConfeti =
    document.getElementById(
        "capa-confeti"
    );


const coloresConfeti = [
    "#ff1744",
    "#ff3d68",
    "#ff5c8a",
    "#ff80a5",
    "#e91e63",
    "#d81b60",
    "#ffb0c3",
    "#ffffff"
];


function explosionCorazones(
    x,
    y
) {

    /*
        Primero aparece un corazón
        exactamente donde tocamos.
    */

    const corazonPrincipal =
        document.createElement(
            "span"
        );


    corazonPrincipal.classList.add(
        "corazon-toque"
    );


    corazonPrincipal.textContent =
        "♥";


    corazonPrincipal.style.left =
        `${x}px`;


    corazonPrincipal.style.top =
        `${y}px`;


    capaConfeti.appendChild(
        corazonPrincipal
    );


    /*
        Esperamos un instante.

        Después el corazón principal
        desaparece y nacen las partículas.
    */

    setTimeout(
        () => {

            corazonPrincipal.remove();

            crearParticulasCorazon(
                x,
                y
            );

        },
        300
    );
}


function crearParticulasCorazon(
    x,
    y
) {

    /*
        Cantidad moderada para que
        funcione bien en celular.
    */

    const cantidad =
        24;


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
            "particula-corazon"
        );


        /*
            Algunas partículas serán
            corazones llenos y otras
            pequeños puntos.
        */

        if (
            Math.random() < 0.78
        ) {

            particula.textContent =
                "♥";

        } else {

            particula.textContent =
                "•";
        }


        particula.style.left =
            `${x}px`;


        particula.style.top =
            `${y}px`;


        /*
            Dirección circular.

            Cada partícula recibe
            un ángulo diferente.
        */

        const angulo =
            Math.random()
            *
            Math.PI
            *
            2;


        /*
            Distancia distinta para
            que la explosión no forme
            un círculo perfecto.
        */

        const distancia =
            55
            +
            Math.random() * 105;


        const destinoX =
            Math.cos(angulo)
            *
            distancia;


        /*
            Añadimos caída hacia abajo.

            Esto hace que después de
            explotar parezca confeti.
        */

        const destinoY =
            Math.sin(angulo)
            *
            distancia
            +
            55;


        particula.style.setProperty(
            "--destino-x",
            `${destinoX}px`
        );


        particula.style.setProperty(
            "--destino-y",
            `${destinoY}px`
        );


        /*
            Giro individual.
        */

        const giro =
            -240
            +
            Math.random() * 480;


        particula.style.setProperty(
            "--giro",
            `${giro}deg`
        );


        /*
            Duración ligeramente diferente.
        */

        const duracion =
            0.85
            +
            Math.random() * 0.65;


        particula.style.setProperty(
            "--duracion",
            `${duracion}s`
        );


        /*
            Tamaños diferentes.
        */

        const tamano =
            8
            +
            Math.random() * 13;


        particula.style.fontSize =
            `${tamano}px`;


        /*
            Color individual.
        */

        particula.style.color =
            coloresConfeti[
                Math.floor(
                    Math.random()
                    *
                    coloresConfeti.length
                )
            ];


        capaConfeti.appendChild(
            particula
        );


        /*
            Eliminamos la partícula
            cuando termina.

            Así no acumulamos cientos
            de elementos invisibles.
        */

        setTimeout(
            () => {

                particula.remove();

            },
            (duracion * 1000) + 100
        );
    }
}


/* =====================================================
   CLIC / TOUCH
===================================================== */

/*
    pointerdown funciona con:

    - mouse
    - pantalla táctil
    - stylus

    Por eso no necesitamos registrar
    click y touchstart por separado.
*/

document.addEventListener(
    "pointerdown",
    (evento) => {

        /*
            Evitamos dispararlo cuando
            en el futuro se pulse el
            botón de la sorpresa.
        */

        if (
            evento.target.closest(
                "#boton-sorpresa"
            )
        ) {
            return;
        }


        explosionCorazones(
            evento.clientX,
            evento.clientY
        );
    }
);

botonSorpresa.addEventListener(
    "click",
    () => {

        window.location.href =
            "felicitacion.html";

    }
);

/* =====================================================
   MENSAJE DE ESPERA POR BLOQUES
===================================================== */

const bloquesEspera =
    document.querySelectorAll(
        ".bloque-espera"
    );


function mostrarMensajeEspera() {

    /*
        Dejamos que primero cargue
        visualmente la escena.
    */

    const esperaInicial =
        700;


    /*
        Cada nuevo bloque aparece
        después del anterior.
    */

    const tiempoEntreBloques =
        1700;


    bloquesEspera.forEach(
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


mostrarMensajeEspera();

/* =====================================================
   CIERRE DE LA PÁGINA 1
===================================================== */

const contadorTituloFinal =
    document.getElementById(
        "contador-titulo-final"
    );

const celebracionTarjeta =
    document.getElementById(
        "celebracion-tarjeta"
    );


function lanzarExplosionTarjeta() {

    const simbolos = [
        "♥",
        "✨",
        "★",
        "✦",
        "•"
    ];

    const colores = [
        "#ff4f8b",
        "#ffd166",
        "#ffffff",
        "#ff9ed2",
        "#a98bff",
        "#7ee7ff"
    ];

    const cantidad =
        75;


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
            "particula-tarjeta"
        );

        particula.textContent =
            simbolos[
                Math.floor(
                    Math.random()
                    *
                    simbolos.length
                )
            ];

        particula.style.setProperty(
            "--x",
            `${Math.random() * 100}%`
        );

        particula.style.setProperty(
            "--tamano",
            `${
                8
                +
                Math.random() * 14
            }px`
        );

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

        const duracion =
            2.2
            +
            Math.random() * 1.8;

        particula.style.setProperty(
            "--duracion",
            `${duracion}s`
        );

        particula.style.setProperty(
            "--altura",
            `${
                -180
                -
                Math.random() * 260
            }px`
        );

        particula.style.setProperty(
            "--desplazamiento",
            `${
                -70
                +
                Math.random() * 140
            }px`
        );

        particula.style.setProperty(
            "--giro",
            `${
                -240
                +
                Math.random() * 480
            }deg`
        );

        celebracionTarjeta.appendChild(
            particula
        );

        setTimeout(
            () => {
                particula.remove();
            },
            (duracion * 1000) + 200
        );
    }
}


/*
    Tus bloques aparecen cada 1.7 s.
    Con 5 bloques:

    0.7
    2.4
    4.1
    5.8
    7.5

    Entonces mostramos el título después.
*/

setTimeout(
    () => {

        contadorTituloFinal.classList.add(
            "visible"
        );

    },
    9200
);


/*
    Y poco después lanzamos la celebración.
*/

setTimeout(
    lanzarExplosionTarjeta,
    10300
);