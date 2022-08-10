import { AuthenticationForm } from "@components/AuthenticationForm";
import { Footer } from "@components/Footer";
import { MobileFooter } from "@components/MobileFooter";
import { Nav } from "@components/nav";
import { Step } from "@components/Step";
import { NormalButton } from "css/button";
import { NextPage } from "next";
import styled from 'styled-components';


const Authentication: NextPage = () => {
  return (
    <div style={{backgroundColor: '#242527', height:'calc(100vh - 70px)'}}>
      <Nav />
      <AuthenticationForm />
      {/* <Footer /> */}
      <MobileFooter />
    </div>
  )
}

export default Authentication;