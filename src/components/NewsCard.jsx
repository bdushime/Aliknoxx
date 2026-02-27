import { Link } from 'react-router-dom';

const NewsCard = ({ item }) => {
    return (
        <div className="bg-[#150529] rounded-xl overflow-hidden border border-purple-500/30 hover:border-[#B01E9D]/70 transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full shadow-lg">
            
            {/* Image Container */}
            <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-900">
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#B01E9D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {item.category}
                </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <p className="text-gray-400 font-mono text-xs mb-3">
                    {item.date}
                </p>
                
                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 line-clamp-2 group-hover:text-[#B01E9D] transition-colors">
                    {item.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-300 text-sm font-serif mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {item.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="mt-auto">
                    <Link 
                        to={`/news?id=${item.id}`} 
                        className="inline-flex items-center text-[#B01E9D] hover:text-white font-serif font-semibold text-sm transition-colors group/link"
                    >
                        Read Full Article 
                        <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                            &rarr;
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;