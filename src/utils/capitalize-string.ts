export const capitalizeString = (str: string) => {
  const arrayOfStrings = str.split(' ');

  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] =
      arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1);
  }

  return arrayOfStrings.join('');
};
