const SectionTitle = ({ subtitle, title, highlight }) => {
    return (
        <div className="text-center mb-12 lg:mb-16">
            <h4 className="text-base sm:text-lg font-serif font-medium text-[#B01E9D] uppercase tracking-wider mb-4">
                {subtitle}
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white uppercase leading-tight max-w-4xl mx-auto">
                {title} <br className="hidden sm:block" />
                <span className="text-[#B01E9D]">{highlight}</span>
            </h2>
        </div>
    );
};

export default SectionTitle;
