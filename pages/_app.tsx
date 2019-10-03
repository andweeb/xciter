import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import makeStore from 'store';

interface Props {
    store: any
}

class Xciter extends App<Props> {
    static async getInitialProps({ Component, ctx }: any) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(Xciter);
