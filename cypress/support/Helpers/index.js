import {
  uniqueNamesGenerator,
  colors,
  animals,
  starWars,
} from "unique-names-generator";

export const SignUpEmail = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result + `@gmail.com`;
};

export const SignUpFullName = () => {
  const signUpFirstName = uniqueNamesGenerator({ dictionaries: [colors] });
  const signUpLasttName = uniqueNamesGenerator({ dictionaries: [colors] });
  const signUpFullName = signUpFirstName + ` ` + signUpLasttName;
  return signUpFullName;
};

export const SignUpPassword = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const userCompanyName = () => {
  const signUpFirstCompanyName = uniqueNamesGenerator({
    dictionaries: [animals],
  });
  const signUpLastCompanyName = uniqueNamesGenerator({
    dictionaries: [colors],
  });
  const signUpCompanyFullName =
    signUpFirstCompanyName + ` ` + signUpLastCompanyName;
  return signUpCompanyFullName;
};

export const userProjectName = () => {
  const userProjectName = uniqueNamesGenerator({ dictionaries: [starWars] });
  return userProjectName;
};
