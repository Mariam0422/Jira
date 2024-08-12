export const getFirstLetters = (fullName) => {  
const splitName = fullName.trim().split(" ");
return splitName.map((name) => name[0]?.toUpperCase()).join(" "); 
};
