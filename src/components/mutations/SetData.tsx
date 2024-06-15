"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";
import {QueryKey} from "@/constants";

export const SetData = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: async () => {
            qc.setQueryData([QueryKey.basic], "overridden data")
        }
    });

    return <MutationButton mutation={mutation}>
        Set data
    </MutationButton>
}