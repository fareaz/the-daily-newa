import React, { useEffect, useState } from "react";
import Header from "../Componenets/Header";
import AsideRight from "../Componenets/HomeLayout/AsideRight";
import { useLoaderData, useParams } from "react-router";
import NewDetails from "../Componenets/Newdetails";

    const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
       <main className="grid grid-cols-12 my-5 w-11/12 mx-auto gap-5 py-10">
        <section className="center-nav col-span-9">
          <h2 className="font-semibold mb-5">New's details</h2>
           <NewDetails news={news}></NewDetails>
        </section>
        <aside className="right-nav col-span-3 h-fit top-1 sticky">
            <AsideRight></AsideRight>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
