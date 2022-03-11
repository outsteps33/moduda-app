import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token, 
    },
    include: { user: true }
  });
  if (!exists) return res.status(404).end();
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.json({ok: true})
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: false
}));