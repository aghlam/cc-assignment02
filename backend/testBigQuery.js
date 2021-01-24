'use strict';

function main() {
    const {BigQuery} = require('@google-cloud/bigquery');
    const bigquery = new BigQuery({projectId: "s3436174-s3784450-cc-a2"});

    async function testlol() {
        const options = {
            configuration: {
                query: {
                    query: `SELECT * FROM cafes.cafe`,
                    useLegacySql: false,
                },
            },
        };
        const response = await bigquery.createJob(options);
        const job = response[0];
    
        const [rows] = await job.getQueryResults(job);
    
        rows.forEach(row => console.log(row));
    }
    testlol();
}
main();