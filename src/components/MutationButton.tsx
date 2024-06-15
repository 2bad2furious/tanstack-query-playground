"use client";

import {UseMutationResult} from "@tanstack/react-query";
import {Button} from "@mantine/core";
import {ComponentProps, PropsWithChildren} from "react";


export interface MutationButtonProps extends PropsWithChildren {
    mutation: UseMutationResult<unknown, Error, void, unknown>;
    buttonProps?: Omit<ComponentProps<typeof Button>, "children" | "onClick">;
}


export const MutationButton = ({mutation, children, buttonProps}: MutationButtonProps) => {
    return <Button loading={mutation.isPending} variant={"outline"}
                   onClick={() => mutation.mutate()} {...buttonProps}>{children}</Button>
}