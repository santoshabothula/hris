import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { loadStatuses, type Status } from "./MetadataHelper";
import { useEffect, useState } from "react";

const MetadataBaseFields = () => {

    const [template, setTemplate] = useState('');
    const [templates, setTemplates] = useState([]);

    const [status, setStatus] = useState<string>('');
    const [statuses, setStatuses] = useState<Status[]>([]);

    useEffect(() => {
        setStatuses(loadStatuses());
        setTemplates([]);
    }, []);

    return (
        <Box>
            <Grid container spacing={2}>
                
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Label"
                        value={''}
                        helperText="Screen Display Label"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={''}
                        disabled
                        helperText="Screen Name (internel use, UI readonly)"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel>Status</InputLabel>
                        <Select
                            fullWidth
                            value={status}
                            label="Status"
                            onChange={(v) => setStatus(v.target.value)}
                        >
                            {statuses.map((d) => (
                                <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Screen Status</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                        multiline 
                        fullWidth
                        rows={1}
                        label="Description"
                        value={''}
                        helperText="Screen Description"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Effective Start Date" 
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    variant: 'outlined',
                                    helperText: 'Effective Date - MM/DD/YYYY',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            label="Effective End Date" 
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    variant: 'outlined',
                                    helperText: 'Effective Date - MM/DD/YYYY',
                                },
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                
                {/* <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField
                        fullWidth
                        label="History"
                        value={''}
                        onChange={() => {}}
                        helperText="Maintain versioning history"
                    />
                </Grid> */}
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel>Template</InputLabel>
                        <Select
                            fullWidth
                            value={template}
                            label="Template"
                            onChange={(e) => setTemplate(e.target.value)}
                        >
                            {templates.map((d) => (
                                <MenuItem key={d} value={d}>{d}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>UI Template</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default MetadataBaseFields;