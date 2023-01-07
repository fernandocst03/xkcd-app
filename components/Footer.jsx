import Link from "next/link"

export default function Footer() {
   return (
      <footer
         style={{
            display: "grid",
            placeItems: "center",
            width: "100%",
            height: "200px",
            marginTop: "100px",
            backgroundImage: "linear-gradient(90deg, #00b0ff, #536dfe)",
         }}
      >
         <div>
            <p>Fernando Dorantes Castillo </p>
         </div>
         <div
            style={{
               display: "flex",
               gap: "2rem",
            }}
         >
            <Link
               href="#"
               style={{
                  color: "white",
               }}
            >
               Facebook
            </Link>
            <Link
               href="#"
               style={{
                  color: "white",
               }}
            >
               Instagram
            </Link>
            <Link
               href="#"
               style={{
                  color: "white",
               }}
            >
               Twitter
            </Link>
            <Link
               href="#"
               style={{
                  color: "white",
               }}
            >
               Gitgub
            </Link>
         </div>
      </footer>
   )
}