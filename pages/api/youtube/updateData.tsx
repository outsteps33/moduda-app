import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';



async function handler (
  req: NextApiRequest, res: NextApiResponse<ResponseType>
) {

    const test = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.YOUTUBE_KEY}&part=snippet&chart=mostPopular&regionCode=kr&maxResults=10`);
    const exist = await client.youtube.findMany({ take: 10 });
    if(exist.length) {
      for(let i =0 ; i< 8 ;i++) {
        await client.youtube.update({
          where:{ id: i },
          data: {
            title: test.data.items[i].snippet.title,
            rank: i+1,
            videoId: test.data.items[i].id
          }
        })
      }
      return res.status(200).json({
        ok: true,
        message: 'updated data',
      });
    } else {
      for(let i =0 ; i< 8 ;i++) {
        await client.youtube.create({
          data: {
            title: test.data.items[i].snippet.title,
            rank: i+1,
            videoId: test.data.items[i].id
          }
        })
      }
      return res.status(200).json({
        ok: true,
        message: 'created data',
      });
    }
    
  }

  
  

export default withHandler({
  methods: ["POST"], 
  handler, 
  isPrivate: false
});

// export default withHandler("POST", handler); 