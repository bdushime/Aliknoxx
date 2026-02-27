import { useEffect } from 'react';
// 1. IMPORT useParams
import { useParams, useNavigate } from 'react-router-dom';
import { news } from '../data/news';

const NewsDetails = () => {
    // 2. USE useParams
    const { id } = useParams();
    const navigate = useNavigate();

    // 3. FIND LOGIC
    const article = news.find(n => n.id.toString() === id);

    // 4. DEPENDENCY
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="pt-32 pb-20 bg-[#150529] min-h-screen flex flex-col items-center justify-center text-white">
                <h2 className="text-3xl font-serif mb-4">Article not found</h2>
                <button onClick={() => navigate(-1)} className="text-[#B01E9D] hover:text-white transition-colors">
                    &larr; Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-[#150529] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <button onClick={() => navigate(-1)} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 transition-colors">
                    <span>&larr;</span> Back
                </button>

                <article className="bg-[#110422] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl">
                    <div className="relative h-64 sm:h-80 md:h-96 w-full">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#110422] to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:left-10 flex flex-wrap items-center gap-4">
                            <span className="bg-[#B01E9D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">{article.category}</span>
                            <span className="text-gray-300 font-mono text-sm shadow-black drop-shadow-md">{article.date}</span>
                        </div>
                    </div>
                    <div className="p-6 md:p-10">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">{article.title}</h1>
                        <div className="prose prose-invert prose-purple max-w-none text-gray-300 leading-relaxed font-serif text-lg space-y-6">
                            <p className="font-bold text-xl text-white border-l-4 border-[#B01E9D] pl-4">{article.excerpt}</p>
                            <p>{article.content || "Full article content placeholder text. This is where the long-form content will sit."}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default NewsDetails;