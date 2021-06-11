#Objetivo:
Definir una API para gestionar nuestro equipo Pokémon

#Acciones:

- Identificarnos
- Añadir pokémons a nuestro equipo
- Eliminar pokémons de nuestro equipo
- Consultar información de nuestro equipo
- Intercambiar el orden de nuestros Pokémons

#REST Design:

- Añadir Pokémon: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémon: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokémons: PUT /team
- Sistema de credenciales
