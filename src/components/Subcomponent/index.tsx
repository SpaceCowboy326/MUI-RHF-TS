import React from "react";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import Box from "@mui/material/Box";

export type SubcomponentProps = {
    index: number,
}

function Subcomponent ({
    index,
}: SubcomponentProps) {
    const {control} = useFormContext();

    return <Box>
        <Controller
            name={`sharedField.${index}.one`}
            control={control}
            render={({field}) => <TextField
                {...field}
            />}
        />
        <Controller
            name={`sharedField.${index}.two`}
            control={control}
            render={({field}) => <TextField
                {...field}
            />}
        />
        <Controller
            name={`sharedField.${index}.three`}
            control={control}
            render={({field}) => <TextField
                {...field}
            />}
        />
    </Box>
}

export default Subcomponent;