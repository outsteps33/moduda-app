import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  const lecture = await  client.lecture.findUnique({
    where: {
      id: parseInt(req.query.id.toString())
    }
  });
  
  res.json({ ok: true , lecture});
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 