import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';
import Tracks from './pages/Tracks';
import Artists from './pages/Artists';
import ArtistDetails from './pages/ArtistDetails';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to reset scroll on route change
function ScrollToTopWrapper() {
  return <ScrollToTop />;
}

function App() {
  return (
    <Layout>
       <ScrollToTopWrapper /> { /* Will implement ScrollToTop component or inline logic */ }
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/albums" element={<Albums />} />
         <Route path="/albums/:id" element={<AlbumDetails />} />
         <Route path="/tracks" element={<Tracks />} />
         <Route path="/artists" element={<Artists />} />
         <Route path="/artists/:id" element={<ArtistDetails />} />
         <Route path="/news" element={<News />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />
       </Routes>
    </Layout>
  )
}

export default App
