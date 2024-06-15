"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";

export const Refetch = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => qc.refetchQueries()
    });

    return <MutationButton mutation={mutation}>
        Refetch
    </MutationButton>
}