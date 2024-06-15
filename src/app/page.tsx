import {AppLayout} from "@/components/AppLayout";
import {QueryCard} from "@/components/QueryCard";
import {Flex, Stack, Title} from "@mantine/core";
import {QueryKey} from "@/constants";
import {Invalidate, Remove, Reset, SetData, SetDataAndInvalidate, Refetch, Cancel} from "@/components/mutations";

export default function Home() {
    return <AppLayout>
        <Stack gap={"md"}>
            <Title ta={"center"} order={1}>Tanstack Query playground</Title>
            <Flex gap={"sm"} wrap={"wrap"} justify={"center"}>
                <Invalidate/>
                <Remove/>
                <Reset/>
                <SetData/>
                <SetDataAndInvalidate/>
                <Refetch/>
                <Cancel/>
            </Flex>
            <QueryCard title={"Basic query"} staleTime={20 * 1000} queryKey={[QueryKey.basic]} delayMs={4000}/>
            <QueryCard title={"Query with initial data"} staleTime={10 * 1000} queryKey={[QueryKey.withInitialData]}
                       initialData={"default data"} delayMs={7000}/>
            <QueryCard title={"Unmounted by default "} queryKey={[QueryKey.basicInactive]} defaultInvisible
                       delayMs={6000}/>
        </Stack>
    </AppLayout>
}
