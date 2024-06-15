"use client";

import {useMutation, useQueryClient} from "@tanstack/react-query";
import {MutationButton} from "../MutationButton";

export const Invalidate = () => {
    const qc = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => qc.invalidateQueries()
    });

    return <MutationButton mutation={mutation}>
        Invalidate
    </MutationButton>
}