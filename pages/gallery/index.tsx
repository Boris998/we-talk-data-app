import EventGallery from "@/components/Gallery/EventGallery";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";


const GalleryPage = () => {
  return (
    <SectionWrapperContainer>
      <div className="py-24 overflow-hidden">
        <HeadingWrapper>
          <span className="mr-3">E v e n t s </span>
          <span>G a l l e r y</span>
        </HeadingWrapper>

        <EventGallery />
      </div>
    </SectionWrapperContainer>
  );
};

export default GalleryPage;