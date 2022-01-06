import prisma from "../../client"

export default async (req, res) => {
  const { link }  = req.body;

  const id = Math.random().toString(36).substr(2, 8);

  const existingLink = await prisma.link.findFirst({
    where: { 
      url: link 
      
    }
  })

  if(existingLink){
       return res.status(200).json({link: existingLink.linkId})
  }

  try {
    const addlink = await prisma.link.create({
      data: {
        url: link,
        linkId: id,
      },
    });
    console.log(addlink);
} catch (err){
  console.log(err)
  return res.status(500)
}

   res.status(200).json({link: id});
};
