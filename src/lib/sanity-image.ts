import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./sanity";

const builder = createImageUrlBuilder(sanityClient);    

export const urlFor = (source: any) => builder.image(source);