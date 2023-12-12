import React from 'react';
import './LeftSidePanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


export default function LeftSidePanel(props) {
    return (
        <div className='leftSide_sidebar'>
            <div>
                <div className="margin-down">
                    <span className='cat'>Category</span>
                </div>
                <ul>
                    <li>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='leftIcon'><FontAwesomeIcon icon={faChevronLeft} size="xs" /></span>
                                <span className='list_icon_value list_hover'>Electronics</span>
                            </a>
                        </span>
                    </li>
                    <li>
                        <span className='list_out_span'>
                            <span className='list_value'>Mobile & Accessories</span>
                        </span>
                    </li>
                    <li className='list_value_margin'>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='list_hover'>Mobile Accessories</span>
                            </a>
                        </span>
                    </li>
                    <li className='list_value_margin'>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='list_hover'>Mobile Broadband Devices</span>
                            </a>
                        </span>
                    </li>
                    <li className='list_value_margin'>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='list_hover'>SIM Cards</span>
                            </a>
                        </span>
                    </li>
                    <li className='list_value_margin'>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='list_hover'>Smartphone & Basic Mobiles</span>
                            </a>
                        </span>
                    </li>
                    <li className='list_value_margin'>
                        <span className='list_out_span'>
                            <a href="#">
                                <span className='list_hover'>Smartwatches</span>
                            </a>
                        </span>
                    </li>
                </ul>

            </div>
            <div>
                <div className='class-margin'>
                    <span className='class-bold'>Made for Amazon Brands</span>
                </div>
                <ul>
                    <li className='margin-down'>
                        <span>
                            <a href="">
                                <div className='custom-checkbox margin-down'>
                                    <label htmlFor="checkbox_content" className='list_hover'>
                                        <input type="checkbox" id="checkbox_content"/>
                                        <span>
                                            <span className='checkbox-height span-margin'>Made for Amazon</span>
                                        </span>
                                    </label>
                                </div>
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <div className='margin-down'>
                    <span className='class-bold'>Amazon Prime</span>
                </div>
                <ul>
                    <li>
                        <span>
                            <a href="">
                                <div className='custom-checkbox margin-down'>
                                    <label htmlFor="checkbox_content1">
                                        <input type="checkbox" name="" id="checkbox_content1" />
                                        <span>
                                            <img src="https://ik.imagekit.io/cg8ipjbwx/amazon-image/prime_img.png?updatedAt=1693747377981" alt="nothing" style={{height:"15px",marginLeft:"5px",marginTop:"2px"}}/>
                                        </span>
                                    </label>
                                </div>
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <div className='margin-down'>
                    <span className='class-bold'>Pay on Delivery</span>
                </div>
                <ul>
                    <li>
                        <span>
                            <a href="">
                                <div>
                                    <label htmlFor="">
                                        <input type="checkbox" />
                                        <span>
                                            <span>Eligible for Pay On Delivery</span>
                                        </span>
                                    </label>
                                </div>
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
