import React, { Component } from 'react';
import './MainPage.css';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImages: [
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image.jpg?updatedAt=1693563800522',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image4.jpg?updatedAt=1693563800610',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image2.jpg?updatedAt=1693563800539',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image5.jpg?updatedAt=1693563800505',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_image_image.jpg?updatedAt=1693563800526',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image3.jpg?updatedAt=1693563800480',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image6.jpg?updatedAt=1693563800488',
                'https://ik.imagekit.io/cg8ipjbwx/amazon-image/bg_amazon_image7.jpg?updatedAt=1693570283299',
                // Add more image URLs here
            ],
            currentImageIndex: 0,
        };
    }

    componentDidMount() {
        this.changeBackgroundInterval = setInterval(this.changeBackground, 5000); // Change image every 5 seconds
    }

    componentWillUnmount() {
        clearInterval(this.changeBackgroundInterval);
    }

    changeBackground = () => {
        this.setState((prevState) => {
            const nextIndex = (prevState.currentImageIndex + 1) % this.state.backgroundImages.length;
            return {
                currentImageIndex: nextIndex,
            };
        });
    };

    render() {
        const { backgroundImages, currentImageIndex } = this.state;
        return (
                <div className="MainPage" style={{backgroundImage: `url(${backgroundImages[currentImageIndex]})`,transition: 'background-image 1s ease-in-out',}}>
                    <div className='advertisement' style={{paddingTop:"260px",display:"flex",flexWrap:"wrap"}}>
                        <AdvertisementOne/>
                        <AdvertisementFour/>
                        <AdvertisementOne/>
                        <AdvertisementFour/>
                        <AdvertisementOne/>
                        <AdvertisementFour/>
                        <AdvertisementOne/>
                        <AdvertisementOne/> 
                    </div>
                    <div></div>
                </div>
                
        );
    }
}

export default MainPage;
