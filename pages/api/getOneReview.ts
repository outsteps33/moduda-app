import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const review = await  client.review.findUnique({
    where: {
      id: parseInt(req.query.id.toString())
    }
  });
  console.log(review)
  res.json({ ok: true , review});
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 