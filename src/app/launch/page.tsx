import React from 'react'
import { Button, IconButton } from "../../components/Button";
import Link from 'next/link';
const page = () => {
  return (
    <div className="p-3 lg:py-14 lg:px-16 text-center relative">
    <div>
        <img
            src="/images/right-gradient.svg"
            className="absolute right-0 top-0 pointer-events-none"
        />
    </div>
    <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center py-8 lg:py-16 font-['Stoke']">
        <h2 className="text-[#FFFDFC]  text-[1.7rem] lg:text-6xl w-full lg:w-[70%] lg:leading-[4.5rem]">
            Unlock the Future of Memorable Events
        </h2>
        <p className="text-[#D9D9D9D1] font-['Manrope']  lg:w-[50%] lg:text-[1.2rem] pb-4 lg:leading-8">
            Experience a journey where events unfold, NFT tickets shine ,
            digital assets come to life and communities thrive. Embrace the
            present and let your moments unfold instantly
        </p>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center px-5 lg:px-10 w-full lg:w-fit ">
            <Link href="/create-events">
                <IconButton
                    text="Create Events"
                    icon="/images/arrow-up-right.svg"
                    divClass="w-full"
                    iconStyle={`w-6 h-6`}
                    className="text-[#FFFDFC] font-['Stoke'] px-14 w-full lg:text-base "
                />
            </Link>
            {/* <HashLink smooth to="/events#explore-events"> */}
                <Button
                    text="Explore Events"
                    className="text-[#F57328] border hover:cursor-pointer border-[#F57328] bg-transparent px-16 py-5 w-full lg:px-6 font-['Stoke'] lg:text-base"
                />
            {/* </HashLink> */}
        </div>
        <div>
            <img
                src="/images/left-gradient.svg"
                className="absolute left-0 bottom-0 pointer-events-none"
            />
        </div>
    </div>
</div>
  )
}

export default page
