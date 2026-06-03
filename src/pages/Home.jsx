import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatusCard from '../components/StatusCard';
import RecentApplications from '../components/RecentApplications';
import Footer from '../components/Footer';

function Home() {
    return(
        <div>
          <div>
            <Navbar />
            <HeroSection />
          </div>

        
          <div className="flex gap-8 justify-center py-8 bg-white m-5">
            <StatusCard title="Total Applied" count="30"/>
            <StatusCard title="Interviews" count="15"/>
            <StatusCard title="Selected" count="5"/>
            <StatusCard title="Rejected" count="3"/>


          </div>
          <div>
            <RecentApplications />
            <Footer />
          </div>
        </div>
    );
}

export default Home;

