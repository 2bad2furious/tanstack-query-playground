"use client";

import {PropsWithChildren, useState} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {MantineProvider} from "@mantine/core";

import "@mantine/core/styles.css";


export const Providers = ({children}: PropsWithChildren) => {
    const [qc] = useState(() => new QueryClient());

    return <QueryClientProvider client={qc}>
        <MantineProvider>
            {children}
        </MantineProvider>
    </QueryClientProvider>
}