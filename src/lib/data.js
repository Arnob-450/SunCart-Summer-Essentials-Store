
import fs from 'fs/promises';
import path from 'path';

export const getProducts = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};