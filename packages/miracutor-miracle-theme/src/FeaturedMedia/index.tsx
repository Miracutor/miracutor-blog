import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/system/Box";
import { FrontityMediaDetailsObject } from "./types";
import Image from "../Image";

type FeaturedMediaProps = {
  media: {
    title: { rendered: string };
    media_details: FrontityMediaDetailsObject;
    source_url: string;
  };
};

interface FrontityMediaSizesObject {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

const FeaturedMedia = ({ media }: FeaturedMediaProps) => {
  //console.log(media);
  const srcset =
    Object.values<FrontityMediaSizesObject>(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Box mb={2}>
      <CardImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
        width={media.media_details.width}
        height={media.media_details.height}
      />
    </Box>
  );
};

export default FeaturedMedia;

const CardImage = styled(Image)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
  height: auto;
  width: auto;
  max-height: 500px;
`;
