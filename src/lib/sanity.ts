// src/lib/sanity.ts

import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "mpwn2606",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});