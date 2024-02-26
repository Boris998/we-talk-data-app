import Register from "@/components/Register/Register";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import React from "react";


const index = () => {
  return (
    <SectionWrapperContainer>
      <figure className="pt-24">
        <HeadingWrapper>
          WeTalkData&AI form Registration | Skopje 2024
        </HeadingWrapper>
        <Register />
      </figure>
    </SectionWrapperContainer>
  );
};

export default index;
