"use client";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";

export const Reset = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => qc.resetQueries()
    });

    return <MutationButton mutation={mutation}>
        Reset
    </MutationButton>
}