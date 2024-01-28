import { Category, News } from "@/types/News";
import NewsCard from "../NewsCard";
import styles from "./NewsList.module.scss";
import { useState } from "react";
import { NEWS_LIMIT } from "@/constants";

type NewsList = {
  news: News[];
  categories: Category[];
};

export default function NewsList({
  news: newsData,
  categories: categories,
}: NewsList) {
  const [news, setNews] = useState([...newsData].slice(0, NEWS_LIMIT));
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [allNewsLoaded, setAllNewsLoaded] = useState(false);
  const [newsAddedToFav, setNewsAddedToFav] = useState<string[]>([]);

  const updatedAllNews = newsData.map((newsItem) => ({
    ...newsItem,
    isFavorite: Boolean(newsAddedToFav.find((id) => id === newsItem.id)),
  }));

  const filterNewsByCategory = (categoryId?: string) => {
    if (!categoryId) {
      setActiveCategory(null);
      setNews(
        updatedAllNews.slice(
          0,
          !allNewsLoaded ? NEWS_LIMIT : updatedAllNews.length
        )
      );
      return;
    }

    const filteredNews = updatedAllNews
      .filter((newsItem) => newsItem.categoryID === categoryId)
      .slice(0, !allNewsLoaded ? NEWS_LIMIT : updatedAllNews.length);
    setNews(filteredNews);
    setActiveCategory(categoryId);
  };

  const loadMoreNews = () => {
    setNews([...updatedAllNews]);
    setAllNewsLoaded(true);
    setActiveCategory(null);
  };

  const addNewsToFavorite = (newsId: string) => {
    const updatedNews = news.map((newsItem) => ({
      ...newsItem,
      isFavorite: newsItem.id === newsId || newsItem.isFavorite,
    }));
    setNews(updatedNews);
    const newsAlreadyAddedToFav = newsAddedToFav.find((id) => id === newsId);
    if (!newsAlreadyAddedToFav) setNewsAddedToFav([...newsAddedToFav, newsId]);
  };

  return (
    <section className={`section-wrapper ${styles.NewsList}`}>
      <span className={styles.Media}>Media</span>
      <h3 className={styles.NewsSectionTitle}>Top News</h3>
      <ul className={styles.Categories}>
        <li>
          <button
            className={`${styles.CategoryBtn} ${
              !activeCategory && styles.Active
            }`}
            onClick={() => filterNewsByCategory()}
          >
            All News
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.CategoryBtn} ${
                category.id === activeCategory && styles.Active
              }`}
              onClick={() => filterNewsByCategory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.News}>
        {news.length ? (
          news.map((newsItem) => (
            <li key={newsItem.id}>
              <NewsCard
                news={newsItem}
                addNewsToFavorite={() => addNewsToFavorite(newsItem.id)}
              />
            </li>
          ))
        ) : (
          <p>Currently there are no news related to this category</p>
        )}
      </ul>
      {!allNewsLoaded && (
        <button className={styles.MoreNewsBtn} onClick={loadMoreNews}>
          View All News
        </button>
      )}
    </section>
  );
}
