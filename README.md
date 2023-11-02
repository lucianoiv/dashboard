# DASHBOARD - Clima

ENTREGA FINAL <br> [https://lucianoiv.github.io/dashboard/](https://lucianoiv.github.io/dashboard/)<br>

## Actualizacion 2/11

ERROR 500 al cambiar de linea de colectivo. Usando el dropdown para ver la posicion del vehiculo especifico al hacer los cambios, **algunas veces** muestra un ERROR 500, y otras veces la API devuelve un objeto vacio por lo que React muestra un error en las variables.
Resalto **algunas veces** porque efectivamente, al elegir la misma opcion en diferentes ocasiones, los errores son distintos.
Posiblemente se deba a un error del codigo que no logro encontrar.
___


Esta App del Clima fue creada con React durante el curso Argentina Programa extrayendo informacion desde una API del clima [open-meteo.com](https://open-meteo.com/en/docs).

El uso de la misma es muy simple, al cargar la app se ven tres imagenes de algunas ciudades de Argentina, el usuario puede elegir una y ver la temperatura en tiempo real además de la variacion de temperatura del día, entre otras cosas.<br>
Si el usuario lo desea puede volver a la pantalla de seleccion desde el boton **CAMBIAR CIUDAD** y asi cambiar de locacion.<br>
Se utilizó solo la mitad de la ventana HTML ya que en la próxima entrega se agregará otro dashboard, pero en esta nueva instancia será de transporte.

## Experiencia Personal con el Proyecto

En cuanto al desarrollo del mismo, fue un proyecto relativamente mas sencillo, ya que la experiencia anterior con el juego de piedra, papel, tijeras hizo que modularizacion se planificara en pos de el envio de datos desde el componente padre hacia los demás. Sabiendo el camino que iban a tomar los datos solo quedaba obtener los datos de la API, y luego sacarlos del JSON que devolvia la API para plasmarlos en el lugar correcto a traves de props.<br>
Obtener los datos de la API no fue complicado, por suerte la linea de codigo que presento el profesor en la clase fue suficiente para llamar los datos, y traer todo el JSON.

### Troubleshooting

Tuve un problema que en un principio pense que estaba haciendo todo mal, porque la app funcionaba un segundo, pero al recargar se rompia todo. Resulto ser que la demora de unos segundos para traer los datos era suficiente para que la app colapse y devuelva errores que aparentaban ser de codigo, ya que decia que el dato no existia.<br>
Efectivamente era así, el dato no existia, pero en la App, por esos segundos que hacía el fetch.<br>
Para solucionarlo cree un renderizado condicional que solo muestra datos cuando ya los obtuvo de la API, sino, muestra una imagen de "cargando".<br>

#### Error?

Otro error que me apareció en el Renderizado es el siguiente:<br>
___
**React Hook useEffect has a missing dependency: 'ciudad'. Either include it or remove the dependency array  react-hooks/exhaustive-deps**
___

La variable 'ciudad' estaba dentro del **Fetch** por lo que despues de leer un poco lo que me pedia es que escriba la variable en el array del final, o que borre el array. Quedo así:

```js
useEffect(()=>{
    fetch(ciudad)
    .then( resp => resp.json())
    .then( data => {
     setweather(data);})
    .catch( ex => { console.error(ex);})
  })
```
Lo probe de las dos formas, incluyendo la variable en el array o eliminando el array la app no colapso. No se cual será la diferencia, o porque me pedía que agregue la variable ahí dentro.<br>
***
### Eso es todo!

Me gustó el proyecto. Me parece que la práctica esta haciendo que cada vez sea mas facil hacer algo. Incluso los errores hacen que seamos mas cuidadosos para planificar y para prestar atencion a lo que hacemos, como yo que escribi mal las coordenadas y me devolvia el clima de cualquier otro lado. <br>
CSS todavia me esta costando, no me trae dolores de cabeza, pero a la hora de elegir, me cuesta mucho decidir. En el proyecto anterior ocupe mucho tiempo eligiendo colores, imagenes, efectos y fuentes, por lo que para este proyecto me quede con lo basico, aprendi variables en CSS lo que me sirvio para elegir colores de una vez y usarlos despues donde lo necesitase.