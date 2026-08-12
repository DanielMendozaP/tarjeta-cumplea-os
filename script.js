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


/* =====================================================
   LLUVIA DE FRASES
   SOLO EN ESCRITORIO
===================================================== */

/* =====================================================
   LLUVIA DE FRASES
===================================================== */

const esCelularFrases =
    window.innerWidth <= 800;


const intervaloFrases =
    esCelularFrases
        ? 5000
        : 3000;


/*
    Primera frase.
*/

setTimeout(
    crearFraseCayendo,
    esCelularFrases
        ? 1200
        : 700
);


/*
    Frases siguientes.
*/

setInterval(
    crearFraseCayendo,
    intervaloFrases
);


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



/* =====================================================
   PRUEBA CANVAS - VERSIÓN 2.0
===================================================== */

const canvasCorazones =
    document.getElementById(
        "canvas-corazones"
    );

const contextoCorazones =
    canvasCorazones.getContext(
        "2d"
    );


function probarCanvas() {

    const ancho =
        canvasCorazones.clientWidth;

    const alto =
        canvasCorazones.clientHeight;

    const esCelular =
    window.innerWidth <= 800;


    canvasCorazones.width =
        ancho;

    canvasCorazones.height =
        alto;


    contextoCorazones.textAlign =
        "center";

    contextoCorazones.textBaseline =
        "middle";


    const colores = [
        "#ff1744",
        "#ff3158",
        "#ff5271",
        "#ff7189",
        "#ff8da0",
        "#ffb0bd"
    ];


    const cantidadObjetivo =
    esCelular
        ? 180
        : 320;


    const corazones = [];


    const distanciaMinima =
    esCelular
        ? 10
        : 8;


    let intentos =
        0;


    const maxIntentos =
        20000;


    /*
        =================================================
        1. GENERAMOS LOS CORAZONES
        =================================================
    */

    while (
        corazones.length
        <
        cantidadObjetivo
        &&
        intentos
        <
        maxIntentos
    ) {

        intentos++;


        const nx =
            -1.25
            +
            Math.random() * 2.5;


        const ny =
            -1.2
            +
            Math.random() * 2.4;


        /*
            Fórmula matemática
            de la silueta.
        */

        const formula =
            Math.pow(
                nx * nx
                +
                ny * ny
                -
                1,
                3
            )
            -
            nx
            *
            nx
            *
            Math.pow(
                ny,
                3
            );


        if (formula > 0) {
            continue;
        }


        /*
            Parte superior un poco
            más ancha.
        */

        const escalaHorizontal =
    esCelular
        ? (
            ny > 0
                ? 0.27
                : 0.22
        )
        : (
            ny > 0
                ? 0.20
                : 0.1625
        );


        let x =
            ancho / 2
            +
            nx
            *
            ancho
            *
            escalaHorizontal;


        const escalaVertical =
    esCelular
        ? 0.275
        : 0.175;


let y =
    (
        esCelular
            ? alto * 0.39
            : alto * 0.34
    )
    -
    ny
    *
    alto
    *
    escalaVertical;


        /*
            Hendidura superior.
        */

        if (ny > 0.35) {

            const cercaniaCentro =
                Math.max(
                    0,
                    1
                    -
                    Math.abs(nx) / 0.55
                );


            y +=
                cercaniaCentro
                *
                alto
                *
                0.055;
        }


        /*
            Extendemos ligeramente
            la parte inferior.
        */

        if (ny < 0) {

            y +=
                Math.abs(ny)
                *
                alto
                *
                0.025;
        }

/*
    Ajuste vertical exclusivo para PC.
*/

if (!esCelular) {
    y += 55;
}




        /*
            =================================================
            DISTANCIA MÍNIMA
            =================================================
        */

        let demasiadoCerca =
            false;


        for (
            const otro of corazones
        ) {

            const dx =
                x - otro.x;


            const dy =
                y - otro.y;


            const distancia =
                Math.sqrt(
                    dx * dx
                    +
                    dy * dy
                );


            if (
                distancia
                <
                distanciaMinima
            ) {

                demasiadoCerca =
                    true;

                break;
            }
        }


        if (demasiadoCerca) {
            continue;
        }


        /*
            =================================================
            TAMAÑOS
            =================================================
        */

     const probabilidad =
    Math.random();


let tamano;


/*
    Parte inferior:
    corazones medianos para cubrir
    las ramas sin crear un bloque enorme.
*/

if (ny < -0.15) {

    if (probabilidad < 0.55) {

        tamano =
            14
            +
            Math.random() * 7;

    } else {

        tamano =
            20
            +
            Math.random() * 8;
    }

} else {

    /*
        Parte media y superior:
        más variedad y corazones
        ligeramente más grandes.
    */

    if (probabilidad < 0.40) {

        tamano =
            14
            +
            Math.random() * 7;

    } else if (
        probabilidad < 0.82
    ) {

        tamano =
            21
            +
            Math.random() * 9;

    } else {

        tamano =
            30
            +
            Math.random() * 10;
    }
}


        /*
            En vez de dibujarlo,
            guardamos sus datos.
        */

        corazones.push({

            x,
            y,
            tamano,

            color:
                colores[
                    Math.floor(
                        Math.random()
                        *
                        colores.length
                    )
                ],

            /*
                Cada corazón tendrá
                su propio momento
                de aparición.
            */

            retraso:
                Math.random() * 2800

        });
    }


    /*
        =================================================
        2. ANIMACIÓN
        =================================================
    */

    const duracionEntrada =
        450;


    const inicio =
        performance.now();


    /*
        Averiguamos cuándo termina
        el último corazón.
    */

    const ultimoRetraso =
        Math.max(
            ...corazones.map(
                corazon =>
                    corazon.retraso
            )
        );


    function animar(
        tiempoActual
    ) {

        const tiempo =
            tiempoActual
            -
            inicio;


        /*
            Limpiamos únicamente
            el Canvas.

            NO estamos eliminando
            elementos del DOM.
        */

        contextoCorazones.clearRect(
            0,
            0,
            ancho,
            alto
        );


        /*
            Dibujamos todos los que
            ya deben haber comenzado
            a aparecer.
        */

        for (
            const corazon of corazones
        ) {

            const tiempoCorazon =
                tiempo
                -
                corazon.retraso;


            if (
                tiempoCorazon < 0
            ) {
                continue;
            }


            /*
                Progreso:

                0 = acaba de aparecer
                1 = tamaño completo
            */

            const progreso =
                Math.min(
                    tiempoCorazon
                    /
                    duracionEntrada,
                    1
                );


            /*
                Pequeño efecto de
                florecimiento.

                Primero crece un poco
                de más y luego termina
                en su tamaño normal.
            */

            let escala;


            if (progreso < 0.75) {

                escala =
                    (
                        progreso
                        /
                        0.75
                    )
                    *
                    1.12;

            } else {

                const regreso =
                    (
                        progreso
                        -
                        0.75
                    )
                    /
                    0.25;


                escala =
                    1.12
                    -
                    regreso
                    *
                    0.12;
            }


            const tamanoActual =
                corazon.tamano
                *
                escala;


            contextoCorazones.font =
                `${tamanoActual}px Georgia`;


            contextoCorazones.fillStyle =
                corazon.color;


            contextoCorazones.fillText(
                "♥",
                corazon.x,
                corazon.y
            );
        }

const retrasoCentral =
    2300;

        /*
            =================================================
            ¿SEGUIMOS ANIMANDO?
            =================================================

            Solo usamos requestAnimationFrame
            mientras todavía hay corazones
            apareciendo.
        */

        const finalAnimacion =
            Math.max(
                ultimoRetraso
                +
                duracionEntrada,

                retrasoCentral
                +
                550
            );


        if (
            tiempo
            <
            finalAnimacion
        ) {

            requestAnimationFrame(
                animar
            );
        }
    }


    requestAnimationFrame(
        animar
    );
}

probarCanvas();