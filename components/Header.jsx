import { Text, Container, Navbar, Button } from "@nextui-org/react"
import { useState } from "react"
import Link from "next/link"

export default function Header({ isOpenIndex, isOpenSearch}) {
   const [variant, setVariant] = useState("floating");
   return (
      <Navbar variant={variant} isBordered style={{
         width: "100%",
      }}>
         <Navbar.Brand>
            <Text
               h3
               size={30}
               css={{
                  textGradient: "90deg, #00b0ff, #536dfe"
               }}
               weight="bold"
            >
               Next
            </Text>
            <Text
               h3
               size={30}
               weight="light"
               css={{
                  marginLeft: "0.5rem",
               }}
            >
               xkcd
            </Text>
         </Navbar.Brand>
         <Navbar.Content
            activeColor="primary"
            hideIn="xs"
            variant="underline"
         >
            <Navbar.Link
               isActive={isOpenIndex}
               href="/"
            >
               Home
            </Navbar.Link>
            <Navbar.Link
               href="/about"
            >
               About
            </Navbar.Link>
            <Navbar.Link
               isActive={isOpenSearch}
               href="/search"
            >
               Search
            </Navbar.Link>
         </Navbar.Content>
         <Navbar.Content
            activeColor="primary"
            hideIn="xs"
            variant="highlight"
         >
            <Navbar.Link href="/">Login</Navbar.Link>
            <Navbar.Item>
               <Button
                  auto
                  flat
                  as={Link}
                  color="primary"
                  href="/"
               >Sing Up</Button>
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   )
}