import { news } from '../data/news';
import NewsCard from '../components/NewsCard';
import SectionTitle from '../components/SectionTitle';

const News = () => {
    return (
         <div className="pt-24 bg-[#150529] min-h-screen pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="Blog" title="Latest" highlight="News" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {news.map(item => (
                        <NewsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
         </div>
    );
};

export default News;
