import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails'; // or components/AlbumDetails depending on your folder structure
import Tracks from './pages/Tracks';
import TrackDetails from './pages/TrackDetails'; // Added!
import Artists from './pages/Artists';
import ArtistDetails from './pages/ArtistDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';   // Added!
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

function ScrollToTopWrapper() {
  return <ScrollToTop />;
}

function App() {
  return (
    <Layout>
       <ScrollToTopWrapper />
       <Routes>
         <Route path="/" element={<Home />} />
         
         <Route path="/albums" element={<Albums />} />
         <Route path="/albums/:id" element={<AlbumDetails />} />
         
         <Route path="/tracks" element={<Tracks />} />
         <Route path="/tracks/:id" element={<TrackDetails />} /> 
         
         {/* <Route path="/artists" element={<Artists />} />
         <Route path="/artists/:id" element={<ArtistDetails />} /> */}
         
         <Route path="/news" element={<News />} />
         <Route path="/news/:id" element={<NewsDetails />} /> 
         
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
       </Routes>
    </Layout>
  )
}

export default App;