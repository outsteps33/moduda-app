import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';

// 사용 안 하는 import는 제거 (번들/트리셰이킹 측면에서 깔끔)
//// import mail from '@sendgrid/mail';

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  // withHandler가 methods를 보지만, 방어적으로 한 번 더 막고 싶으면 아래 주석을 해제하세요.
  // if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'Method Not Allowed' });

  try {
    // 1) id 안전 파싱 (쿼리스트링: /api/getOneLecture?id=123)
    const raw = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

    // undefined.toString() 에러 방지 + 숫자 검증
    const id = Number(raw);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ ok: false, error: 'Invalid or missing id (positive integer required)' });
    }

    // 2) Prisma 호출 (Lecture id가 Int @id 라는 전제)
    const lecture = await client.lecture.findUnique({
      where: { id },
    });

    if (!lecture) {
      return res.status(404).json({ ok: false, error: 'Lecture not found' });
    }

    // 3) 정상 응답 (항상 res.json)
    return res.status(200).json({ ok: true, lecture });
  } catch (err) {
    console.error('GET /api/getOneLecture error:', err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
}

export default withApiSession(
  withHandler({
    methods: ['GET'],
    handler,
    isPrivate: true,
  }),
);
