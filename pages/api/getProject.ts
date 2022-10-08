import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`
*[_type == "project"] {
    ...,
    technologies[]->
  }
`

type Data = {
    projects: Project[]
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

    const projects: Project[] = await sanityClient.fetch(query);
    return res.status(200).json({ projects })
}
