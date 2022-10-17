import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

mail.setApiKey('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');


async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  console.log(req.body)
  const { type, name, phone, alcohol, license,alcohol_history, demerit, distance, crackDown, policeInterview, reason, job, need, comment  } = req.body;
  
  let email;
  if(type === '진단신청') {

    email = await mail.send({
      from: 'jejunho820@gmail.com',
      // to: 'jejunho820@gmail.com',
      to: 'modudahang@naver.com',
      subject: '무료 구제 성공 가능성 진단',
      text: '무료 구제 성공 가능성 진단',
      html: 
        `<h2><strong>[무료 구제 성공 가능성 진단]</strong><h2>
        1. 이름: ${name} <br />
        2. 번호: ${phone}<br />
        3. 혈중알콜농도 (호흡 또는 체혈): ${alcohol} <br />
        4. 면허취득년도: ${license}<br />
        5. 과거 음주운전 전력: ${alcohol_history} <br />
        6. 벌점: ${demerit} <br />
        7. 음주운전으로 이동한 거리: ${distance} <br />
        8. 적발일자: ${crackDown} <br />
        9. 조사 날짜: ${policeInterview} <br />
        10.불가피한 운전 사유: ${reason} <br />
        11.직업 (월급, 월수입): ${job} <br />
        12.운전이 필요한 이유: ${need} <br />
        13.문의사항(면허구제,벌금감경,의견서작성 등): ${comment} <br />
        `
    });
  
    console.log(email)
  } else {
    console.log("s")
    email = await mail.send({
      from: 'jejunho820@gmail.com',
      // to: 'jejunho820@gmail.com',
      to: 'modudahang@naver.com',
      subject: 'SMS 빠른 상담신청 ',
      text: 'SMS 빠른 상담신청 ',
      html: 
        `<h2><strong>[SMS 빠른 상담신청]</strong><h2>
        1.이름: ${name} <br />
        2. 번호: ${phone}<br />
        3. 상담내용: ${comment}<br />
        `
    });
  }
  
  
  res.json({ ok: true, email });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 