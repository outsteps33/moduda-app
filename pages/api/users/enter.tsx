import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';




async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone} : email ? { email} : null;
  if(!user) return res.status(400).json({ok: false})
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  // const token = await client.token.create({
  //   data: {
  //     payload,
  //     user: {
  //       connectOrCreate:{
  //         where: { 
  //           ...user
  //         },
  //         create: {
  //           ...user,
  //           name: 'Anonymous'
  //         },
  //       }
  //     }
      
  //   }
  // });
  // console.log(token);
  console.log(req.body);
  
  res.json({ ok: true, })
}

export default withHandler({
  methods: ["GET", "POST"], 
  handler, 
  isPrivate: false
});

// export default withHandler("POST", handler); 