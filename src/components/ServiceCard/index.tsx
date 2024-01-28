import { Service } from "@/types/Service";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
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
