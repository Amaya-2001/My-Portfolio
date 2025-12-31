import React, { useState } from "react";
import Navbar from "./Navbar";
import { articles } from "../data/articles";

function Article() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(articles.map((a) => a.category))];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">My Writings</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Articles</h1>
          <p className="text-lg mt-4 opacity-80 max-w-2xl mx-auto">
            Sharing insights and experiences on web development, frameworks, and best practices
          </p>
        </div>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="input input-bordered w-full max-w-md mx-auto block"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn btn-sm ${activeCategory === category ? "btn-primary" : "btn-outline"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center justify-between mb-3">
                  <span className="badge badge-primary">{article.category}</span>
                  <span className="text-xs opacity-60">{article.readTime}</span>
                </div>
                <h2 className="card-title text-lg">{article.title}</h2>
                <p className="text-sm opacity-80">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs opacity-60">{article.date}</span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Read Article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl opacity-60">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Article;

