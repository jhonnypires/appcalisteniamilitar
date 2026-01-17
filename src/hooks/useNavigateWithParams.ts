import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useNavigateWithParams() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const push = useCallback(
        (path: string) => {
            const currentParams = searchParams.toString();
            const separator = path.includes("?") ? "&" : "?";
            const newPath = currentParams ? `${path}${separator}${currentParams}` : path;
            router.push(newPath);
        },
        [router, searchParams]
    );

    const replace = useCallback(
        (path: string) => {
            const currentParams = searchParams.toString();
            const separator = path.includes("?") ? "&" : "?";
            const newPath = currentParams ? `${path}${separator}${currentParams}` : path;
            router.replace(newPath);
        },
        [router, searchParams]
    );

    return { push, replace };
}
