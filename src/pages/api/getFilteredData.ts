import { getFilteredDatabases } from '@/lib/notion';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const jsonData = req.body;

  try {
    console.log('getFilteredDatabases req:');
    const response = await getFilteredDatabases(jsonData);
    res.status(200).json(response);
    console.log('getFilteredDatabases', response);
  } catch (error) {
    console.error('getFilteredData Error', error);
    res.status(500).json(error);
  } finally {
    console.log('api/getFilteredDatabases');
  }
};

export default handler;
