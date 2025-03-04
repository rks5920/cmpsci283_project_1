//This is a filler page for all of the pages that have not been developed yet but would be standard in a social media site.
import ContentBox from "@/components/PageComponents/ContentBox"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Footer from "@/components/PageComponents/Footer"


export default function Home() {

  return (
    <>
        <Navbar/>
        <ContentBox>
          <Construction>
            <h1>This page is currently under construction</h1>
            <img src="https://i.gifer.com/ZSj2.gif" width={500}  height={500}></img>
          </Construction>
        </ContentBox>
        <Footer />
    </>
  )
}

const Construction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

