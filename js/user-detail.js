let url = "http://localhost:8080";

$().ready( ()=>{

    $("#get").click(()=>{
        let userId = $("#userid").val();
        $.getJSON(`${url}/users/${userId}` )
        .done((res)=>{
            let jsonresp = res;
            display(jsonresp);
        })
    });

});

const display = (jsonresp) => {
    let user = jsonresp.data;
    $("#eid").text(user.id);
    $("#eusername").text(user.userName);
    $("#efullname").text(user.firstName + " " + user.lastName);
    $("#epassword").text(user.password);
    $("#ephone").text(user.phoneNumber);
    $("#eemail").text(user.email);
    $("#eisreviewer").text(user.reviewer ? "Yes" : "No");
    $("#eisadmin").text(user.admin ? "Yes" : "No");
}








