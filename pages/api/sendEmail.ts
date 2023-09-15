import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

mail.setApiKey(process.env.SENDGRID_KEY!);

async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  console.log(req.body)
  const { type, name, phone, alcohol, license,alcohol_history, demerit, distance, crackDown, policeInterview, reason, job, need, comment, accident  } = req.body;
  
  let email: any;
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      //secure가 false라고 해서 암호화된 연결을 사용하지 않는다는 의미가 아닙니다.
      auth: {
        user: "outsteps2023@gmail.com",
        pass: "cfqlqbvhnlyffkub",
      },
    });
    // 메일 옵션
  
    let mailOptions: any ;
    if(alcohol_history === undefined) {
      mailOptions = {
        from: "outsteps2023@gmail.com", // 보내는 메일의 주소
        to: "modudahang@naver.com", // 수신할 이메일
        html: 
        `<h2><strong>[SMS 빠른 상담신청]</strong><h2>
             1.이름: ${name} <br />
             2. 번호: ${phone}<br />
             3. 상담내용: ${comment}<br />
        `,
        subject : 'SMS 빠른 상담신청 ', // 메일 제목
        // text: param.text, // 메일 내용
        
      };
    } else {
      mailOptions = {
        from: "outsteps2023@gmail.com", // 보내는 메일의 주소
        to: "modudahang@naver.com", // 수신할 이메일
        html: 
         `
         <html>
          <body style ="width : 500px">
          <h1 style="color : blue">${name}님 가입을 환영합니다. </h1>
          <hr/>
          [무료 구제 성공 가능성 진단]<br />
          1. 이름: ${name} <br />
          2. 번호: ${phone}<br />
          3. 혈중알콜농도 (호흡 또는 체혈): ${alcohol} <br />
          4. 면허취득년도: ${license}<br />
          5. 과거 음주운전 전력: ${alcohol_history} <br />
          6. 음주운전 사고 여부: ${accident} <br />
          7. 벌점: ${demerit} <br />
          8. 음주운전으로 이동한 거리: ${distance} <br />
          9. 적발일자: ${crackDown} <br />
          10. 조사 날짜: ${policeInterview} <br />
          11.불가피한 운전 사유: ${reason} <br />
          12.직업 (월급, 월수입): ${job} <br />
          13.운전이 필요한 이유: ${need} <br />
          14.문의사항(면허구제,벌금감경,의견서작성 등): ${comment} <br />
          </body>
          </html>
         
        `,
        subject : '무료 구제 성공 가능성 진단', // 메일 제목
        // text: param.text, // 메일 내용
        
      };
    }
    
    
    // 메일 발송    
     transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch(e) {
    console.log(e);
  }
  
  
  
  res.json({ ok: true, email });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 