const settings = {
  "name": "miracutor-blog",
  "state": {
    "frontity": {
      "url": "https://miracutor.vercel.app/",
      "title": "Miracle Executors!",
      "description": "Continue to execute many wonderful 'miracles'"
    }
  },
  "packages": [
    {
      name: "miracutor-miracle-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://miracutor.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
