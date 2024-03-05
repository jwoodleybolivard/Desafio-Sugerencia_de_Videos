// Construccion patron modulo
let iife = (function () {
    // Función privada para insertar el video en el documento HTML
    // CReo 2 Funciones, publico y otra privada (sumanumero, es un Obj.)
    function privada(url, id) {
        id.setAttribute("src", url);
    }
    // Función pública para insertar el video con parámetros (url, id)
    // Retorno de las funciones públicas
    return {
        publica: (url, id) => privada(url, id),
    };
})();
// Definiendo la clase Padre
const Multimedia = (() => {
    let url;
    class Multimedia {
        constructor(_url) {
            url = _url;
        }
        get _url() {
            return url;
        }
        setInicio(tiempoVideo) {
            url = `${this._url}?start=${tiempoVideo}`;
            return "Este método es para realizar un cambio en la URL del video";
        }
    }
    return Multimedia;
})();
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    playMultimedia() {
        iife.publica(this._url, this.id);
    }
    setInicio(tiempo) {
        this.id.setAttribute("src", `${this._url}?start=${tiempo}`);
    }
}
//Vamos a instanciar una clase
const idMusica = document.getElementById("musica");
let musica = new Reproductor(
    "https://www.youtube.com/embed/qDpRHEfbhTM?si=pOQW1NV0Fnm9Oq95",
    idMusica
);
musica.playMultimedia();
const idPelicula = document.getElementById("peliculas");
let pelicula = new Reproductor(
    "https://www.youtube.com/embed/4dZs8JX1XYY",
    idPelicula
);
pelicula.playMultimedia();
pelicula.setInicio(160);
const idSeries = document.getElementById("series");
let series = new Reproductor(
    "https://www.youtube.com/embed/kz0WB1PtPyo?si=o9_T3WrEiTLVgBDR",
    idSeries
);
series.playMultimedia();