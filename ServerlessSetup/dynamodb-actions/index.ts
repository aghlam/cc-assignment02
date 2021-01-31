import * as AWS from "aws-sdk";
import * as uuid from "uuid/v4";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

/** put a item in the db table */
export function saveItemInDB(cafe_id:string, name: string, address: string) {
  const params = {
    TableName: "cafesList",
    Item: {
      cafe_id,
      name,
      address
    }
  };

  return dynamoDB
    .put(params)
    .promise()
    .then(res => res)
    .catch(err => err);
}

/** get a item from the db table */
export function getItemFromDB(cafe_id: string) {
  const params = {
    TableName: "cafesList",
    Key: {
      cafe_id
    }
  };

  return dynamoDB
    .get(params)
    .promise()
    .then(res => res.Item)
    .catch(err => err);
}


export function getCafeNameFromDB(name: string) {
  const params = {
    TableName: "cafesList",
    Key: {
      name
    }
  };

  return dynamoDB
    .get(params)
    .promise()
    .then(res => res.Item)
    .catch(err => err);
}
