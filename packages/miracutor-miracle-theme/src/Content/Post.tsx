import React from "react";
import { connect, decode, Head, loadable } from "frontity";
import Img from "@frontity/components/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCustomSsrMatchMedia } from "../utils";
import Content from ".";

const DiscussionEmbed = loadable(() => import("disqus-react"), {
  resolveComponent: (components) => components.DiscussionEmbed,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post = ({ state, libraries, when }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const media = state.source.attachment[post.featured_media];
  const author = state.source.author[post.author];
  const Html2React = libraries.html2react.Component;

  const tags =
    post.tags && post.tags.map((tagId: number) => state.source.tag[tagId]);
  const categories =
    post.categories &&
    post.categories.map((catId: number) => state.source.category[catId]);

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
        <Stack direction="column" spacing={2}>
          <Content
            title={postTitle}
            type={data.isPost ? "POST" : "PAGE"}
            media={media}
            authorName={data.isPost && author.name}
            postDate={data.isPost && post.date}
            postTags={data.isPost && tags}
            postCategories={data.isPost && categories}
            Html2React={Html2React}
            htmlContent={post.content.rendered}
            mobileStatus={fetchMobileStatus()}
          />
          {data.isPost && (
            <Card variant="outlined" sx={{ p: 3, bgcolor: "grey.300" }}>
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
            <Card variant="outlined" sx={{ p: 3 }}>
              <DiscussionEmbed
                shortname="miracle-executors"
                config={{
                  url: "https://miracutor.vercel.app/" + state.router.link,
                  identifier: String(data.id),
                  title: decode(post.title.rendered.replace("&nbsp;", " ")),
                }}
              />
            </Card>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default connect(Post);
