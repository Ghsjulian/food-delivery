"use strict";
class API {
    constructor() {
        this.header = { "Content-Type": "application/json" };
    }
    async postData(url, obj, useCallback) {
        try {
            const fetchData = await fetch(url, {
                method: "POST",
                headers: this.header,
                body: JSON.stringify(obj)
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
    async getData(url, useCallback) {
        try {
            const fetchData = await fetch(url, {
                method: "GET"
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
    async putData(url, obj, useCallback) {
        try {
            const fetchData = await fetch(url, {
                method: "PUT",
                headers: this.header,
                body: JSON.stringify(obj)
            });
            const data = await fetchData.json();
            useCallback(data);
        } catch (e) {
            console.log("Error : ", e);
        }
    }
}

function setCookie(cookieName, cookieValue) {
    const expirationDate = new Date();
    expirationDate.setTime(
        expirationDate.getTime() + 2 * 30 * 24 * 60 * 60 * 1000
    ); // 2 months in milliseconds
    document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
}
function deleteCookie(cookieName) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() - 1);
    document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}; path=/`;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

