import { getApi } from "@/api/getApi";
import { getCategories } from "@/api/getCategories";
import { getNews } from "@/api/getNews";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import NewsList from "@/components/NewsList";
import OurWork from "@/components/OurWork";
import { ErrorData } from "@/types/Error";
import { Category, News } from "@/types/News";
import { Slide } from "@/types/slide";
import { addCategoryById } from "@/utils";
import { NextSeo } from "next-seo";

type HomeProps = {
  data: {
    slides: Slide[] | ErrorData;
    news: News[] | ErrorData;
    categories: Category[] | ErrorData;
  };
};

export default function Home(props: HomeProps) {
  if (!Array.isArray(props.data.slides)) return;
  if (!Array.isArray(props.data.news)) return;
  if (!Array.isArray(props.data.categories)) return;

  const newsToRender = props.data.news.filter((news) => news.showOnHomepage);

  return (
    <>
      <NextSeo
        title="Link Development | Home"
        description="Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary."
        openGraph={{
          images: [
            {
              url: "/public/logo.png",
              width: 190,
              height: 70,
              alt: "Company Logo",
              type: "image/png",
            },
          ],
        }}
      />
      <Banner slides={props.data.slides as Slide[]} />
      <OurWork />
      <NewsList categories={props.data.categories} news={newsToRender} />
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const slides = await getApi<{ slides: Slide[] }, Slide[]>(
    `/fee177346e7875554413`,
    (response) => {
      return response.data.slides;
    },
    (err) => {
      return { ...err };
    }
  );

  const newsResponse = await getNews();
  const categories = await getCategories();

  const news = addCategoryById(
    newsResponse as News[],
    categories as Category[]
  );

  return { props: { data: { slides, news, categories } } };
};
