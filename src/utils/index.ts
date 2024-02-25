export const typeToEmojiMap = (number: number | undefined): string => {
  const typeEmojiMap: {[key: number]: string} = {
    1: '⚫️',
    2: '🥊',
    3: '🕊️',
    4: '☠️',
    5: '⛰️',
    6: '🪨',
    7: '🐞',
    8: '👻',
    9: '⚙️',
    10: '🔥',
    11: '💧',
    12: '🌱',
    13: '⚡',
    14: '🧠',
    15: '❄️',
    16: '🐉',
    17: '🌑',
    18: '🧚',
    10001: '🤷‍♂️',
    10002: '👤',
  };
  return typeEmojiMap[number || 0] || '';
};
