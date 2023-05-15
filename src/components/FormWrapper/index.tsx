import React from "react";
import { FieldValues, useForm, DefaultValues, FormProvider } from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> {
    children: JSX.Element;
    initialFormValues: DefaultValues<T>;
}

function FormWrapper<T extends FieldValues>({
    children,
    initialFormValues,
}: FormWrapperProps<T>) {
    const methods = useForm({
        defaultValues: initialFormValues,
    });

    return <FormProvider {...methods}>
        {children}
    </FormProvider>
};

export default FormWrapper;