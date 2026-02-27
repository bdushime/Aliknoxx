import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' }, 
        { name: 'Services', path: '/#services' }, 
        { name: 'Blog', path: '/news' },
        { name: 'Tracks', path: '/tracks' },
        { name: 'Albums', path: '/albums' },
        { name: 'Contact Us', path: '/contact' }
    ];

    // Helper to determine active state
    const isActive = (path) => {
        if (path.startsWith('/#')) return false;
        return location.pathname === path;
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
            <div className="flex items-center justify-between px-4 lg:px-8 border-b border-white/10 lg:border-none">
                
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="Logo" className="h-8 lg:h-10" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        link.path.startsWith('/#') ? (
                            <a 
                                key={link.name} 
                                href={link.path} // FIX: Kept the full /# path here
                                className="nav-link text-white font-medium text-lg uppercase tracking-wider hover:text-[#B01E9D] transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                className={`nav-link font-medium text-lg uppercase tracking-wider hover:text-[#B01E9D] transition-colors duration-300 ${isActive(link.path) ? 'text-[#B01E9D]' : 'text-white'}`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Desktop Book Now Button */}
                <div className="hidden lg:block">
                    <a 
                        href="https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'd%20like%20to%20book%20you%20for%20a%20project/show." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#B01E9D] hover:bg-[#9A1A85] text-white font-serif font-bold text-lg px-6 py-3 rounded-full transition-all duration-300 uppercase tracking-wider inline-block"
                    >
                        Book Now
                    </a>
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 focus:outline-none">
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col space-y-4 p-6">
                    {navLinks.map((link) => (
                        link.path.startsWith('/#') ? (
                            <a 
                                key={link.name} 
                                href={link.path} // FIX: Used standard anchor tag for hash links on mobile too
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white font-medium text-lg uppercase tracking-wider hover:text-[#B01E9D] transition-colors duration-300 block"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link 
                                key={link.name} 
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-white font-medium text-lg uppercase tracking-wider hover:text-[#B01E9D] transition-colors duration-300 block"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <a 
                        href="https://wa.me/250784876606?text=Hi%20Gatikabisi!%20I'd%20like%20to%20book%20you%20for%20a%20project/show." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-[#B01E9D] hover:bg-[#9A1A85] text-white font-serif font-bold text-lg px-6 py-3 rounded-full transition-all duration-300 uppercase tracking-wider mt-4 w-full text-center block"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;