<center>
<h1>PHP Rest API</h1><br>
<h2>Developer : Ghs Julian</h2>
<p>
This is a PHP Rest API created by using MySQL.
</p>

</center><br>
<h2>Documention : </h2>
<p>
Read this documents before working with this API.This example has created for vanilla javascript. We can also use it in our react application. It will act same like axios.
</p><br><br>
<h3>Login Method : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/login/";
let data = {
   user_email : "ghsjulian@gmail.com",
   user_password : "123456"
};
api.postData(url, data, res => {
    console.log(res);
});
````

<br>
<h3>SignUp Method : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/signup/";
let data = {
   user_name : "Ghs Julian",
   user_email : "ghsjulian@gmail.com",
   user_password : "123456"
};
api.postData(url, data, res => {
    console.log(res);
});
````

<h3>Add Product : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/products/add-product.php";
let data = {
    product_name : "Biriyani Chicken Coop",
    product_img : "product_1.jpg",
    product_price : "150TK BDT",
    product_description: "This is chicken biryani. it's tasty and so much delicious.",
    category : "Biriyani"
};
api.postData(url, data, res => {
    console.log(res);
});
````

<br>
<h3>Edit Product : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/products/edit-product.php";
let data = {
  product_id : 3,
    product_name: "Update Biriyani Chicken Coop",
    product_img: "update_product_1.jpg",
    product_price: "150TK BDT update",
    category: "Biriyani_update",
    product_description:
        "update This is chicken biryani  its tasty and so much delicious."
};
api.postData(url, data, res => {
    console.log(res);
});

````

<br>
<h3>Delete Product : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/products/delete-product.php?product_id=${3}";

api.getData(url, res => {
    console.log(res);
});
```



<br>
<h3>Get Single Product : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/products/get-product.php?product_id=${id}";

api.getData(url, res => {
    console.log(res);
});
```

<br>
<h3>Get All Product : </h3>

```javascript
import {__API__} from "./file_location";

var api = new API();
let url = "http://localhost:8080/products/all-products.php";

api.getData(url, res => {
    console.log(res);
});
```

