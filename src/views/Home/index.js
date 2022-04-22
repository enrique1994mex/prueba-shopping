import React from 'react';
import Cart from '../../containers/Cart';
import ProductList from '../../containers/ProductList';
import Layout from '../../components/Layout';

const Home = () => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Virtual Shop</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;