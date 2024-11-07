const wrapper= document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem")

const products= [
    {
        id:1,
        title: "Air Force",
        price: 200,
        colors: [
            {
                code: "black",
                img: "./imgag/AIR+FORCE+1+SP-removebg-preview.png",
            },
            {
                code: "darkblue",
                img: "./imgag/AIR+FORCE+1+SP-removebg-preview.png",
            },
        ],
    },
    {
        id:2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            img: "./imgag/jordan-removebg-preview.png",
          },
        ],
    },
    {
        id:3,
        title: "Blazer",
        price: 100,
        colors: [
            {
                img: "./imgag/W+BLAZER+MID+_77-removebg-preview.png",
            },
        ],
    },
    {
        id:4,
        title: "Crater",
        price:120,
        colors: [
            {
                img:"./imgag/crater-removebg-preview.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 110,
        colors: [
            {
                img:"./imgag/hippie2-removebg-preview.png",
            },
        ],
    }
]

let choosenProduct= products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
// const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    // change the current slide
    wrapper.style.transform=`translateX(${-100*index}vw)`;

    // change the chosen product
    choosenProduct=products[index];

    //change texts of current product
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$" + choosenProduct.price;
    currentProductImg.src=choosenProduct.colors[0].img;
  });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white";
        size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";

    });
});

const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})
