import db from '../../../utils/db/index'

export default async function handler(req, res) {
    return new Promise((resolve) => {
        const { id } = req.query;
        var LOGS = [];
        db.collection('logs').where('owner', '==', id).get().then(snapshot => {
            snapshot.forEach(doc => {
                    LOGS.push(
                        {
                            rpi: doc.data().rpi,
                            date: doc.data().date,
                            arranca: doc.data().arranca
                        }
                    )
            });
            res.status(200).json(LOGS);
            resolve();
        })
    }).then().catch(err => console.error(err))
    

}