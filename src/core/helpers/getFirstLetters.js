export const getFirstLetters = (fullName) => {
 const splitName = fullName.trim().split(" ");

  if(splitName.length >= 2){
    const firstLetter = splitName[0][0].toUpperCase();
    const lastLetter = splitName[1][0].toUpperCase();
    return `${firstLetter}${lastLetter}`
  }
};
