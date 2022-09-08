import Banner from "~/layouts/components/Banner";
import Feedback from '~/layouts/components/Feedback/Feedback';
import ProductsPagesItem from "./ProductsPages/ProductsPagesItem";

function Home() {

    return (
        <>
            <Banner />
            <ProductsPagesItem />

            <Feedback />
        </>

    );
}

export default Home;
