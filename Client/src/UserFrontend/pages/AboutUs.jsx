import React from "react";
import NavBar from "../components/NavBar";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-[350px] mx-auto px-40 bg-[#0b2428] flex flex-col text-center justify-center items-center ">
        <h1 className="text-[50px] font-bold text-[#fdf0d5]">About Us</h1>
        <p className="text-slate-300 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam quod
          ipsam obcaecati quisquam enim? Excepturi ratione harum aperiam debitis
          eaque recusandae facere tenetur, tempore obcaecati vel dolorum aut,
          incidunt maiores!
        </p>
      </div>
      <div className="flex justify-between items-center gap-10 my-20 px-32">
        <div className="flex-1">
          <img
            className="w-[500px] rounded-br-[80px] shadow-lg shadow-slate-600 "
            src={about1}
            alt="Image01"
          />
        </div>
        <div className="flex-1 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eligendi recusandae qui nostrum officia mollitia ab
            nesciunt nam quod illo reiciendis, repellendus facere iusto
            consequuntur quia eos, aliquam consequatur, sit saepe! Maxime
            accusamus saepe rem tenetur, odit blanditiis est, quasi vero porro
            neque iusto veritatis enim possimus quam sequi culpa. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi
            recusandae qui nostrum officia mollitia ab nesciunt nam quod illo
            reiciendis, repellendus facere iusto consequuntur quia eos, aliquam
            consequatur, sit saepe! Maxime accusamus saepe rem tenetur, odit
            blanditiis est, quasi vero porro neque iusto veritatis enim possimus
            quam sequi culpa.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-10 items-center my-20 px-32">
        <div className="flex-1 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eligendi recusandae qui nostrum officia mollitia ab
            nesciunt nam quod illo reiciendis, repellendus facere iusto
            consequuntur quia eos, aliquam consequatur, sit saepe! Maxime
            accusamus saepe rem tenetur, odit blanditiis est, quasi vero porro
            neque iusto veritatis enim possimus quam sequi culpa. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Reprehenderit eligendi
            recusandae qui nostrum officia mollitia ab nesciunt nam quod illo
            reiciendis, repellendus facere iusto consequuntur quia eos, aliquam
            consequatur, sit saepe! Maxime accusamus saepe rem tenetur, odit
            blanditiis est, quasi vero porro neque iusto veritatis enim possimus
            quam sequi culpa.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="w-[600px] h-[300px] shadow-lg shadow-slate-600 rounded-tl-[80px] "
            src={about2}
            alt="Image01"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
