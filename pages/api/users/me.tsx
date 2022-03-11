import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if(!req.session.user) {
    res.json({ ok: false});
  }
  console.log(req.session.user)
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id
    }
  });

  return res.json({
    ok: true,
    profile
  })
}

export default withApiSession(withHandler({
  methods: ["GET"], 
  handler, 
  isPrivate: true
}));