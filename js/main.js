
/* R2: Creamos nuestro componente personalizado */

class EventCard extends HTMLElement {

    constructor() {

        super();

        // Creamos el Shadow DOM en modo open
        this.attachShadow({ mode: "open" });

    }


    /* R2: Conectamos el componente cuando aparece en la página */

    connectedCallback() {

        // Buscamos el template creado en index.html
        const template = document.getElementById("event-template");

        // Clonamos el contenido del template
        const contenido = template.content.cloneNode(true);

        // Insertamos el contenido dentro del Shadow DOM
        this.shadowRoot.appendChild(contenido);


        /* R3: Obtenemos los datos mediante atributos HTML */

        const titulo = this.getAttribute("title");

        const fecha = this.getAttribute("date");

        const lugar = this.getAttribute("location");

        const cupos = this.getAttribute("spots");

        const imagen = this.getAttribute("image");


        /* R3: Rellenamos los marcadores del template */

        this.shadowRoot.querySelector(".event-title").textContent = titulo;

        this.shadowRoot.querySelector(".event-date").textContent = fecha;

        this.shadowRoot.querySelector(".event-location").textContent = lugar;

        this.shadowRoot.querySelector(".event-spots").textContent = cupos;


        // Colocamos la imagen recibida desde el HTML

        const imagenEvento = this.shadowRoot.querySelector(".event-image");

        imagenEvento.src = imagen;

        imagenEvento.alt = "Imagen de " + titulo;

        // Si una imagen falla, ocultamos el espacio de la imagen
        imagenEvento.addEventListener("error", function () {
            this.style.display = "none";
        });

    }

}


/* R2: Registramos nuestro componente personalizado */

customElements.define("event-card", EventCard);
