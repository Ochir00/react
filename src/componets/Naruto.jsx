const Carts = (items) => {
    return (
        <div className="cart">
            <p>{items.title}</p>
            <img  src={items.img}/>
            <h2> {items.comment} </h2>
        </div>
    );
};
export default Carts;