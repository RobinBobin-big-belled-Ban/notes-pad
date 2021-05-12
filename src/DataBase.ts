import Dexie from 'dexie';

const db = new Dexie('tasksDb');
db.version(1).stores({
    tasks: `++id, name, description`
});

export default db;