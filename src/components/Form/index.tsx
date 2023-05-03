import { TextField } from "@mui/material";
import React from "react";
import { Controller, FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CompositeInput from "../CompositeInput";

export type MainForm = {
    form1Field1: string,
    form11Field2: number,
    form1Field3: string[],
    sharedField: SharedType[],
}

export type SecondaryForm = {
    form2Field1: number,
    form2Field2: string,
    form2Field3: number[],
    sharedField: SharedType[],
}

export type SharedType = {
    one: string,
    two: string,
    three: string,
}

const defaultValues: MainForm = {
    sharedField: [
        {
            one: 'ONE BB PIGGY',
            two: 'TWO BB PIGGY',
            three: 'THREE BB PIGGY',
        },
        {
            one: 'ONE PAPA PIGGY',
            two: 'TWO PAPA PIGGY',
            three: 'THREE PAPA PIGGY',
        },
        {
            one: 'ONE MAMA PIGGY',
            two: 'TWO MAMA PIGGY',
            three: 'THREE MAMA PIGGY',
        },
    ],
    form1Field1: 'form1Field1',
    form11Field2: 2,
    form1Field3: ['form1Field3'],
}

const Form: React.FC = ({}) => {
    const methods = useForm<MainForm>({
        defaultValues
    });
    const onSubmit = (data: MainForm) => console.log(data);

    return <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
                name="form1Field1"
                control={methods.control}
                render={({field}) => <TextField 
                    {...field}
                />}
            />
            <CompositeInput />
        </form>
    </FormProvider>;
};

export default Form;