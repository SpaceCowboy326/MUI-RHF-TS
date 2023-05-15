import { useParams } from "react-router-dom";
import FormWrapper from '../../components/FormWrapper';
import { Box } from "@mui/material";

type Metric = {
    id?: string;
    name: string;
    description: string;
    tags: string[];
    // ...allOtherMetricFields
};

// These are the default values for a new metric
const defaultFormValues: Metric = {
    name: 'New Metric',
    description: '',
    tags: [],
    // ...allOtherMetricFields
}

// Pretend this is an RTK query hook
const useGetMetric = (metricId: string): {data?: Metric} => ({
    data: {
        id: metricId,
        name: 'Metric Name',
        description: 'Metric Description',
        tags: ['tag1', 'tag2'],
    }
});


const skipToken = 'skip';
const NEW_METRIC_ID = 'new';
// Hook for retrieving the resource ID of the metric from the URL
const useResourceId = () => {
    const { resourceId } = useParams<{ resourceId: string }>();
    const isNewMetric = resourceId === NEW_METRIC_ID;
    return isNewMetric ? null : resourceId;
};

interface CommonResourceProps {
    name: string,
    id?: string,
}


// This isn't a required part of it, but I think it might streamline the process for resource pages going forward.
// This takes a resource ID (e.g. metric ID), the "remote" (RTK query) data for that resource, and the default values for a new version of that resource.
// 
interface UseInitialFormValuesProps<T extends CommonResourceProps> {
    resourceId: string | null | undefined;
    remoteData: T | undefined;
    defaultData: T;
}
export function useInitialFormValues<T extends CommonResourceProps>({
    resourceId,
    remoteData,
    defaultData,
}: UseInitialFormValuesProps<T>): T | undefined {
    const { copy } = useParams<{ copy: string }>();
    const isCopy = Boolean(copy);

    let formData;
    if (resourceId === NEW_METRIC_ID) {
        formData = defaultData;
    }
    else if (remoteData && isCopy) {
        const copyMetricData = {
            ...remoteData,
            name: `${remoteData.name} (copy)`,
        };
        delete copyMetricData.id;
        formData = copyMetricData;
    }
    else {
        formData = remoteData;
    }

    return formData;
};

const Metric = () => {
    const metricId = useResourceId();
    const {
        data: metricData,
    } = useGetMetric(metricId ?? skipToken);
    const initialFormValues = useInitialFormValues({resourceId: metricId, remoteData: metricData, defaultData: defaultFormValues});

    // Avoid rendering the FormWrapper until we've determine our initial form values. This way the "defaultValues" prop gets set to whatever
    return initialFormValues ? <FormWrapper initialFormValues={initialFormValues}>
        <div>Is Form</div>
    </FormWrapper> : <Box>Loading Metric data...</Box>;
};