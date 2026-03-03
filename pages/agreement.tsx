import { AgreementForm } from "@components/AgreementForm";
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
      <AgreementForm />
      {/* <Footer /> */}
      <MobileFooter />
    </div>
  )
}

export default Agreement;

<script type="text/javascript" src="//wcs.naver.net/wcslog.js"> </script> 
<script type="text/javascript"> 
if (!wcs_add) var wcs_add={};
wcs_add["wa"] = "s_22b8d0fae23f";
if (!_nasa) var _nasa={};
if(window.wcs){
wcs.inflow();
wcs_do();
}
</script>
