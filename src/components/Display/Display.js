import React from 'react'
import { useParams } from 'react-router-dom'

const {BigQuery} = require('@google-cloud/bigquery');

const bigqueryClient = new BigQuery();

const Display = () => {
    
    const { cafe_id } = useParams();

    return (
        <div>
            This is cafe id { cafe_id }
        </div>
    )
}

export default Display
