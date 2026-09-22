import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Pinecone client
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY || ''
});

// Helper function to get the configured index
export function getPineconeIndex() {
  const indexName = process.env.PINECONE_INDEX_NAME || 'wamdp-rag';
  return pinecone.Index(indexName);
}

export default pinecone;
