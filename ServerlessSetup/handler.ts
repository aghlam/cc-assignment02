import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";

import { saveItemInDB, getItemFromDB, getCafeNameFromDB } from "./dynamodb-actions";

export const respond = (fulfillmentText: any, statusCode: number): any => {
  return {
    statusCode,
    body: JSON.stringify(fulfillmentText),
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };
};

/** Save an item in cafesList */
export const saveCafe: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const incoming: { cafe_id: string, name: string; address: string } = JSON.parse(event.body);
  const { cafe_id, name, address } = incoming;

  try {
    await saveItemInDB(cafe_id, name, address);

    return respond({ created: incoming }, 201);
  } catch (err) {
    return respond(err, 400);
  }
};

/** Get an item from the cafesList */
export const getCafe: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const cafe_id: string = event.pathParameters.cafe_id;

  try {
    const cafe = await getItemFromDB(cafe_id);

    return respond(cafe, 200);
  } catch (err) {
    return respond(err, 404);
  }
};


/** Get an item from the cafesList */
export const getCafeName: Handler = async (
  event: APIGatewayEvent,
  context: Context
) => {
  const name: string = event.pathParameters.name;

  try {
    const cafe = await getCafeNameFromDB(name);

    return respond(cafe, 200);
  } catch (err) {
    return respond(err, 404);
  }
};
