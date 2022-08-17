const stringToColor = (str: string) => {
  let hash = 0;
  let i;

  for (i = 0; i < str.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-bitwise
    const val = (hash >> (i * 8)) & 0xff;
    color += `00${val.toString(16)}`.slice(-2);
  }

  return color;
};

export default stringToColor;
