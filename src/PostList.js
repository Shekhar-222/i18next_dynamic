// PostList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

function PostList() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div>
      <div>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={selectedLanguage}
        >
          <option value="en">English</option>
          <option value="ja">Japanese</option>
        </select>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>
              {t("post")} {post.id}
            </h2>
            <h3>
              {t("title")}: {t(post.title)}
            </h3>
            <p>
              {t("body")}: {t(post.body)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
