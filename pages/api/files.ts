import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';




async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  console.log("sss")
  const response = await (await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_ACCOUNTID}/images/v2/direct_upload`,
    {
      method: 'POST',
      headers: {
        "Content-type": 'application/json',
        Authorization : `Bearer ${process.env.CLOUDFARE_API_TOKEN}`
      }
    }
  )).json();

  console.log(response)
  
  res.json({ ok: true, ...response.result });
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 

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
