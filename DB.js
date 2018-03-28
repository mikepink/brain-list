import { SQLite } from 'expo'; 

const DB = SQLite.openDatabase('db.brainlist');

export default DB;