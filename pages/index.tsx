import Head from 'next/head'
import App from 'components/app';
import color from 'styles/color';

const Root = () => {
    return (
        <div className="root">
            <Head>
                <title>XCITER - Batch XCI to NSP converter tool</title>
                <link
                    rel="stylesheet" 
                    href="https://cdn.jsdelivr.net/npm/boxicons@2.0.3/css/boxicons.min.css" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" />
            </Head>
            <App />
            <style jsx global>{`
                body {
                    color: ${color.mineShaft};
                    overflow: hidden;
                    font-family: Open Sans;
                    background: rgb(238,241,252);
                    background: linear-gradient(0deg, rgba(238,241,252,1) 0%, rgba(246,247,251,1) 100%);
                }
                #__next {
                    width: 100vw;
                    height: 100vh;
                }
            `}</style>
            <style jsx>{`
                .root {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    );
};

export default Root;
