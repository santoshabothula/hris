import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const MetadataField = (props: any) => {

    const field = props.field;

    const [name, setName] = useState(field?.name);
    const [minLength, setMinLength] = useState(field?.minLength);
    const [maxLength, setMaxLength] = useState(field?.maxLength);
    const [required, setRequired] = useState(field?.required);
    const [datatype, setDatatype] = useState<string | null>(field?.datatype);
    const [datatypes, setDatatypes] = useState([]);

    useEffect(() => {
        setDatatypes([]);
    }, []);

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={{ xs: 8, sm: 4, md: 2 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        helperText="Field Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid size={{ xs: 8, sm: 4, md: 2 }}>
                    <FormControl fullWidth>
                        <InputLabel>Datatype</InputLabel>
                        <Select
                            fullWidth
                            value={datatype}
                            label="Datattype"
                            onChange={(e) => setDatatype(e.target.value)}
                        >
                            {datatypes.map((d) => (
                                <MenuItem key={d} value={d}>{d}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Datatype</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid size={{ xs: 8, sm: 4, md: 2 }}>
                    <TextField
                        type="number"
                        fullWidth
                        label="Min Length"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                        helperText="Minimum Length"
                    />
                </Grid>
                <Grid size={{ xs: 8, sm: 4, md: 2 }}>
                    <TextField
                        type="number"
                        fullWidth
                        label="Max Length"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                        helperText="Maxmium Length"
                    />
                </Grid>
                <Grid size={{ xs: 8, sm: 4, md: 2 }}>
                    <FormControl>
                        <FormLabel>Required</FormLabel>
                        <RadioGroup row value={required} onChange={(e) => setRequired(e.target.value)}>
                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                            <FormControlLabel value={false} control={<Radio />} label="No" />
                        </RadioGroup>
                        {/* <FormHelperText>Is Field Mandatory</FormHelperText> */}
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MetadataField;