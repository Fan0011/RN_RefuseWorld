import type { NextApiRequest, NextApiResponse } from "next";
import { assertError } from "ts-extras";
import { getSearchData } from "../../lib/contentful/search";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query } = req.query as typeof req.query & {
      query: string;
    };

    const { data, duration } = await getSearchData(query);

    res
      .setHeader("Server-Timing", `search;dur=${duration}`)
      .setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate=59")
      .json(data);
  } catch (error) {
    assertError(error);

    res.status(400).json({
      message: error.message,
    });
  }
}
