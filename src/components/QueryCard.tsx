"use client";

import {QueryDataSection, QueryDataSectionProps} from "./QueryDataSection";
import {Card, CardSection, Flex, Button, ButtonGroup, Text, Box, Title} from "@mantine/core";
import {useState, useId} from "react";
import {useForceUpdate} from "@mantine/hooks";

export interface QueryCardProps extends Omit<QueryDataSectionProps, "rerender"> {
    defaultInvisible?: boolean;
    title: string;
}

export const QueryCard = ({defaultInvisible, title, ...queryOptions}: QueryCardProps) => {
    const [visible, setVisible] = useState(!defaultInvisible);
    const [key, setKey] = useState(useId());
    const remount = () => {
        setKey(key + 1);
        setVisible(true);
    };
    const rerender = useForceUpdate();

    return <Card withBorder>
        <CardSection p={"sm"} withBorder>
            <Flex align={"center"} justify={"space-between"}>
                <Box>Stale time: <Text fw={"bold"}>{queryOptions.staleTime ?? 0}ms</Text></Box>
                <Title order={2} c={"dark"}>
                    {title}
                </Title>
                <ButtonGroup>
                    <Button variant={"light"} onClick={() => setVisible(!visible)}>{visible ? "Hide" : "Show"}</Button>
                    <Button variant={"light"} onClick={rerender}>Rerender</Button>
                    <Button variant={"light"} onClick={remount}>Remount</Button>
                </ButtonGroup>
            </Flex>
        </CardSection>
        {visible && <QueryDataSection key={key} {...queryOptions} />}
    </Card>
}