import { Account, Client, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID ='64f2df7e2982865b2acf'
export const DATABASE_ID = '64f2e1459ebe4f431c91'
export const COLLECTION_ID_MESSAGES = '64f2e160cf7c12ae9fec'

const client = new Client();

client
    .setEndpoint(API_ENDPOINT)
    .setProject(PROJECT_ID);


export const account = new Account(client);
export const databases  = new Databases(client);

export default client;