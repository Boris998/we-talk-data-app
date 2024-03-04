import {Head, Html, Main, NextScript} from 'next/document'

/*type CustomProps = {
    socials: Social[];

}*/
export default function Document() {
    return (
        <Html lang="en">
            <title>
                    We Talk Data & AI
                </title>
            <Head>
                <meta
                    name="description"
                    content="We Talk Data & AI Tech Talk"
                    key="desc"
                />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
