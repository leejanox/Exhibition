import { useState } from "react";

export const useCopy = ({text}: {text: string}) => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    }

    return { copied, copy };
}
