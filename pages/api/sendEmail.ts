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
  const { type, name, phone, comment,   } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
        host: 'imap.gmail.com',
        port: 993,
        secure: false,
      //secure가 false라고 해서 암호화된 연결을 사용하지 않는다는 의미가 아닙니다.
      auth: {
        user: "outsteps2023@gmail.com",
        pass: "zklzecllduxapkvx",
      },
    });
    // 메일 옵션
  

      const mailOptions = {
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