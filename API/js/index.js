import __api__ from "./Requester.js";

const uploads = document.getElementById("image_uploads");
const img = document.getElementById("face-img");
const imgSrc = img.src;

uploads.onchange = e => {
    const file = e.target;
    __api__.previewImage(file, img);
    __api__.getImgData(imgSrc, imgData => {
        const url = "/products/add-product.php";
        const obj = {
            user_name: "Ghs Julian",
            user_email: "ghsjulian@gmail.com",
            product_img: imgData
        };
        __api__.postData(url, obj, res => {
            alert(res.status);
        });
    });
};
