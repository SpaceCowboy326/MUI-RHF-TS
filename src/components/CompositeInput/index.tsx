import React from "react";
import { UseFieldArrayProps, useFieldArray } from "react-hook-form";

import type {
    SharedType,
} from '../Form';
import Subcomponent from "../Subcomponent";

interface HasSharedField {
    sharedField: SharedType[],
}


function CompositeInput <T extends HasSharedField>({control, name}: UseFieldArrayProps<T>) {
    const sharedField = useFieldArray({
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