//estas variables son para la api de la pagina de clima
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "9a9ce83c2d95af4cdc464ad1cd64abd8";
let difKelvin = 273.15;

//esto es para el boton de busqueda
document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});
//esta funcion es para que cuando se aprete enter en el input de busqueda se busque la ciudad
function fetchDatosClima(ciudad) {
  //las comillas raris estas `` son para meter variables dentro de un string
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((response) => response.json())
    .then((response) => mostrarDatosClima(response));
}
//esta funcion es para mostrar los datos del clima en el html
function mostrarDatosClima(response) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";
  //estas variables son para los datos que se van a mostrar
  const ciudadNombre = response.name;
  const temperatura = response.main.temp;
  const humedad = response.main.humidity;
  const description = response.weather[0].description;
  const icono = response.weather[0].icon;
  //estos son los elementos que se van a mostrar
  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = ciudadNombre;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `the temperature is: ${Math.floor(
    temperatura - difKelvin
  )} ºC`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `The humidity is: ${humedad}%`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `the methodological description is: ${description}`;

  const iconoInfo = document.createElement("img");
  iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;
  //esto es para que se muestren los elementos en el html
  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(descripcionInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
}

alert("hola");
