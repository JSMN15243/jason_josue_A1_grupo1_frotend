import { clientesService } from "../services/clientesService";

document.addEventListener("DOMContentLoaded",() =>{
  cargarClientes();

  document.getElementById("eventoForm").addEventListener
  ("submit",guardarEvento);
});

function showAlert(message, type = "danger"){
    const container = document.getElementById("alertContainer");
    container.innerHTML = `
    <div>
    `;
}
