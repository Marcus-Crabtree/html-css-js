
const userGetAll = () => {


}

const userGetByPK = (id) => {
     return $.getJSON(`${url}/users/${id}`)
}

const userCreate = (user) => {
    $.ajax({
        method: "POST", 
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=>{
            console.log("User added!",res);
        })
        .fail((error)=>{
            console.error(error);
        })
}


const userChange = (user) => {
    $.ajax({
        method: "PUT", 
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=>{
            console.log("User updated!",res);
        })
        .fail((error)=>{
            console.error(error);
        })
}

const userRemove = (user) => {
    $.ajax({
        method: "DELETE", 
        url: `${url}/users/${user.id}`,
        //data: JSON.stringify(newUser),
        contentType: "application/json"
    })
        .done((res)=>{
            console.log("User deleted!",res);
        })
        .fail((error)=>{
            console.error(error);
        });
}
    







