import {gql} from '../__generated__/gql';

export const SEARCH_POKEMON = gql(`query searchPokemon($name: String! ) {
  pokemons: pokemon_v2_pokemonspecies(
    where: {name: {_ilike: $name}}
    order_by: { name: asc }
  ) {
    name
    id
  }
}`);

export const GET_POKEMON = gql(
  `query getPokemon($id: Int!) {
    species: pokemon_v2_pokemonspecies_by_pk(id: $id) {
      name
      color: pokemon_v2_pokemoncolor {
        name
      }
      habitat: pokemon_v2_pokemonhabitat {
        name
      }
      shape: pokemon_v2_pokemonshape {
        name
      }
      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}} order_by: { version_id: desc } limit: 1){
        flavor_text
      }
      evolutionChain: pokemon_v2_evolutionchain {
        pokemon: pokemon_v2_pokemonspecies(where: {id: {_neq: $id}}) {
          name
          id
        }
      }
      pokemon: pokemon_v2_pokemons(where: {is_default: {_eq: true}}) {
        base_experience
        height
        weight
        typeList: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            id
          }
        }
        statList: pokemon_v2_pokemonstats {
          base_stat
          stat: pokemon_v2_stat {
            name
          }
        }
        abilityList: pokemon_v2_pokemonabilities {
          ability: pokemon_v2_ability {
            name
          }
        }
        sprites: pokemon_v2_pokemonsprites {
          sprites
        }
      }
    }
  }`,
);
