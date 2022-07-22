import React, { useEffect, useState } from "react";
import FeedItem from "../misc/FeedItem";

const mediumURL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jrmoulckers";

function Skills(props) {
  const [data, updateData] = useState(null);
  const [mediumData, updateMediumData] = useState(null);

  useEffect(() => {
    props.bucket
      .getObjects({
        type: "feed-posts",
        props: "title,slug,metadata",
      })
      .then((data) => {
        updateData(data.objects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.bucket]);

  useEffect(() => {
    fetch(mediumURL)
      .then((res) => res.json())
      .then((data) => {
        updateMediumData(
          data.items.map((d) => ({
            slug: d.guid,
            title: d.title,
            metadata: {
              images: [d.thumbnail],
              source_type: "Medium Article",
              description: null,
              source: d.link,
            },
          }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const title = "Feed";
  const contactFields = "";

  return data ? (
    <section className="feed flex" id="feed">
      <div className="section-title-container flex">
        <h2 className="section-title">{title}</h2>
        <div className="header-underline" />
      </div>
      <div className="content">
        <div className="feed-list flex-row carousel">
          {mediumData?.map((d) => (
            <FeedItem data={d} key={d.slug}/>
          ))}
          {contactFields}
        </div>
      </div>
    </section>
  ) : (
    <div />
  );
}

export default Skills;
