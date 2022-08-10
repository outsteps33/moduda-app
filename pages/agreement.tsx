import { AuthenticationForm } from "@components/AuthenticationForm";
import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { NextPage } from "next";
import styled from 'styled-components';


const Agreement: NextPage = () => {
  return (
    <div style={{backgroundColor: '#242527'}}>
      <Nav />
      <AuthenticationForm />
      {/* <Footer /> */}
      <MobileFooter />
    </div>
  )
}

export default Agreement;