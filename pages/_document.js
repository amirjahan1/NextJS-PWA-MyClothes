import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        return (
            <Html lang="fa" dir="rtl">
                <Head>
                    <title>My-Clothes</title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="keywords" content="NextJS, React, Redux"/>
                        <meta name="author" content="Amir Jahan"/>
                    <meta name="description" content="My Clothes Ecommerce" />
                    <link rel="icon" href="/Images/Title/TitleIcon.png" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
