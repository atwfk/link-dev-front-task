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

  const filterNewsByCategory = (categoryId?: string) => {
    if (!categoryId) {
      setActiveCategory(null);
      setNews(newsData.slice(0, !allNewsLoaded ? NEWS_LIMIT : newsData.length));
      return;
    }

    const filteredNews = newsData
      .filter((newsItem) => newsItem.categoryID === categoryId)
      .slice(0, !allNewsLoaded ? NEWS_LIMIT : newsData.length);
    setNews(filteredNews);
    setActiveCategory(categoryId);
  };

  const loadMoreNews = () => {
    setNews([...newsData]);
    setAllNewsLoaded(true);
    setActiveCategory(null);
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
              <NewsCard news={newsItem} />
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
