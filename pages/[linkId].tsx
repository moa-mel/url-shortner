import React from 'react'
import prisma from '../client'

export const getServerSideProps = async ({params}) =>{
  
  try {
    const url = await prisma.link.findFirst({
      where: {
        linkId: params.linkId,
      },
    });
    if(url) {
      return{
        redirect: {
          destination: url.url
        }
      }
    }
   
  if(!url){
    return{
      redirect: {
        destination: "http://localhost:3000"
      }
    }
  }

  } catch (err) {
    console.log(err)
    return{
      redirect: {
        destination: "http://localhost:3000"
      }
    }
  }
  
  
}

const Link = () => {
    return (
        <div>
          <h1>Hello</h1>    
        </div>
    )
}

export default Link
