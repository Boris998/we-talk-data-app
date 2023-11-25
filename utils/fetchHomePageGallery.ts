import {HomePageGallery} from "@/typings";

export const fetchHomePageGallery = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHomePageGallery`);
    const data = await res.json();

    const homePageGallery: HomePageGallery = data.homePageGallery;

    // console.log("fetching...", homePageGallery);

    return homePageGallery;
}

