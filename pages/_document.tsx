import {Head, Html, Main, NextScript} from 'next/document'

/*type CustomProps = {
    socials: Social[];

}*/
export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>
                    We Talk Data & AI
                </title>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}


/*
export const getStaticProps: GetStaticProps<CustomProps> = async () => {
    const socials: Social[] = await fetchSocials();
    console.log(socials);

    return {
        props: {
            socials
        },
        revalidate: 2
    }
}
*/
