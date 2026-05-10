import type { Field } from "../common/Types/Types"

export type Status = {
    id: string,
    name: string,
    description: string
}

export const loadStatuses = (): Status[] => {
    return [{
        id: 'active',
        name: 'Active',
        description: 'Active status'
    },{
        id: 'inactive',
        name: 'In-Active',
        description: 'In-Active status'
    }]
}

export const newField = (): Field => {
    return {
        name: '',
        datatype: null,
        minLength: 0,
        maxLength: 1,
        required: false
    };
}