import Banner from "~/layouts/components/Banner";
import Feedback from '~/layouts/components/Feedback/Feedback';
import ProductsPages from "~/pages/Home/ProductsPages";


function Home() {
    return (
        <>
            <Banner />
            <ProductsPages />
            <Feedback />
        </>

    );
}

export default Home;
