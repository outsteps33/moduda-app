import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  console.log((parseInt(req.query.page.toString())-1)*15);
  const count = await client.review.count();
  const notice = await client.review.findFirst({
    where: {
      notice: true
    }
  });
  const review = await client.review.findMany({
    take: 15,
    skip: (parseInt(req.query.page.toString())-1)*15,
    select: {
      id: true,
      title: true,
      thumbnail: true,
      createdAt: true
    },
    where: {
      notice: false
    }
  });
  
  res.json({ ok: true , review, count, notice});
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 