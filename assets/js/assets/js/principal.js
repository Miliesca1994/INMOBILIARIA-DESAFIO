import { propiedadesVenta, propiedadesAlquiler } from "./arrays.js";

// Contenedores
const contenedorVenta = document.querySelector("#venta .row");
const contenedorAlquiler = document.querySelector("#alquiler .row");

// Función para crear las tarjetas
function crearTarjetas(propiedades, contenedor, cantidad) {

  let html = "";

  for (let i = 0; i < cantidad; i++) {

    const propiedad = propiedades[i];

    html += `
      <div class="col-md-4 mb-4">

        <div class="card shadow h-100">

          <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="${propiedad.nombre}"
          >

          <div class="card-body">

            <h5 class="card-title">
              ${propiedad.nombre}
            </h5>

            <p class="card-text">
              ${propiedad.descripcion}
            </p>

            <p>
              <i class="fas fa-map-marker-alt"></i>
              ${propiedad.ubicacion}
            </p>

            <p>
              <i class="fas fa-bed"></i>
              ${propiedad.habitaciones} Habitaciones

              |

              <i class="fas fa-bath"></i>
              ${propiedad.banos} Baños
            </p>

            <p class="fw-bold text-success">
              $ ${propiedad.costo}
            </p>

            ${
              propiedad.smoke
                ? `
                  <p class="text-success">
                    <i class="fas fa-smoking"></i>
                    Permitido fumar
                  </p>
                `
                : `
                  <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i>
                    No se permite fumar
                  </p>
                `
            }

            ${
              propiedad.pets
                ? `
                  <p class="text-success">
                    <i class="fas fa-paw"></i>
                    Mascotas permitidas
                  </p>
                `
                : `
                  <p class="text-danger">
                    <i class="fas fa-ban"></i>
                    No se permiten mascotas
                  </p>
                `
            }

          </div>

        </div>

      </div>
    `;
  }

  contenedor.innerHTML = html;
}

// Mostrar solo 3 propiedades
crearTarjetas(propiedadesVenta, contenedorVenta, 3);
crearTarjetas(propiedadesAlquiler, contenedorAlquiler, 3);