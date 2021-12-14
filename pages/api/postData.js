import db from '../../utils/db/index'
import { v4 as uuidv4 } from 'uuid';
import admin from 'firebase-admin';
const { DateTime } = require("luxon");


export default async function handler(req, res) {
    return new Promise((resolve) => {
        if (req.method !== 'POST') {
            res.status(400).send({ message: 'Only POST requests allowed' })
            resolve();
        }
        let body = req.body;
        // Add the date at the server.
        const date = DateTime.now().setZone('Europe/Madrid');
        body.date = admin.firestore.Timestamp.fromMillis(date.toMillis());
        db.collection('logs').doc(uuidv4()).set(body);
        res.status(200).json({"status": "ok"});
        resolve();
    }).then().catch(err => console.error(err))
}