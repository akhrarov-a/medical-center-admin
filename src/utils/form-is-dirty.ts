import { FormInstance } from 'rc-field-form/es/interface';
import {
  checkName,
  getFieldNameInArray,
  isHasChildren
} from './form-is-valid.ts';

function getValueFromObjectByArrayName(
  name: string[],
  initialValues: ReturnType<FormInstance['getFieldsValue']>
): any {
  if (name.length === 1) {
    return initialValues?.[name[0]];
  } else {
    return getValueFromObjectByArrayName(name.slice(1), initialValues[name[0]]);
  }
}

function isSomeValueChangedAndValid(
  {
    getFieldValue,
    getFieldError,
    getFieldsError
  }: Pick<FormInstance, 'getFieldValue' | 'getFieldError' | 'getFieldsError'>,
  initialValues: ReturnType<FormInstance['getFieldsValue']> = {},
  skipCheck: string[][] = []
): boolean {
  return (
    getFieldsError().every(error => !error.errors.length) &&
    getFieldNameInArray(initialValues)
      .filter(name => checkName(name, skipCheck))
      .some(name => {
        const value = getValueFromObjectByArrayName(name, initialValues);
        const formValue = getFieldValue(name);

        if (Array.isArray(value)) {
          return (
            formValue?.some((v: any, i: number) => {
              if (isHasChildren(value, i) && value[i]?.url) {
                return value[i]?.url !== v?.url;
              }

              return value.every((value: any) => value !== v);
            }) || formValue?.length !== value?.length
          );
        }

        return formValue != value && !getFieldError(name).length;
      })
  );
}

export { isSomeValueChangedAndValid };
