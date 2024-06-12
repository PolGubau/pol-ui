import { randomBytes } from 'node:crypto';
import { generateUidFunction } from './uuid';

export const uuid = generateUidFunction(randomBytes);
