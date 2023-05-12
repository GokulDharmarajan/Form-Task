function insert() {
    console.log("insert button clicked");
    fetch("http://localhost:3000/insert", {
        method: "POST",
        body: JSON.stringify({
            cname: document.getElementById("cname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    location.reload();
}

//================================== GET METHOD =====================================
fetch("http://localhost:3000/get")
    .then((res) => res.json())
    .then((user) => {
        html = "";
        user.forEach((e) => {
            html += `<tr>
                          <td>${e.id}</td>
                          <td>${e.cname}</td>
                          <td>${e.email}</td>
                          <td >${e.message}</td>
                          <td>
                             <button onclick="edit('${e.id}','${e.cname}','${e.email}','${e.message}')" class="btn btn-success mx-auto mt-2 mb-2"> <i class="fa-solid fa-pen-to-square "></i></button> 
                             <button onclick="deletedata('${e.id}')"class="btn btn-danger mx-auto mt-2 mb-2"> <i class="fa-solid fa-trash"></i></i></button> 
                           </td>
                            
                   </tr>`;
        });
        console.log(html);
        document.getElementsByTagName("tbody")[0].innerHTML = html;
    })
    .catch((err) => {
        console.log("DDD", err);
    });

//================================== update =====================================
function updatedata(id) {
    console.log("insert button clicked");
    fetch("http://localhost:3000/update", {
        method: "put",
        body: JSON.stringify({
            id: id,
            cname: document.getElementById("cname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    location.reload();
}

//================================== Edit =====================================
function edit(id, cname, email, message) {
    document.getElementById("cname").value = cname;
    document.getElementById("email").value = email;
    document.getElementById("message").value = message;
    document.getElementById("update").setAttribute("onclick", "updatedata(" + id + ")");
    document.getElementById("add").style = "display:none";
    document.getElementById("update").style = "display:block";
}

//================================== Delete =====================================

function deletedata(id, is_active) {
    fetch("http://localhost:3000/delete", {
        method: "put",
        body: JSON.stringify({
            id: id,
            is_active: 0,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
    location.reload();
}
