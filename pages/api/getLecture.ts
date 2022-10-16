import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

mail.setApiKey('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');


async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const count = await client.lecture.count();
  const lecture = await  client.lecture.findMany({
    take: 15,
    skip: (parseInt(req.query.page.toString())-1)*15,
    select: {
      id: true,
      title: true,
      thumbnail: true,
      createdAt: true
    }
  });
  
  res.json({ ok: true , lecture, count});
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 