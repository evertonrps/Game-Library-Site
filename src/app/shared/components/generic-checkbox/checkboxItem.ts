export class CheckboxItem {
    value: string;
    label: string;
    type: string;
    checked: boolean;
    constructor(value: any, label: any, type?: any, checked?: boolean) {
        this.value = value;
        this.label = label;
        this.type = type;
        this.checked = checked ? checked : false;
    }
}