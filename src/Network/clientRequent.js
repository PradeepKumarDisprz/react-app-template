import axios from "axios";
export const BaseURL = "http://localhost:5169/v1/api/appointments";

const defaultHeader = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export const clientRequest = async (input) => {
  const client = axios.create({
    baseURL: `${BaseURL}/`,
    headers: defaultHeader(),
  });

  const onSuccess = (response) => {
  
    return response;
  };
  const onError = (error) => {

    return(error);
  };

  return client(input).then(onSuccess).catch(onError);
};
