import React from "react";
import { styled } from "@mui/material/styles";
import Img from "@frontity/components/image";
import Box from "@mui/system/Box";

type FeaturedMediaProps = {
  media: any;
};

interface FrontityMediaSizesObject {
  source_url: string;
  width: number;
}

const FeaturedMedia = ({ media }: FeaturedMediaProps) => {
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
      <Image
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Box>
  );
};

export default FeaturedMedia;

const Image = styled(Img)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
  height: auto;
  max-height: 500px;
`;
