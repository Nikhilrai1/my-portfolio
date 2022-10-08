import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`
*[_type == "experience"] {
    ...,
    technologies[]->
  }
`

type Data = {
    experiences: Experience[]
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const experiences: Experience[] = await sanityClient.fetch(query);
    return res.status(200).json({ experiences })
}
