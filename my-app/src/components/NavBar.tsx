import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="shop-name">TheBestShop</div>
            <div className="navigation-content">
                <div>Home</div>
                <div>Products</div>
                <div>Basket</div>
            </div>
        </div>
    )
}

export default NavBar;