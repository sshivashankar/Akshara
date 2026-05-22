import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcryptjs';
const prisma = new PrismaClient();
async function main(){
  const user = await prisma.user.upsert({where:{email:process.env.ADMIN_EMAIL!},update:{},create:{email:process.env.ADMIN_EMAIL!,passwordHash:hashSync(process.env.ADMIN_PASSWORD!,10),role:'ADMIN'}});
  const event = await prisma.event.create({data:{title:'Townhall',joinCode:'AK1234',ownerId:user.id}});
  await prisma.session.create({data:{title:'Q2 All Hands',eventId:event.id,scheduledAt:new Date()}});
}
main().finally(()=>prisma.$disconnect());
