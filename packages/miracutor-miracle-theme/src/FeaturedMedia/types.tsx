export type FrontityMediaDetailsObject = {
  width: number;
  height: number;
  file: string;
  sizes: {
    [key: string]: {
      file: string;
      width: number;
      height: number;
      mime_type: string;
      source_url: string;
    };
  };
  image_meta: { [key: string]: string };
  filesize: number;
};
