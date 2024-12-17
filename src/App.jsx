import React from "react";
import "./style.css";
import Carts from "./componets/Naruto";




const cart = [
    { 
        title: "Naruto",
        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xg4A8NSLSzH1bv3yBz7WSF4HFu7nJGSXjA&s",
        comment: "ahdlasdklasd",
    },
    {
        title: "Sasuke",
        imgurl: "https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-preview.jpg",
        comment: "asdjasdhalkd",
    },
    {
        title: "Sakura",
        imgurl: "https://w0.peakpx.com/wallpaper/158/991/HD-wallpaper-sakura-haruno-sakura-naruto-anime.jpg",
        comment: "eqhwehk",
    },
];


function Header() {
    return <div className="header">Header</div>
};






const App = () => {
    return (
        <div>
            <Header />
            <div className="NarutoCart">
            {cart.map((item)=>{
            return <Carts title={item.title} img ={item.imgurl} comment = {item.comment}/>
            })}
            </div>
        </div>
    );
};






export default App;
