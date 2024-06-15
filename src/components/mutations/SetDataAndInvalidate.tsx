"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";
import {QueryKey} from "@/constants";

export const SetDataAndInvalidate = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: async () => {
            qc.setQueryData([QueryKey.basic], "overridden data while query is refreshing");
            void qc.invalidateQueries({queryKey: [QueryKey.basic]})
        }
    });

    return <MutationButton mutation={mutation}>
        Set data and invalidate
    </MutationButton>
}