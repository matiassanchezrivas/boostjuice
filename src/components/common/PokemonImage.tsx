import React, {useState} from 'react';

import {Image} from 'react-native';

interface PokemonImageProps {
  id: number;
  isBack?: boolean;
  size?: number;
}

export const PokemonImage: React.FC<PokemonImageProps> = ({
  id,
  isBack,
  size = 50,
}) => {
  const [error, setError] = useState(false);
  const baseUri =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const uri = `${isBack ? 'back/' : ''}${id}.png`;

  if (error) {
    return null;
  }
  return (
    <Image
      width={size}
      height={size}
      source={{
        uri: baseUri + uri,
      }}
      onError={() => setError(true)}
    />
  );
};
