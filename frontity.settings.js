const settings = {
  name: "miracutor-blog",
  state: {
    frontity: {
      url: "https://miracutor.vercel.app/",
      title: "Miracle Executors!",
      description: "Continue to execute many wonderful 'miracles'",
    },
    theme: {
      menu: [
        { name: "Home", link: "/", list: [] },
		{
          name: "Library",
          link: "/library",
          list: [
            {
              name: "Is it Tough Being a Friend?",
              link: "/library/is-it-tough-being-a-friend",
              list: [],
            },
            {
              name: "Yumemiru Danshi wa Genjitsushugisha",
              link: "/library/yumemiru-danshi-wa-genjitsushugisha",
              list: [],
            },
          ],
        },
        {
          name: "Translations",
          link: "/translations",
          list: [
            {
              name: "Gi(a)rlish Number",
              link: "/translations/giarlish-number",
              list: [
                {
                  name: "Volume 1, Chapter 2, Part 1",
                  link: "/translations/giarlish-number/v1c2part1",
                  list: [],
                },
                {
                  name: "Volume 1, Chapter 2, Part 2",
                  link: "/translations/giarlish-number/v1c2part2",
                  list: [],
                },
              ],
            },
          ],
        },
        {
          name: "Works",
          link: "/works",
          list: [
            {
              name: "A Certain Reincarnated Omnipotent",
              link: "/works/a-certain-reincarnated-omnipotent",
              list: [],
            },
          ],
        },
        { name: "Contact", link: "/contact-me", list: [] },
        { name: "About", link: "/about", list: [] },
      ],
    },
  },
  packages: [
    {
      name: "miracutor-miracle-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://miracutor.wordpress.com",
          params: {
            per_page: 5,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
