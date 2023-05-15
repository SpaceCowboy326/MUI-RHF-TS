import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";

import {styled} from "@mui/material/styles";

const StyledTextField = styled(TextField)({
    color: 'red',
    backgroundColor: 'pink',
    borderRadius: '15px',
});

const BasicComponent = () => {
    const [value, setValue] = React.useState<string>('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <Box>
        <Typography variant="h4">Is Basic</Typography>
        <StyledTextField
            value={value}
            onChange={onChange}
        />
    </Box>;
};
export default BasicComponent;