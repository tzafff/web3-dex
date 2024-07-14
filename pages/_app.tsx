import "@/styles/globals.css";
import { TransactionProvider } from "@/context/TransactionContext";
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <TransactionProvider>
            <Component {...pageProps} />
        </TransactionProvider>
    );
}

export default App;