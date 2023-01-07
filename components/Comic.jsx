import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Comic({comic}) {
   return (
      <Link
         href={`/comics/${comic.id}`}
         key={comic.id}
         className={styles.latestComic}
      >
         <h4
         >{comic.title}</h4>
         <Image width="350" height="450" src={comic.img} alt={comic.alt} style={{
            objectFit: "contain",
         }} />
      </Link>
   )
}