import React from "react";
import Image from "next/image";

import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Browse our marketplace and explore a wide range of unique NFTs. You
            can view the title, description, price, and images of each NFT to
            help you make an informed decision.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
            Connect your crypto wallet to our marketplace and start buying and
            selling NFTs. We support multiple wallets, so you can choose the one
            that works best for you.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Buy and Sell NFTs"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Buy and Sell NFTs</h3>
          <p>
            Once your wallet is connected, buying and selling NFTs is easy. You
            can complete transactions quickly and securely, knowing that our
            marketplace supports safe and reliable transactions.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Start Trading"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Now that you have discovered, connected your wallet, and managed
            your NFTs, you're ready to start trading. Buy low, sell high, and
            earn money by taking advantage of the marketplace's dynamic pricing.
            With our platform, trading NFTs is easy and can be a lucrative
            investment opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
