# Trabajo_2
Trabajo 2 React realizado por David Sanchez.

### Apartado App

 - En esta parte de codigo, lo primero que hemos realizado es la importacion de las librerias correspondientes, ademas de los componentes necesarios
  `NoteList` y `NoteEditor`.

 - Lo siguiente que se ha hecho es definir la aplicacion `App` y sus dos estado:
  
    - notes: almacena las notas.
    - searchTerm: almacena el temrino de busqueda para filtrar las notas.

 - Utilizaremos `usseEffect` para cargar notas de manera local.

 - Emplearemos una funcion denominada `addNote` que permitira agregar nuevas notas y actualizar el almacenamiento local para asi poder guardar mas notas

 - Para realizar una busqueda de notas en la lista se ha implementado una filtracion de notas para eliminar las que son invalidas dependiendo de los criterios de busqueda del usuario, esto se consigue con `searchTerm`

 - Por ultimo, se daria paso al funcionamiento de la pagina web en si, a traves del uso de JSX

### Apartado NoteList.jsx

  - Lo primero que he hecho es importar los componentes y las librerias.

  - Definir la funcion de `NoteList` con sus tres propiedades:
    
    - `notes`: Contiene la lista de notas.
    - `searchTerm`: Al igual que con el codigo App filtra las notas.
    - `onDeleteNote`: Elimina la nota que quiera el ususario.
   
  - Por ultimo, se realiza el filtrado de las notas y se exportan los valores en el componente `NoteList`

## Apartado Note.jsx

  - Lo primero que hemos realizado es la importacion de las librerias necesarias.

  - Lo siguiente que hemos hecho es crear la funcion `note` que posee los argumentos `note`y `onDelete`:
    -  note guarda el contenido y el titulo de la nota.
    -  onDelete elimina el contenido de la nota cuando el ususario le de click al boton de "borrar"
   
## Apartado NoteEditor.jsx

  - Realizamos la importacion de las librerias necesarias

  - Definimos la funcion de `NoteEditor` que toma la propiedad `addNote`.
    - Esta funcion agrega una nueva nota a la lista de notas.
   
  - Con `title`y `content` creamos el titulo de la nota y el contenido de esta.

  - Por ultimo se exporta el valor de NoteEditor
  
