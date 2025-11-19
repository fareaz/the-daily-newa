import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../Componenets/Header";
import LatestNews from "../Componenets/LatestNews";
import NavBar from "../Componenets/NavBar";
import AsideLeft from "../Componenets/HomeLayout/AsideLeft";
import AsideRight from "../Componenets/HomeLayout/AsideRight";
import Loading from "../Pages/Loading";

const HomeLayOut = () => {
  const location = useLocation();
  const { state } = location || {}; 
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto">
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="grid grid-cols-12 my-5 w-11/12 mx-auto gap-5">
        <aside className="left-nav col-span-3 h-fit top-1 sticky">
            <AsideLeft></AsideLeft>
        </aside>
        <section className="center-nav col-span-6">
          {state == "loading" ? <Loading></Loading>:<Outlet></Outlet>}
        </section>
        <aside className="right-nav col-span-3 h-fit top-1 sticky">
            <AsideRight></AsideRight>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayOut;
