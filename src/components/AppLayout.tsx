import {AppShell, AppShellMain, Container, AppShellFooter, Text} from "@mantine/core";
import {PropsWithChildren, lazy} from "react";

const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

export const AppLayout = ({children}: PropsWithChildren) => {
    return <AppShell footer={{height: 60}}>
        <AppShellMain>
            <Container py={"md"}>
                {children}
            </Container>
        </AppShellMain>
        <AppShellFooter>
            <Container py={"md"}>
                Made with ❤️ <Text component={"a"} c={"blue"} td={"underline"} href={"https://ackee.cz"}>@Ackee</Text>
            </Container>
        </AppShellFooter>
        <ReactQueryDevtoolsProduction initialIsOpen={true}/>
    </AppShell>
}