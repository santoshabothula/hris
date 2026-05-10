
export type Option = {
    label: string;
    value: any;
}

export const SelectType = {
    
}

export type Datatype = 'NUMBER' | 'STRING' | 'DATE' | null | undefined;

export type Field = {
    name: string;
    datatype: Datatype;
    minLength: number;
    maxLength: number;
    required: boolean;
}