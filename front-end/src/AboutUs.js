import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/api/about")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <div style={{ padding: 24 }}>Loading...</div>;

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>{data.title}</h1>

      <img
        src={`http://localhost:5002${data.imageUrl}`}
        alt="About me"
        style={{ width: 260, borderRadius: 12, margin: "16px 0" }}
      />

      {data.paragraphs.map((p, i) => (
        <p key={i} style={{ lineHeight: 1.6 }}>
          {p}
        </p>
      ))}
    </div>
  );
}
