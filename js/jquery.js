let url = "http://localhost:8080";

let jsonresp = [];

$().ready( ()=>{
    
    $.getJSON(`${url}/users/`)
        .done( (res)=>{
            jsonresp = res;
            display();
            console.log(res);
        })
        .fail( (error)=>{
            console.error(error);
        });

} );

const display = () => {
    let tbody = $("tbody");
    for(let user of jsonresp.data) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        let tdUsername = $(`<td>${user.userName}</td>`);
        let tdPassword = $(`<td>${user.password}</td>`);
        let tdFullname = $(`<td>${user.firstName} ${user.lastName}</td>`);
        let tdPhonenumber = $(`<td>${user.phoneNumber}</td>`);
        let tdEmail = $(`<td>${user.email}</td>`);
        let tdIsreviewer = $(`<td>${user.reviewer? "Yes" : "No"}</td>`);
        let tdIsadmin = $(`<td>${user.admin ? "Yes" : "No"}</td>`);
        tr.append(tdId);
        tr.append(tdUsername);
        tr.append(tdPassword);
        tr.append(tdFullname);
        tr.append(tdPhonenumber);
        tr.append(tdEmail);
        tr.append(tdIsreviewer);
        tr.append(tdIsadmin);
        tbody.append(tr);

    }
}