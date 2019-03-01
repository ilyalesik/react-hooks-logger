// @flow
import { useState, useEffect } from "react";
import { getLogger } from "./logger";

export function useLoggedState<S>(initialState: (() => S) | S): [S, ((S => S) | S) => void] {
    const logger = getLogger();
    const [state, setState] = useState(initialState);

    useEffect(() => {
        logger({
            method: "useState",
            newValue: state
        });
    }, [state]);

    return [state, setState];
}
