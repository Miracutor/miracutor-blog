import React from "react";
import { decode } from "frontity";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import FeaturedMedia from "../FeaturedMedia";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { MobileContext } from "../Context/MobileProvider";

const AuthorDateComponent = ({ authorName, date }) => {
  const formattedDate = format(parseISO(date), "dd MMMM yyyy");

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
      mb={3}
      mt={2}
    >
      <PersonRoundedIcon />
      <Typography>{authorName}</Typography>
      <CalendarTodayRoundedIcon />
      <Typography>{formattedDate}</Typography>
    </Stack>
  );
};

type ContentProps = {
  title: string;
  link?: string;
  type: "POST" | "PAGE" | "ARCHIVEPOST";
  media?: any;
  authorName?: string;
  postDate?: any;
  postTags?: any;
  postCategories?: any;
  Html2React: any;
  htmlContent: any;
};

const Content = ({
  title,
  link,
  type,
  media,
  authorName,
  postDate,
  postTags,
  postCategories,
  Html2React,
  htmlContent,
}: ContentProps) => {
  return (
    <MobileContext.Consumer>
      {(mobileStatus) => (
        <Card variant="outlined" sx={{ py: 3, px: 1 }}>
          {media && <CardMedia component={FeaturedMedia} media={media} />}
          <CardContent>
            {type === "ARCHIVEPOST" ? (
              <Link underline="hover" href={link} sx={{ textAlign: "center" }}>
                <Typography variant={mobileStatus ? "h5" : "h4"}>
                  {decode(title.replace("&nbsp;", " "))}
                </Typography>
              </Link>
            ) : (
              <Typography
                variant={mobileStatus ? "h5" : "h4"}
                textAlign={"center"}
                color={"secondary"}
                gutterBottom
              >
                {decode(title.replace("&nbsp;", " "))}
              </Typography>
            )}
            {(type === "POST" || type === "ARCHIVEPOST") && (
              <AuthorDateComponent authorName={authorName} date={postDate} />
            )}
            <Html2React html={htmlContent} />
            {type === "POST" && (
              <>
                <Divider
                  variant={"middle"}
                  sx={{ mt: 8, mb: 2, color: "gray" }}
                />
                <Stack direction="row" spacing={1} mb={1}>
                  <LabelRoundedIcon />
                  <b>Tags:</b>
                  {postTags &&
                    postTags.size !== 0 &&
                    postTags.map((t) => (
                      <Link key={`tag-${t.name}-${t.link}`} href={t.link}>
                        {decode(t.name)}
                      </Link>
                    ))}
                  {postTags.size === 0 && "None"}
                </Stack>

                <Stack direction="row" spacing={1}>
                  <FolderRoundedIcon />
                  <b>Categories:</b>
                  {postCategories &&
                    postCategories.size !== 0 &&
                    postCategories.map((c) => {
                      return (
                        <Link key={`cat-${c.name}-${c.link}`} href={c.link}>
                          {decode(c.name)}
                        </Link>
                      );
                    })}
                  {postCategories.size === 0 && "None"}
                </Stack>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </MobileContext.Consumer>
  );
};

export default Content;
