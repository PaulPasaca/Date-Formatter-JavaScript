const actualFechaParrafo = document.getElementById("current-date");
const opcionesFechaSelec = document.getElementById("date-options");

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const año = date.getFullYear();
const horas = date.getHours();
const minutos = date.getMinutes();


const fechaFormateada = `${dia}-${mes}-${año}`;
actualFechaParrafo.textContent = fechaFormateada;
opcionesFechaSelec.addEventListener("change", () => {
    console.log(opcionesFechaSelec.value)

    switch (opcionesFechaSelec.value) {
        
        case "yyyy-mm-dd":
            actualFechaParrafo.textContent = fechaFormateada
                .split("-")
                .reverse()
                .join("-");
                console.log(actualFechaParrafo)
            break;
        case "mm-dd-yyyy-h-mm":
            actualFechaParrafo.textContent = `${mes}-${dia}-${año} ${horas} Horas ${minutos} Minutos`;
            break;

        default:
            actualFechaParrafo.textContent = fechaFormateada

    }
});
