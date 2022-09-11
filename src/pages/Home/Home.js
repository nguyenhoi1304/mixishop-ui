import Banner from "~/layouts/components/Banner";
import Feedback from '~/layouts/components/Feedback/Feedback';
import ProductsPagesItem from "./ProductsPagesItem/";
import data from '~/fakeApi/HomeProductsPageApi'
import { useState } from "react";
import Basket from "./Basket";

function Home() {
    const {products} = data

    const [cartItems, setCarItems] = useState([])

    const onAdd = (product) => {

        const exits = cartItems.find((x) => x.id === product.id);
        
        if(exits) {
            setCarItems(cartItems.map((x) => x.id === product.id ? {...exits, qty: exits.qty + 1} : x))
            console.log(exits)
        } else{
            setCarItems([...cartItems, {...product, qty: 1}]);
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCarItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCarItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    
    return (
        <>
            <Banner />
            <ProductsPagesItem onAdd={onAdd} products={products}></ProductsPagesItem>
            <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
            <Feedback />
        </>

    );
}

export default Home;
