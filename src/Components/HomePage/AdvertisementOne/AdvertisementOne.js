import React from 'react';
import './AdvertisementOne.css';

function AdvertisementOne(props) {
    return (
        <div className='advertisementOne_main'>
            <div className='advertisementOne_header'>
                Up to 70% off | Electronics clearance store
            </div>
            <div className='advertisementOne_image'>
                <img src="https://ik.imagekit.io/cg8ipjbwx/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1692620788154" alt="" width="300px"  />
            </div>
            <div className='advertisementOne_footer'>
                See more
            </div>
        </div>
    )
}

export default AdvertisementOne