import Navbar from "@/components/Navbar";
import { Slide } from "@/types/slide";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./Banner.module.scss";

type BannerProps = {
  slides: Slide[];
};

export default function Banner(props: BannerProps) {
  const [activeSlide, setActiveSlide] = useState(props.slides[0].id);

  const changeSlide = () => {
    if (activeSlide < props.slides.length - 1) setActiveSlide(activeSlide + 1);
    else setActiveSlide(props.slides[0].id);
  };
  return (
    <div className={`section-wrapper relative ${styles.BannerWrapper}`}>
      <Navbar />

      {props.slides.map(
        (slide) =>
          slide.id === activeSlide && (
            <div
              key={slide.order}
              className={styles.Slide}
              onClick={changeSlide}
            >
              <Image src={slide.imgUrl} alt={slide.category} />
              <div className={styles.Canvas}>
                <Canvas color={slide.colorCode} />
              </div>
              <span
                className={styles.Category}
                style={{ color: `#${slide.colorCode}` }}
              >
                {slide.category.toUpperCase()}
              </span>
              <h2 className={styles.Title}>{slide.title}</h2>
              <p className={styles.Brief}>{slide.brief}</p>
              <div className={styles.LinksWrapper}>
                <Link href={slide.itemUrl} className={styles.ItemLink}>
                  Find out more
                </Link>
                <Link href={slide.videoUrl} className={styles.PlayBtn}>
                  <div className={styles.PlayIcon}>
                    <FaPlay />
                  </div>
                  Play Demo
                </Link>
              </div>
            </div>
          )
      )}

      <div className={styles.BulletsWrapper}>
        {props.slides.map((slide, index) =>
          index < slide.order ? (
            <>
              <div
                key={slide.id}
                className={styles.SlideBullet}
                style={{ backgroundColor: `#${slide.colorCode}` }}
              />
              {Array(7)
                .fill(1)
                .map((_: number, index) => (
                  <div className={styles.SlideSubBullet} key={index} />
                ))}
            </>
          ) : (
            <div
              key={slide.id}
              className={styles.SlideBullet}
              style={{ backgroundColor: `#${slide.colorCode}` }}
            />
          )
        )}
      </div>
    </div>
  );
}

type CanvasProps = {
  color: string;
};

function Canvas(props: CanvasProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 87 96"
      enable-background="new 0 0 87 96"
    >
      <path
        fill={`#${props.color}`}
        opacity="1.000000"
        stroke="none"
        d="
M76.000000,97.000000 
	C56.979103,97.000000 37.958210,97.000000 18.819378,96.728874 
	C12.038504,93.753899 5.726330,90.535179 1.274585,84.585579 
	C1.183056,84.723717 1.091528,84.861862 1.000000,85.000000 
	C1.000000,79.311958 1.000000,73.623917 1.255703,67.818359 
	C2.654964,65.580833 4.019900,63.548916 4.904410,61.325848 
	C9.116060,50.740547 12.210136,40.382713 6.326188,28.949009 
	C4.233404,24.882303 5.000965,18.921511 5.661032,13.985578 
	C6.255114,9.543084 8.489250,5.319910 10.000000,1.000000 
	C14.024545,1.000000 18.049089,1.000000 22.190510,1.242075 
	C29.698774,5.922823 36.819569,10.924372 44.556686,14.643882 
	C52.496597,18.460882 60.224228,15.980727 64.767601,9.550173 
	C69.382584,3.018253 77.549156,3.079824 81.752174,9.809720 
	C86.735146,17.788464 86.033638,26.144518 82.752937,34.460270 
	C81.011658,38.873959 78.498398,43.005146 77.004478,47.487453 
	C75.787270,51.139542 74.808723,55.174725 75.061012,58.950726 
	C75.609665,67.162392 83.524261,70.535812 87.715515,76.409958 
	C87.810341,76.273300 87.905167,76.136650 88.000000,76.000000 
	C88.000000,80.024544 88.000000,84.049088 87.776787,88.188683 
	C83.879105,90.579193 80.181923,92.819794 76.561615,95.178391 
	C76.152481,95.444939 76.176720,96.376701 76.000000,97.000000 
z"
      />
    </svg>
  );
}
