import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const { id } = req.body;
 
  const lecture = await client.lecture.delete({

    where: {
      id: +id.toString()
    }
  })
  res.json({ ok: true });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
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
