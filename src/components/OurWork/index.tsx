import { Service } from "@/types/Service";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import styles from "./OurWork.module.scss";
import craftyMind from "/public/crafty-mind.png";
import envision from "/public/envision.png";
import dynamic from "/public/dynamic.png";
import services from "/public/services.png";

export default function OurWork() {
  return (
    <section className={styles.OurWork}>
      <h3 className={styles.SectionName}>THINGS WE DO</h3>
      <div className={styles.SectionInfoWrapper}>
        <div className={styles.SectionInfo}>
          <h2 className={styles.Title}>We Deliver Digital Productivity</h2>
          <p className={styles.Description}>
            We craft technology solutions that digitally bond and transform the
            productivity of our customers and their citizens, workers, consumers
            and partners.
          </p>
        </div>
      </div>
      <div className={styles.ServicesWrapper}>
        <div className={styles.ServiceColumn}>
          <ServiceCard
            service={{
              imgSrc: craftyMind,
              name: "Transformation",
              url: "#",
            }}
          />
        </div>
        <div className={styles.ServiceColumn}>
          <ServiceCard
            service={{
              imgSrc: envision,
              name: "Envision",
              url: "#",
            }}
          />
          <ServiceCard
            service={{
              imgSrc: dynamic,
              name: "Dynamic 365",
              url: "#",
            }}
          />
        </div>
        <div className={styles.ServiceColumn}>
          <ServiceCard
            service={{
              imgSrc: craftyMind,
              name: "Crafty Mind",
              url: "#",
            }}
          />
          <ServiceCard
            service={{
              imgSrc: services,
              name: "Services",
              url: "#",
            }}
          />
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.ServiceCard}>
      <Image src={service.imgSrc} alt={service.name} width={250} height={250} />
      <div className={styles.Overlay} />
      <div className={styles.CardInfo}>
        <h4 className={styles.ServiceName}>{service.name}</h4>
        <Link className={styles.ServiceLink} href={service.url}>
          <GoArrowRight />
          Read more
        </Link>
      </div>
    </div>
  );
}
