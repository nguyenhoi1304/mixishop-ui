import Banner from "~/layouts/components/Banner";
import ProductsPagesItem from "./ProductsPagesItem/";
import { useState } from "react";
import Basket from "./Basket";
import Header from "~/layouts/components/Header";
import Feedback from "~/layouts/components/Feedback";


function Home() {

    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };

    return (
        <>
            <Header setShow={setShow} size={cart.length} />
            <Banner />

            {show ? (
                <ProductsPagesItem handleClick={handleClick} />
            ) : (
                <Basket cart={cart} setCart={setCart} handleChange={handleChange} />
            )}
            <Feedback />
        </>

    );
}

export default Home;
