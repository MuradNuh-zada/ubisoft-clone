import React from "react";

const Index: React.FC = () => {
  return (
    <section className="my-[64px] rounded-[8px] bg-[linear-gradient(111deg,rgba(75,18,85,0.2)_25.93%,rgba(14,17,31,0.2)_63.21%,rgba(69,185,255,0.2)_100.02%)]">
      <div className="flex justify-around items-center">
        <div className="text-white">
          <h2 className="text-2xl font-bold">Ubisoft Connect</h2>
          <p className="text-sm">
            All your games, friends, and benefits in one place.
          </p>
          <a
            href="#"
            className="font-bold inline-block rounded-[25px] py-[12px] text-sm px-[28px] mt-[16px] bg-[#006ef5]"
          >
            Get Ubisoft Connect
          </a>
        </div>
        <img
          className="w-[500px]"
          src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6Pgh6omPJbMdEfpj6XmgMo/bfbc4792f2953f9244ae53f173e9dd69/UC_promo_asset_1080.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Index;
