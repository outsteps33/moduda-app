import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import mail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { SMTPClient } from 'emailjs';


mail.setApiKey(process.env.SENDGRID_KEY!);

async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {
  console.log(req.body)
  const { type, name, phone, alcohol, license,alcohol_history, demerit, distance, crackDown, policeInterview, reason, job, need, comment, accident  } = req.body;
  
 
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      //secure가 false라고 해서 암호화된 연결을 사용하지 않는다는 의미가 아닙니다.
      auth: {
        user: "jejunho820@gmail.com",
        pass: "kvrfqnvaydubskbm",
      },
    });
    // 메일 옵션
    const t = 
    `
          [무료 구제 성공 가능성 진단] 
          1. 이름: ${name} 
          2. 번호: ${phone}
          3. 혈중알콜농도 (호흡 또는 체혈): ${alcohol} 
          4. 면허취득년도: ${license}
          5. 과거 음주운전 전력: ${alcohol_history} 
          6. 음주운전 사고 여부: ${accident} 
          7. 벌점: ${demerit} 
          8. 음주운전으로 이동한 거리: ${distance} 
          9. 적발일자: ${crackDown} 
          10. 조사 날짜: ${policeInterview} 
          11.불가피한 운전 사유: ${reason} 
          12.직업 (월급, 월수입): ${job} 
          13.운전이 필요한 이유: ${need} 
          14.문의사항(면허구제,벌금감경,의견서작성 등): ${comment} `;
    
      console.log(t)
      const mailOptions = {
        from: "jejunho820@gmail.com", // 보내는 메일의 주소
        to: "modudahang@naver.com", // 수신할 이메일
       
        subject : '구제 성공 가능성 진단', // 메일 제목
        text: t, // 메일 내용
        
      };

      setTimeout(() => {
        
      }, 2000);
      console.log("23")
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


    
  
  
  
  res.json({ ok: true,  });
}

export default withApiSession(withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: true
}));

// export default withHandler("POST", handler); 