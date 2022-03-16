import React from "react";
import { connect, decode, Head, loadable } from "frontity";
import Img from "@frontity/components/image";
import FeaturedMedia from "../FeaturedMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import AuthorDateComponent from "./AuthorDateComponent";
import { useCustomSsrMatchMedia, WrapInView } from "../utils";

const DiscussionEmbed = loadable(() => import("disqus-react"), {
  resolveComponent: (components) => components.DiscussionEmbed,
});

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const media = state.source.attachment[post.featured_media];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;
  // Get all tags
  const allTags = state.source.tag;
  const tags = post.tags && post.tags.map((tagId: number) => allTags[tagId]);
  // Get all categories
  const allCategories = state.source.category;
  const categories =
    post.categories &&
    post.categories.map((catId: number) => allCategories[catId]);
  const postTitle = decode(
    post.title.rendered.replace("&nbsp;", " ")
  ); /*workaround*/

  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  return (
    <>
      <Head>
        <title>
          {postTitle} – {state.frontity.title}
        </title>
      </Head>
      <Container sx={{ px: 0 }}>
        <Card variant="outlined" sx={{ py: 3, px: 1 }}>
          {media && <CardMedia component={FeaturedMedia} media={media} />}
          <CardContent>
            <Typography
              variant={fetchMobileStatus() ? "h5" : "h4"}
              textAlign={"center"}
              color={"secondary"}
              gutterBottom
            >
              {postTitle}
            </Typography>
            {data.isPost && (
              <AuthorDateComponent authorName={author.name} date={post.date} />
            )}
            <Html2React html={post.content.rendered} />
            {data.isPost && tags && tags.length !== 0 && (
              <>
                <Divider
                  variant={"middle"}
                  sx={{ mt: 8, mb: 2, color: "gray" }}
                />
                <Stack direction="row" spacing={1} mb={1}>
                  <LabelRoundedIcon />
                  <b>Tags:</b>
                  {tags &&
                    tags.map((t) => {
                      return (
                        <Link
                          key={"tag-" + t.name + "-" + t.link}
                          href={t.link}
                        >
                          {decode(t.name)}
                        </Link>
                      );
                    })}
                </Stack>
              </>
            )}
            {data.isPost && categories && categories.length !== 0 && (
              <Stack direction="row" spacing={1}>
                <FolderRoundedIcon />
                <b>Categories:</b>
                {categories &&
                  categories.map((c) => {
                    return (
                      <Link key={"cat-" + c.name + "-" + c.link} href={c.link}>
                        {decode(c.name)}
                      </Link>
                    );
                  })}
              </Stack>
            )}
          </CardContent>
        </Card>
        {data.isPost && (
          <Card variant="outlined" sx={{ p: 3, mt: 2, bgcolor: "grey.300" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <div className="wp-block-image is-style-rounded">
                  <figure className="aligncenter">
                    <Img src={author.avatar_urls[96]} />
                  </figure>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography sx={{ mb: 2 }}>
                  <b>
                    Author:{" "}
                    <Link href={author.link} underline="none">
                      {author.name}
                    </Link>
                  </b>
                </Typography>
                <Typography>{author.description}</Typography>
              </Grid>
            </Grid>
          </Card>
        )}
        {data.isPost && (
          <Card variant="outlined" sx={{ p: 3, mt: 2 }}>
            <WrapInView>
              <DiscussionEmbed
                shortname="miracle-executors"
                config={{
                  url: "https://miracutor.vercel.app/" + state.router.link,
                  identifier: String(data.id),
                  title: decode(post.title.rendered.replace("&nbsp;", " ")),
                }}
              />
            </WrapInView>
          </Card>
        )}
      </Container>
    </>
  );
};

export default connect(Post);
