import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import "./Navigation.css";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className='NavBar'>
                    <div className="left" type='button'>
                        <div className='Nav_Image' type='button' onClick={() => { alert("Welcome to ProCart") }}></div>
                        {/* <span className='in' type='button'>.in</span> */}
                    </div>
                    <div className="navbar_locator" type='button' onClick={() => console.log('Hello World')}>
                        <div className="location_image"><FontAwesomeIcon icon={faLocationDot} size="lg" /></div>
                        <div className='address_hello'>
                            <span className='hello'>Hello</span><br />
                            <span className='location'>Select your address</span>
                        </div>
                    </div>
                    <div className='navbar_input_search'>
                        {/* <div>
                            <select name="" id="options">
                                <option selected="selected" value="search-alias=aps">All Categories</option>
                                <option value="search-alias=alexa-skills">Alexa Skills</option>
                                <option value="search-alias=amazon-devices">Devices</option>
                                <option value="search-alias=amazon-pharmacy">Pharmacy</option>
                                <option value="search-alias=appliances">Appliances</option>
                                <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                                <option value="search-alias=audible">Audible Audiobooks</option>
                                <option value="search-alias=baby">Baby</option>
                                <option value="search-alias=beauty">Beauty</option>
                                <option value="search-alias=stripbooks">Books</option>
                                <option value="search-alias=automotive">Car &amp; Motorbike</option>
                                <option value="search-alias=apparel">Clothing &amp; Accessories</option>
                                <option value="search-alias=collectibles">Collectibles</option>
                                <option value="search-alias=computers">Computers &amp; Accessories</option>
                                <option value="search-alias=electronics">Electronics</option>
                                <option value="search-alias=furniture">Furniture</option>
                                <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
                                <option value="search-alias=gift-cards">Gift Cards</option>
                                <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
                                <option value="search-alias=hpc">Health &amp; Personal Care</option>
                                <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                                <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                                <option value="search-alias=jewelry">Jewellery</option>
                                <option value="search-alias=digital-text">Kindle Store</option>
                                <option value="search-alias=luggage">Luggage &amp; Bags</option>
                                <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                                <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                                <option value="search-alias=popular">Music</option>
                                <option value="search-alias=mi">Musical Instruments</option>
                                <option value="search-alias=office-products">Office Products</option>
                                <option value="search-alias=pets">Pet Supplies</option>
                                <option value="search-alias=instant-video">Prime Video</option>
                                <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                                <option value="search-alias=software">Software</option>
                                <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
                                <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
                                <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                                <option value="search-alias=toys">Toys &amp; Games</option>
                                <option value="search-alias=under-ten-dollars">Under ₹500</option>
                                <option value="search-alias=videogames">Video Games</option>
                                <option value="search-alias=watches">Watches</option>
                            </select>
                        </div> */}
                        <div className=''>
                            <input type="text" className='navbar_input' placeholder='Search ProCart.in' />
                        </div>
                        <div className="search_image" type="button" onClick={() => alert(`You've clicked the search button`)}><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></div>
                    </div>
                    <div className="right">
                        <div className='language'>
                            <div className='language_used'>English</div>
                        </div>
                        <div className='signin_hello'>
                            <div className='hello_text'>Hello, sign in</div>
                            <div className="account_list">Account & Lists</div>
                        </div>
                        <div className='returns_orders'>
                            <div className='returns'>Returns</div>
                            <div className='orders'>& Orders</div>
                        </div>
                        <div className='cart'>
                            <div className='cart_image'></div>
                            <div className="cart_item">0</div>
                            <div className="cart_text">Cart</div>
                        </div>
                    </div>
                </div>
                {/* <div className="navbar_footer"> */}
                    {/* <div className="three_icon_all">
                    <div className="icon"><FontAwesomeIcon icon={faBars} /></div>
                    <div className="all">All</div>
                    </div> */}
                    {/* <div className="navbar_footer_text">Amazon miniTV</div> */}
                    {/* <div className="navbar_footer_text">Sell</div>
                    <div className="navbar_footer_text">Best Sellers</div>
                    <div className="navbar_footer_text">Today's Deals</div>
                    <div className="navbar_footer_text">Mobiles</div>
                    <div className="navbar_footer_text">New Releases</div>
                    <div className="navbar_footer_text">Customer Service</div> */}
                    {/* <div className="navbar_footer_text">Prime</div> */}
                    {/* <div className="right_footer_image"></div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default NavBar;