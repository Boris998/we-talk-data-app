import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React from "react";
import {Register} from "@/components/Register/Register";


const index = () => {
  return (
    <SectionWrapperContainer>
      <figure className="pt-16 sm:pt-24 px-2 min-h-[80vh]">
        <HeadingWrapper>
          WeTalkData&AI form Registration | Skopje 2024
        </HeadingWrapper>
        <Register />
      </figure>
    </SectionWrapperContainer>
  );
};

export default index;
