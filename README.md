# Pokedex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

##API REST.
Una API, o interfaz de programación de aplicaciones, es un conjunto de reglas que definen cómo pueden las aplicaciones o los dispositivos conectarse y comunicarse entre sí. Una API REST es una API que cumple los principios de diseño del estilo de arquitectura REST o transferencia de estado representacional. Por este motivo, las API REST a veces se conocen como API RESTful.

##fetch/Axios.
Axios is a third-party HTTP client library for making network requests. It is promise-based,The response data is available as a JSON by default, hence we can immediately access it using the data property. It uses XMLHttpRequest under the hood, which is one of the reasons for its wide browser support.
Fetch, like Axios, is a promise-based HTTP client.It's important to know that with the Fetch API we can fully reproduce all of the core features of Axios. Actually, Fetch API is a native interface with even more possibilities than Axios. However, because it's low-level, it can often be a little harder to use.

##pokeApi
Se consumieron estadisticas de poderes,id, nombres e imagenes de los primeros 151 pokemones desde la pokeapi de pokemon url: https://pokeapi.co/docs/v2#pokemon 
Pokemon (endpoint)
Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail. https://pokeapi.co/api/v2/pokemon/{id or name}/

##Servicios
La pokeapi cuenta con una lista desplegada de todos los primeros 151 pokemone con caracteristicas como: imagen del pokemon, su estado actual (aire, fuego, agua...). 
Barra de busqueda para encontrar a tu pokemon favorito, luego de encontrarlo podras dar click en el boton see more, donde se podra observar mas detalles del pokemon 
Detalles del pokemon: se encuentran caracteristicas como Hp, Defense, Special-defense,attack,Special-attack y speed, con sus respectivos valores, tambien se podra encontrar la imagen del pokemon y su nombre en japones. Finalmente un boton donde se podra retornar a la pagina principal

##Componentes
Header, Donde se encuentra el logo personas
poke list, muestra la lista de los pokemones
poke search, creado para poder buscar los pokemones requeridos
details, se encuentran una tarjeta con la descripcion del pokemon deseado

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
