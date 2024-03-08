import React from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
}

const Product = () => {
  return (
    <>
    <article className="prose-stone lg:prose-xl">
      <div id="Features" className="content-spacer">
        <h2>productFeatures</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="Benefits" className="content-spacer">
        <h2>productBenefits</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      <div id="ContactUs" className="content-spacer">
        <h2>productContactUs</h2>
        <br/>
        <h4>Overview of Federation Affairs</h4>
        <h4>Visual Reports with Actionable Insights</h4>
        <h4>Easy Form Management</h4>
        <h4>Seamless Sign-up process for all your members<br/>(Officials, Athletes, Coaches, Promoters and Clubs)</h4>
        <h4>Intuitive Member Management</h4>
        <br/>
      </div>
      </article>
  </>
)};

export default Product;
