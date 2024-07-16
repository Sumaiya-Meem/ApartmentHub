import { useState, useEffect } from 'react';
import About from "./About/About";
import Coupon from "./Coupon/Coupon";
import Location from "./Location/Location";
import Slider from "./Slider/Slider";
import NewsletterModal from './NewsletterModal';
import Newsletter from './Newsletter';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const modalShown = sessionStorage.getItem('modalShown');
        if (!modalShown) {
            setShowModal(true);
            sessionStorage.setItem('modalShown', 'true');
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Slider />
            <About />
            <Coupon />
            <Location />
            <NewsletterModal show={showModal} onClose={closeModal} />
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
