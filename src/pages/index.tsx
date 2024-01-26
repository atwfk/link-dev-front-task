import { getApi } from "@/api/getApi";
import Banner from "@/components/Banner";
import { ErrorData } from "@/types/Error";
import { Slide } from "@/types/slide";

type HomeProps = {
  data: { slides: Slide[] | ErrorData };
};

export default function Home(props: HomeProps) {
  if (!Array.isArray(props.data.slides)) return;
  return (
    <>
      <Banner slides={props.data.slides as Slide[]} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await getApi<{ slides: Slide[] }, Slide[]>(
    `/fee177346e7875554413`,
    (response) => {
      return response.data.slides;
    },
    (err) => {
      return { ...err };
    }
  );

  return { props: { data: { slides: response } } };
};
