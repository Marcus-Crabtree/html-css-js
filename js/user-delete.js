let url = "http://localhost:8080";

let user = null;

$().ready(()=>{

$("#get").click(()=>{
    getUser();
});

$("#delete").click(()=>{
    remove(user);

});

});

const remove = (user) => {
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
        })
}

const getUser = () => {
    let userId = $("#userid").val();
    userGetByPK(userId);
}

const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
    .done((res)=> {
        user = res.data;
            display(user);
            console.debug("JR: ", res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const display = (user) => {
    $("#eid").val(user.id);
    $("#eusername").val(user.userName);
    $("#efullname").val(user.firstName + " " + user.lastName);
    $("#epassword").val(user.password);
    $("#ephone").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("#eisreviewer").val(user.reviewer ? "Yes" : "No");
    $("#eisadmin").val(user.admin ? "Yes" : "No");
}