import React from "react";
import { AllIcons, BackgroundImages, Button } from "../../components";
import Input from "../../components/ui/Inputs";

export const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div
        className={`relative min-h-screen flex flex-col object-cover object-center w-full h-full bg-cover bg-center bg-no-repeat bg-fixed`}
      >
        <div
          className="w-full h-full absolute top-0 left-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%)",
          }}
        ></div>
        <img
          className="w-full h-full object-center object-cover absolute inset-0 z-1"
          src={BackgroundImages.register}
          srcSet={
            BackgroundImages.register +
            " 2000w" +
            ", " +
            BackgroundImages.register +
            " 1279w" +
            ", " +
            BackgroundImages.register +
            " 959w"
          }
          alt="aria-hidden=true"
        />
        <div
          className="z-10 relative w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.8000) 0.000%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7000) 25.00%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4000) 50.00%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1000) 75.00%, rgba(0, 0, 0, 0.04444) 83.33%, rgba(0, 0, 0, 0.01111) 91.67%, rgba(0, 0, 0, 0.000) 100.0%)",
          }}
        >
          <div className="py-0 px-[148px] flex flex-row items-center justify-between">
            <div className="h-[88px] flex items-center w-full">
              <header className="flex flex-row items-center justify-between w-full">
                <div className="w-full">
                  <div className="cursor-pointer">
                    <AllIcons.Logos.MediumWord className="w-[148px] h-[40px]" />
                  </div>
                </div>
                <div className="input-default w-full flex justify-start space-x-4">
                  <Input className="input-default input-primary relative text-sm focus-within:pt-[24px] py-[8px] focus-within:outline-offset-2" name="email" />
                  <label className="absolute text-grey-50 text-[16px] leading-[1.5] pl-4 font-normal top-[32px] h-[24px] duration-[.25s] ease-[cubic-bezier(0.4, 0, 0.68, 0.06)] pointer-events-none overflow-hidden">
                    Email address
                  </label>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
