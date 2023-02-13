import { memo } from 'react';
import Product from './Product';

function ProductList({ item , handleClick}) {
    
    return (

        <div className="col-xs-6 col-sm-4 col-md-3">
            <Product  item= {item} handleClick={handleClick}/>
        </div>
        
    );
}

export default memo(ProductList);