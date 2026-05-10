import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import MetadataField from "./MetadataField";
import { useState } from "react";
import type { Field } from "../common/Types/Types";
import { newField } from "./MetadataHelper";
import MetadataBaseFields from "./MetadataBaseFields";

const MetaData = () => {

    const [fields, setFields] = useState<Field[]>([]);

    const addField = () => {
        setFields([...fields, newField()]);
    }

    return (
        <Stack spacing={2}>

            <Typography variant="h5" gutterBottom>Metadata</Typography>

            <MetadataBaseFields />

            <Box><Button variant="contained" onClick={addField}>Add Field</Button></Box>
            
            {
                fields.map((field, index) => {

                    return (
                        <Box key={index}><MetadataField field={field}/></Box>
                    )
                })
            }

            <Grid container spacing={1}>
                <Grid>
                    <Button variant="outlined">Cancel</Button>
                </Grid>
                <Grid>
                    <Button variant="contained">Save</Button>
                </Grid>
                <Grid>
                    <Button variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default MetaData;