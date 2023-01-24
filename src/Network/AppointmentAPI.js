import { clientRequest } from "./clientRequent";

export const GetByDate = (data) => {
    return clientRequest({
        url: "",
        method: "get",
        params: data
    });
};

export const GetByMonth = (data) => {
    return clientRequest({
        url: "",
        method: "get",
        params: data
    });
};

export const SearchAppointment=(data)=>{
    return clientRequest({
        url: "",
        method: "get",
        params: data
    });
}

export const PostAppointment = (data) => {
    return clientRequest({
        url: "",
        method: "post",
        data: data,
    });
};

export const DeleteAppointment = (id) => {
    return clientRequest({
        url: `${id}`,
        method: "delete",
    });
};


export const UpdateAppointment = (id, data) => {
    return clientRequest({
        url: `${id}`,
        method: "put",
        data: data
    });
};

