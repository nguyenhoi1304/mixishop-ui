import React from 'react'
import classNames from 'classnames/bind';
import styles from './Search.module.scss';


const cx = classNames.bind(styles);

const MenuItem = (dataSearch) => {
    const data = dataSearch.dataSearch
  return (
            <div className={cx('wrapper', 'col-xs-12 col-sm-12 col-md-12')}>
             {data.map((result) => (
                <div className={cx('menuItem')} key={result.id}>
                  <div>
                    <img 
                    style={{width: '90px',height:'90px', borderRadius:'50%', objectFit: 'cover'}} 
                    alt='' 
                    src={result.img}/>
                  </div>
                  <div>
                    <p>{result.describe}</p>
                  </div> 
                  <div>
                    <p>{result.price}</p>
                  </div>
             </div>
             )) }
             
            
            </div>
    
  )
}

export default MenuItem
