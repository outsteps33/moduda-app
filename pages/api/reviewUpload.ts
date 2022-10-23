import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const { title, thumbnail, contents} = req.body;
 
  const review = await client.review.create({
    data: {
      title,
      thumbnail,
      contents,
      notice: false
    }
  })
  res.json({ ok: true, review });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 