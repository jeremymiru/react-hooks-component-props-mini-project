import React from "react";
import About from "./About"
import ArticleList from "./ArticleList";
import Header from "./Header";
import logo from "../assets/logo";

function App() {
  let articles = [
    {
      
      title: "Article 1",
      date: "December 15, 2020",
      preview: "This is my preview for article 1",
      
    },
    {

      title: "Article 2",
      date: "December 11, 2020",
      preview: "This is my preview for article 2",

    
    },
    {
      title: "Article 3",
      date: "December 10, 2020",
      preview: "This is my preview for article 3",
    }
  ];
  return (
    <div className="App">
      <div>
      <Header name="Projects Based Blog" />
        <About
          image="https://example.com/my-image.jpg"
          aboutText="This is some information about my blog."
        />
        <ArticleList articles={articles} />
      </div>

    </div>
  );
}

export default App;
