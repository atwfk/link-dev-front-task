import { News } from "@/types/News";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiMiniShare } from "react-icons/hi2";
import { IoHeart } from "react-icons/io5";
import styles from "./NewsCard.module.scss";

type NewsCardProps = {
  news: News;
  addNewsToFavorite: () => void;
};

export default function NewsCard({ news, addNewsToFavorite }: NewsCardProps) {
  return (
    <li className={styles.NewsCard}>
      <Image src={news.urlToImage} alt={news.title} width={360} height={322} />
      <div className={styles.CardInfo}>
        <p className={styles.Description}>
          {news.description ||
            "Zoom says no audio was “transmitted back to Zoom’s platform”"}
        </p>
        <span className={styles.Date}>
          <MdOutlineDateRange className={styles.DateIcon} />
          {news.publishedDate}
        </span>
        <div className={styles.CardFooter}>
          <span className={styles.Category}>{news.category}</span>
          <div className={styles.CardActions}>
            {!news.isFavorite ? (
              <CiHeart onClick={addNewsToFavorite} />
            ) : (
              <IoHeart />
            )}
            <HiMiniShare />
          </div>
        </div>
      </div>
    </li>
  );
}
