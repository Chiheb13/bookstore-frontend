import { useEffect } from 'react';
import useAuthContext from '../../context/Authcontext';
import Navbar from '../../components/Navbar'; 
import Welcome from './Welcome'; 
import "../../styles/Home.css";
import "@fontsource/righteous"; 
import Logo from './Logo';
import Footer from '../../components/Footer';
import BookCarousel from './Carousel';
import BrowseByCategory from '../categories/CategorySection';

const Home = () => {
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    return (
        <div className='bg-[#F5FFFF]'>
            <div className="flex bg-[#F5FFFF] items-center">
                <div className="p-4 bg-[#F5FFFF] text-white">
                    <Navbar />
                </div>
            </div>

            <main className="min-h-screen">
                <section className="relative py-12 px-8">
                    {/* Welcome section */}
                    <Welcome />
                </section>

                <section className="py-12 px-6">
                    {/* BookCarousel section */}
                    <BookCarousel />
                </section>
                <section className="py-12 px-6">
                    {/* BookCarousel section */}
                    <BrowseByCategory />
                </section>
            </main>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
