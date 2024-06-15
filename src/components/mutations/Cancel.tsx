"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";

export const Cancel = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: async () => qc.cancelQueries()
    });

    return <MutationButton mutation={mutation}>
        Cancel
    </MutationButton>
}