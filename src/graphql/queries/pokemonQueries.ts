import {gql} from '../__generated__/gql';

export const GET_ALL_POKEMON = gql(`query allPokemon {
  pokemons: pokemon_v2_pokemonspecies(
    order_by: { name: asc }
  ) {
    name
    id
  }
}`);

export const SEARCH_POKEMON = gql(`query searchPokemon($input: String!) {
  pokemons: pokemon_v2_pokemonspecies(
    where: { name: { _ilike: "%$input%" } }
    order_by: { name: asc }
  ) {
    name
    id
  }
}`);

export const GET_POKEMON = gql(
  `query getPokemon {
    species: pokemon_v2_pokemonspecies_by_pk(id: 24) {
      name
      base_happiness
      has_gender_differences
      color: pokemon_v2_pokemoncolor {
        name
      }
      habitat: pokemon_v2_pokemonhabitat {
        name
      }
      shape: pokemon_v2_pokemonshape {
        name
      }
      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9} version_id: {_eq: 7}} ) {
        flavor_text
      }
      pokemon: pokemon_v2_pokemons(where: {is_default: {_eq: true}}) {
        is_default
        base_experience
        height
        weight
        typeList: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
        statList: pokemon_v2_pokemonstats {
          stat: pokemon_v2_stat {
            game_index
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
