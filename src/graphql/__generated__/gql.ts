/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query searchPokemon($name: String! ) {\n  pokemons: pokemon_v2_pokemonspecies(\n    where: {name: {_ilike: $name}}\n    order_by: { name: asc }\n  ) {\n    name\n    id\n  }\n}": types.SearchPokemonDocument,
    "query getPokemon($id: Int!) {\n    species: pokemon_v2_pokemonspecies_by_pk(id: $id) {\n      name\n      color: pokemon_v2_pokemoncolor {\n        name\n      }\n      habitat: pokemon_v2_pokemonhabitat {\n        name\n      }\n      shape: pokemon_v2_pokemonshape {\n        name\n      }\n      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}} order_by: { version_id: desc } limit: 1){\n        flavor_text\n      }\n      evolutionChain: pokemon_v2_evolutionchain {\n        pokemon: pokemon_v2_pokemonspecies(where: {id: {_neq: $id}}) {\n          name\n          id\n        }\n      }\n      pokemon: pokemon_v2_pokemons(where: {is_default: {_eq: true}}) {\n        base_experience\n        height\n        weight\n        typeList: pokemon_v2_pokemontypes {\n          type: pokemon_v2_type {\n            name\n            id\n          }\n        }\n        statList: pokemon_v2_pokemonstats {\n          base_stat\n          stat: pokemon_v2_stat {\n            name\n          }\n        }\n        abilityList: pokemon_v2_pokemonabilities {\n          ability: pokemon_v2_ability {\n            name\n          }\n        }\n        sprites: pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }": types.GetPokemonDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query searchPokemon($name: String! ) {\n  pokemons: pokemon_v2_pokemonspecies(\n    where: {name: {_ilike: $name}}\n    order_by: { name: asc }\n  ) {\n    name\n    id\n  }\n}"): (typeof documents)["query searchPokemon($name: String! ) {\n  pokemons: pokemon_v2_pokemonspecies(\n    where: {name: {_ilike: $name}}\n    order_by: { name: asc }\n  ) {\n    name\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getPokemon($id: Int!) {\n    species: pokemon_v2_pokemonspecies_by_pk(id: $id) {\n      name\n      color: pokemon_v2_pokemoncolor {\n        name\n      }\n      habitat: pokemon_v2_pokemonhabitat {\n        name\n      }\n      shape: pokemon_v2_pokemonshape {\n        name\n      }\n      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}} order_by: { version_id: desc } limit: 1){\n        flavor_text\n      }\n      evolutionChain: pokemon_v2_evolutionchain {\n        pokemon: pokemon_v2_pokemonspecies(where: {id: {_neq: $id}}) {\n          name\n          id\n        }\n      }\n      pokemon: pokemon_v2_pokemons(where: {is_default: {_eq: true}}) {\n        base_experience\n        height\n        weight\n        typeList: pokemon_v2_pokemontypes {\n          type: pokemon_v2_type {\n            name\n            id\n          }\n        }\n        statList: pokemon_v2_pokemonstats {\n          base_stat\n          stat: pokemon_v2_stat {\n            name\n          }\n        }\n        abilityList: pokemon_v2_pokemonabilities {\n          ability: pokemon_v2_ability {\n            name\n          }\n        }\n        sprites: pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }"): (typeof documents)["query getPokemon($id: Int!) {\n    species: pokemon_v2_pokemonspecies_by_pk(id: $id) {\n      name\n      color: pokemon_v2_pokemoncolor {\n        name\n      }\n      habitat: pokemon_v2_pokemonhabitat {\n        name\n      }\n      shape: pokemon_v2_pokemonshape {\n        name\n      }\n      flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}} order_by: { version_id: desc } limit: 1){\n        flavor_text\n      }\n      evolutionChain: pokemon_v2_evolutionchain {\n        pokemon: pokemon_v2_pokemonspecies(where: {id: {_neq: $id}}) {\n          name\n          id\n        }\n      }\n      pokemon: pokemon_v2_pokemons(where: {is_default: {_eq: true}}) {\n        base_experience\n        height\n        weight\n        typeList: pokemon_v2_pokemontypes {\n          type: pokemon_v2_type {\n            name\n            id\n          }\n        }\n        statList: pokemon_v2_pokemonstats {\n          base_stat\n          stat: pokemon_v2_stat {\n            name\n          }\n        }\n        abilityList: pokemon_v2_pokemonabilities {\n          ability: pokemon_v2_ability {\n            name\n          }\n        }\n        sprites: pokemon_v2_pokemonsprites {\n          sprites\n        }\n      }\n    }\n  }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;