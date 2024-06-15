import {UseQueryOptions, useQuery} from "@tanstack/react-query";
import {Flex, Box, Text, Button, Loader, Stack, CardSection} from "@mantine/core";
import {sleep} from "@/utils";

export interface QueryDataSectionProps extends Pick<UseQueryOptions<string>, "queryKey" | "initialData"> {
    delayMs: number;
    staleTime?: number;
}

export const QueryDataSection = ({delayMs, ...queryOptions}: QueryDataSectionProps) => {
    const {data, status, isPending, isStale, fetchStatus} = useQuery({
        ...queryOptions,
        queryFn: async () => {
            await sleep(delayMs);
            return `some data ${Math.floor(Math.random() * 100)}`
        }
    })

    return <CardSection p={"sm"}>
        <Stack gap={"sm"}>
            <Flex justify={"space-between"} gap={"md"}>
                <Box ta={"start"}>
                    Data<Text fw={"bold"}>{data}</Text>
                </Box>
                {isPending && <Loader type="dots" size="sm"/>}
                <Box ta={"end"}>Status<Text fw={"bold"}>{status}</Text></Box>
            </Flex>
            <Flex justify={"space-between"} gap={"md"} align={"center"}>
                <Box ta={"start"}>
                    Is stale?<Text fw={"bold"}>{isStale ? "yes" : "no"}</Text>
                </Box>
                <Box ta={"end"}>Fetch status<Text fw={"bold"}>{fetchStatus}</Text></Box>
            </Flex>
        </Stack>
    </CardSection>
}