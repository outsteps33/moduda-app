import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const { id,  title, thumbnail, contents} = req.body;
 
  const lecture = await client.review.update({
    data: {
      title,
      thumbnail,
      contents
    },
    where: {
      id: +id.toString()
    }
  })
  res.json({ ok: true, lecture });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 