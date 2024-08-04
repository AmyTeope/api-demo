import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs'
import { parse } from 'csv-parse/sync'


const prisma = new PrismaClient();

// eslint-disable-next-line
async function seed() {
  console.info('🌱 Seeding...')
  console.time(`🌱 Database has been seeded`)

  const files: string[] = ['users', 'posts', 'comments', 'ratings']

  for (const file of files) {
    await seedFile(file)
  }

  console.timeEnd(`🌱 Database has been seeded`)
}

// eslint-disable-next-line
async function seedFile(file: string) {
  const numFields: string[] = ['id', 'userId', 'postId', 'commentId', 'raterId', 'rating']
  const sharedFields: string[] = ['createdAt', 'updatedAt']
  const timestamps: string[] = ['registeredAt', 'ratedAt', 'postedAt', 'commentedAt', ...sharedFields]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const usersHeaders: string[] = ['id', 'email', 'name', 'githubUsername', 'registeredAt', ...sharedFields]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const commentsHeaders: string[] = ['id', 'userId', 'postId', 'message', 'commentedAt', ...sharedFields]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const postsHeaders: string[] = ['id', 'title', 'body', 'userId', 'postedAt', ...sharedFields]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ratingsHeaders: string[] = ['id', 'userId', 'raterId', 'rating', 'ratedAt', ...sharedFields]

  const fileData = readFileSync(`./prisma/data/${file}.csv`)
  const rows = parse(fileData, { delimiter: ',', from_line: 2, relax_quotes: true, escape: '\\' })
  for (const row of rows) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {}

    try {
      for (const [idx, header] of Object.entries(eval(`${file}Headers`) as string[])) {
        data[header] = numFields.includes(header) ?
          Number(row[idx]) : timestamps.includes(header) ?
            new Date(row[idx]) : row[idx]
      }

      const upsert = {
        create: {
          ...data,
        },
        update: {},
        where: { id: Number(row[0]) },
      }

      let record
      switch (file) {
        case 'users':
          record = await prisma.user.upsert(upsert)
          break;
        case 'posts':
          record = await prisma.post.upsert(upsert)
          break;
        case 'comments':
          record = await prisma.comment.upsert(upsert)
          break;
        case 'ratings':
          record = await prisma.rating.upsert(upsert)
          break;
        default:
          break;
      }
      console.log('Record inserted: ', record)
    } catch (error) {
      console.error('Error: ', error)
      console.error(`Failed to insert record into ${file}: `, row)
    }
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
