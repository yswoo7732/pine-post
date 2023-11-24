import { getDatabasesPages, getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { cursor } = req.query;
  const jsonData = req.body;
  // console.log('getData!!', req.body, cursor, typeof cursor, jsonData);

  if (cursor !== 'undefined') {
    const response = await getDatabasesPages(cursor as string, jsonData);
    res.status(200).json(response);
  } else {
    const response = await getFilteredDatabases(jsonData);
    res.status(200).json(response);
  }
}
