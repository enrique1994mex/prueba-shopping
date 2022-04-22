import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { getItems, getCurrency, getTotal } from "../../ducks/cart";
import { getUser } from "../../ducks/user";

const PurchaseSummary = ({items, total, currency, userInfo}) => {

     const navigate = useNavigate();

     useEffect(() => {

        if (!userInfo) {
            navigate('/login');
        }
    }, [userInfo, navigate])
    
    return (
        <Layout>
            <div className="container">
                <h3 className="purchase-title">Compras</h3>
                <div className="row">
                    <div className="col-sm-8 purchase-items">
                        <div className="purchase-items__titles">
                            Name
                        </div>
                        <div className="purchase-items__titles">
                            Price
                        </div>
                        {items.length > 0 && (
                           <div className="purchase-items__products">
                                {
                                    items.map(item => (
                                        <div className="purchase-items__products__name" key={item.id}>{item.name}</div>
                                    ))
                                }
                           </div>
                        )}
                        {items.length > 0 && (
                           <div className="purchase-items__products">
                                {
                                    items.map(item => (
                                        <div key={item.id}>{item.price}</div>
                                    ))
                                }
                           </div>
                        )}
                    </div>
                    <div className="col-sm-4 purchase-total">
                        <div className="purchase-total__price">
                            Pago total: {total} {currency}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

PurchaseSummary.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    userInfo: PropTypes.object,
}

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        currency: getCurrency(state, props),
        total: getTotal(state, props),
        userInfo: getUser(state, props)
    }
}

export default connect(mapStateToProps)(PurchaseSummary);
