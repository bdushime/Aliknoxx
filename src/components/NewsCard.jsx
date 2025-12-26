const NewsCard = ({ item }) => {
    return (
        <article className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg overflow-hidden border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 group">
            <div className="h-48 bg-gray-800 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
                <div className="text-sm text-[#B01E9D] font-serif mb-2">{item.date}</div>
                <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#B01E9D] transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-300 font-serif text-sm mb-4">{item.summary}</p>
                <button className="text-[#B01E9D] hover:text-white font-serif text-sm font-semibold transition-colors duration-300">Read More →</button>
            </div>
        </article>
    );
};

export default NewsCard;
