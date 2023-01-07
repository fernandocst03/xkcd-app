import { Input } from "@nextui-org/react"
import { useState } from "react"
import Header from "../components/Header"
import fs from "fs/promises"
import Comic from "../components/Comic"


export default function Search({ allComics }) {
   const [value, setValue] = useState("")
   let foundComics = [];

   if(!value.length > 0) {
      foundComics = allComics
   }
   else {
      foundComics = allComics.filter((comic) => {
         const textComic = comic.title.toLowerCase()
         const textValue = value.toLowerCase()
         return textComic.includes(textValue)
      })
   }
   return (
      <>
         <div style={{
            width: '100%',
            display: 'grid',
            placeItems: 'center',
            gap: '30px',
         }}>
            <Header
               isOpenSearch={true}
            />
            <Input
               css={{
                  width: '40%',
               }}
               placeholder="Search"
               animated={false}
               type="search"
               size="xl"
               rounded
               bordered
               color="primary"
               labelRight="🔍"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
         </div>
         <div style={{
            width: '100%',
            display: 'grid',
            placeItems: 'center',
            marginTop: '60px',
         }}>
            <h4>Found comics</h4>
            <div 
               style={{
                  display: 'grid',
                  marginTop: '30px',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '40px',
               }}
            >
            {foundComics.map((comic) => {
						return (
							<Comic
                        comic={comic}
                     />
						)
					})}
            </div>
         </div>
      </>
   )
}

export async function getStaticProps() {
   const files = await fs.readdir("./comics")
   const lastestComicsFiles = files.slice(-40, files.length)
   const prmisesReadFiles = lastestComicsFiles.map(async (file) => {
      const content = await fs.readFile(`./comics/${file}`, "utf-8")
      return JSON.parse(content)
   })

   const allComics = await Promise.all(prmisesReadFiles)
   return {
      props: {
         allComics
      },
   }
}
