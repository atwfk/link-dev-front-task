import { News } from "@/types/News";
import { getApi } from "../getApi";
import { ErrorData } from "@/types/Error";

type NewsResponse = Omit<News, "showOnHomepage" | "category"> & {
  showOnHomepage: string;
};

export const getNews = async (): Promise<News[] | ErrorData> =>
  await getApi<{ News: NewsResponse[] }, News[]>(
    `/d275425a434e02acf2f7`,
    (response): News[] => {
      const transformedData = response.data.News.map((news) => ({
        ...news,
        showOnHomepage: news.showOnHomepage === "yes",
        publishedDate: new Date(news.publishedDate).toDateString(),
      }));
      return sortNewsByLatest(transformedData);
    },
    (err) => {
      return { ...err };
    }
  );

const sortNewsByLatest = (news: News[]): News[] =>
  news.sort(
    (a, b) =>
      new Date(b.publishedDate).valueOf() - new Date(a.publishedDate).valueOf()
  );
