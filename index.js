require("dotenv").config();
const express = require("express");
const app = express();

const githubData = {
  login: "farmanali6349",
  id: 122867638,
  node_id: "U_kgDOB1LPtg",
  avatar_url: "https://avatars.githubusercontent.com/u/122867638?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/farmanali6349",
  html_url: "https://github.com/farmanali6349",
  followers_url: "https://api.github.com/users/farmanali6349/followers",
  following_url:
    "https://api.github.com/users/farmanali6349/following{/other_user}",
  gists_url: "https://api.github.com/users/farmanali6349/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/farmanali6349/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/farmanali6349/subscriptions",
  organizations_url: "https://api.github.com/users/farmanali6349/orgs",
  repos_url: "https://api.github.com/users/farmanali6349/repos",
  events_url: "https://api.github.com/users/farmanali6349/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/farmanali6349/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Farman Ali",
  company: "The Islamia University Bahawalpur",
  blog: "https://farmanali6349.netlify.app/",
  location: "Bahawalpur, Punjab, Pakistan",
  email: null,
  hireable: null,
  bio: "Web Developer",
  twitter_username: "farmanali6349",
  public_repos: 36,
  public_gists: 0,
  followers: 1,
  following: 11,
  created_at: "2023-01-17T08:43:53Z",
  updated_at: "2024-04-11T16:33:20Z",
};

// Home Page
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// About Page
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

// Contact Page
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

// Github Page
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log("App is running on port localhost:" + process.env.PORT);
});
