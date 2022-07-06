import React from "react";
import { Button, Stack, Box } from "@mui/material";

type ButtonNextProps = {
    onClick: () => void;
};

const ButtonNext: React.FC<ButtonNextProps> = (props: ButtonNextProps) => {
    return (
        <Box mt={5} mb={5} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={() => props.onClick()}>
                    Next
                </Button>
            </Stack>
        </Box>
    );
};

export default ButtonNext;
