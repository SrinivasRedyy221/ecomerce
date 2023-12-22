import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skSjDgjjN4c9YsHZdVtTIIEhPu78DoQGcqO4Rsb1huroKx0iPLgyglLmrU8ZKiUk7IJ7TBiFUHNXM4ScFOxSHoP6TiGaIzinfPE2afIFJtD6r1334WSg1NmJBITgzeDAeDiXX3TdfGPDLdek1S1ivXScnXRnD2g3Zh1TfgPcgs9kdKOoqRhm",
})
