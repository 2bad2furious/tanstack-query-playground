"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";

export const Remove = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: async () => qc.removeQueries()
    });

    return <MutationButton mutation={mutation}>
        Remove
    </MutationButton>
}