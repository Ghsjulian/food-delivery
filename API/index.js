"use strict";

async function POST_API(url, login_data, call) {
    try {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login_data)
        })
            .then(res => {
                return res.json();
            })
            .then(res_data => {
                call(res_data);
            });
    } catch (error) {
        console.error("Error fetching data : ", error);
    }
}

async function GET_API(url, call) {
    try {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res_data => {
                call(res_data);
            });
    } catch (error) {
        console.error("Error fetching data : ", error);
    }
}

let url = "http://localhost:8080/users/add_user.php";
let apiData = {
    name: "Ghs Julian",
    email: "ghsjulian@gmail.com",
    password: "123456",
    avtar: "__ghs__.png"
};

POST_API(url, apiData, res_data => {
    console.log(res_data);
});

/*
GET_API(url, get_data => {
    console.log(get_data);
});
*/
