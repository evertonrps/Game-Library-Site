import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
    if(control.value == 2)
    {
       return { platformTypeId: true };
    }
    return null;
}

export function ValidatePc(controlNameCompare: string): ValidatorFn{
    return (c: AbstractControl): ValidationErrors | null =>
    {
        if(c.value === null || c.value.lenght === 0)
        {
            return {'compare':true};// null;
        }

        const controlToCompare = c.root.get(controlNameCompare);
        if(controlToCompare)
        {
            
        }
        return {'compare':true};
    }
}