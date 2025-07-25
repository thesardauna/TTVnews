import { useState, useEffect } from 'react';
import { Clock, TrendingUp, Globe, Play, ChevronRight, Eye, MessageCircle, Share2 } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const articles = [
    {
      id: 1,
      title: "How the Rain Affected Sokoto Markets",
      category: "Local News",
      time: "2 hours ago",
      views: "1.2k",
      comments: 23,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop",
      excerpt: "Heavy rainfall disrupts daily trading activities across major markets in Sokoto State, affecting local commerce..."
    },
    {
      id: 2,
      title: "Federal Budget: What It Means for You",
      category: "Politics",
      time: "4 hours ago",
      views: "3.8k",
      comments: 67,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      excerpt: "Breaking down the new federal budget proposals and their direct impact on Nigerian citizens and businesses..."
    },
    {
      id: 3,
      title: "Election 2025: 3 Key Players to Watch",
      category: "Politics",
      time: "6 hours ago",
      views: "5.1k",
      comments: 94,
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
      excerpt: "Analysis of the most influential figures shaping Nigeria's political landscape ahead of the upcoming elections..."
    }
  ];

  const categories = ["Breaking", "Politics", "Business", "Sports", "Entertainment", "Tech"];

  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-green-900/10 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#008020' }}>
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Rubik, system-ui, sans-serif' }}>
                  Thesardauna TV
                </h1>
                <p className="text-gray-300 text-sm">Your trusted news source</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-mono">
                  {currentTime.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#008020' }}></div>
              <span className="text-sm font-semibold" style={{ color: '#008020' }}>LIVE</span>
            </div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Stay updated with the latest stories from Nigeria and beyond. 
            <span style={{ color: '#002080' }}> Breaking news, in-depth analysis, and trusted reporting.</span>
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-y border-gray-800 sticky top-0 z-40" style={{ backgroundColor: '#202020' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto">
            {categories.map((category, index) => (
              <button
                key={category}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105"
                style={{ 
                  ':hover': { 
                    backgroundColor: '#008020'
                  }
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#008020';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6" style={{ color: '#008020' }} />
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Rubik, system-ui, sans-serif' }}>
              Latest Stories
            </h2>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Globe className="w-4 h-4" />
            <span className="text-sm">Nigeria & World</span>
          </div>
        </div>

        <div className="grid gap-8 md:gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveArticle(article.id)}
              onMouseLeave={() => setActiveArticle(null)}
            >
              <div 
                className="rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                style={{ 
                  backgroundColor: '#202020',
                  borderColor: activeArticle === article.id ? '#008020' : '#404040',
                  boxShadow: activeArticle === article.id ? '0 25px 50px -12px rgba(0, 128, 32, 0.25)' : 'none'
                }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span 
                        className="text-white px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: '#002080' }}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2 transition-colors duration-300"
                        style={{ 
                          fontFamily: 'Rubik, system-ui, sans-serif',
                          color: activeArticle === article.id ? '#008020' : '#ffffff'
                        }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{article.time}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{article.comments}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          className="p-2 rounded-lg transition-colors duration-300"
                          style={{ backgroundColor: '#404040' }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#008020';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#404040';
                          }}
                        >
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-white" />
                        </button>
                        <ChevronRight 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeArticle === article.id ? 'translate-x-1' : ''
                          }`}
                          style={{ color: '#008020' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button 
            className="text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: '#002080',
              fontFamily: 'Rubik, system-ui, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 10px 25px rgba(0, 32, 128, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
            }}
          >
            Load More Stories
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16" style={{ backgroundColor: '#202020' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Thesardauna TV. Delivering truth, one story at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
