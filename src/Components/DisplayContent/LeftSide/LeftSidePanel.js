import React from 'react';
import './LeftSidePanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';


export default function LeftSidePanel(props) {
    return (
        <div className='leftSide_sidebar'>
            <div>
                <div className="category">
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
                    <li>
                        <span>
                            <a href="">
                                <div>
                                    <label htmlFor="checkbox_content">
                                        <input type="checkbox" id="checkbox_content"/>
                                        <i></i>
                                        <span>
                                            <span className='list_hover'>Made for Amazon</span>
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
