// Function to create gallery

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const imgselected = document.getElementById("imgselect");

const imgindex = [1,2,3,4,5,6,]

const selectedindex = null;


imgindex.forEach(i => {
    const image = document.createElement("img");
    image.src = `../img/g-${i}.jpg`;
    image.alt = `gallery image ${i}`;
    image.classList.add("galleryImg");


    image.addEventListener("click", () => {
        popup.style.transform = "translateY(0)";
        imgselected.src = `../img/g-${i}.jpg`;
        imgselected.alt = `gallery image ${i}`;

    })
        
     gallery.appendChild(image);

}
)

popup.addEventListener("click", () => {
    popup.style.transform = "translateY(-100%)";
    popup.src = "";
    popup.alt = "";

})