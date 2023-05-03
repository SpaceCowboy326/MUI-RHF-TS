import React from "react";
import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";

import type {
    SharedType,
} from '../Form';
import Subcomponent from "../Subcomponent";

interface HasSharedField {
    sharedField: SharedType[],
}

function CompositeInput() {
    const {
        control,
    } = useFormContext<HasSharedField>();

    const sharedField: UseFieldArrayReturn<HasSharedField, "sharedField"> = useFieldArray({
        control,
        name: 'sharedField',
    });

    return <>
        {sharedField.fields.map((field, index) => (
            <Subcomponent
                {...field}
                key={field.id}
                index={index}
            />
        ))}
    </>;
}

export default CompositeInput;