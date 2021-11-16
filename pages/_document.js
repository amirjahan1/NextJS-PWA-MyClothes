import React from "react";
import Document, { Html,Head, Main, NextScript } from 'next/document'



class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        return (
            <Html lang="fa" dir="rtl">
                <Head>

                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="keywords" content="NextJS, React, Redux"/>
                    <meta name="author" content="Amir Jahan"/>
                    <meta name="description" content="My Clothes Ecommerce" />

                    {/*   META FOR PWA START      */}
                    <link rel="manifest" href="/manifest.json"/>
                    {/*   META FOR PWA FINISH      */}

                    <link rel="icon" href="/Images/Title/TitleIcon.png" />

                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
                          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
                          crossOrigin="anonymous" referrerPolicy="no-referrer"/>
                              
                                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
                </Head>
                <body id="body">


                <Main />

                <NextScript />



                </body>
            </Html>
        )
    }
}

export default MyDocument
