import { FormInstance } from 'rc-field-form/es/interface';

function checkName(name: string[], notRequiredFields: string[][]) {
  if (!name.every(value => typeof value === 'string')) {
    checkName(name, notRequiredFields);
  } else {
    return (
      !notRequiredFields?.some(value => name.every((n, i) => n === value[i])) &&
      !name.includes('EN')
    );
  }
}

function isHasChildren<Source>(source: Source, key: keyof Source) {
  return source[key] && typeof source[key] === 'object';
}

function getFieldNameInArray<T extends Record<string, unknown | object>>(
  obj: T,
  arr: string[][] = [],
  parent: string[] = []
) {
  if (!obj) return [];

  Object.keys(obj).forEach(key => {
    let fullKey: string[] = [];

    if (parent) {
      fullKey = [...parent, ...fullKey];
    }

    fullKey.push(key);

    if (isHasChildren(obj, key) && !Array.isArray(obj[key])) {
      getFieldNameInArray(obj[key] as T, arr, fullKey);
    } else {
      arr.push(fullKey);
    }
  });

  return arr;
}

function formIsValid(
  {
    getFieldsValue,
    getFieldValue,
    getFieldError
  }: Pick<
    FormInstance,
    'getFieldsValue' | 'getFieldValue' | 'getFieldError' | 'isFieldTouched'
  >,
  notRequiredFields: string[][]
): boolean {
  return getFieldNameInArray(getFieldsValue())
    .filter(name => checkName(name, notRequiredFields))
    .every(name => {
      const value = getFieldValue(name);

      let hasValue = !!value || value === 0 || value === false;

      if (Array.isArray(value)) {
        hasValue = !!value.length;
      }

      return hasValue && !getFieldError(name).length;
    });
}

export { formIsValid, checkName, getFieldNameInArray, isHasChildren };
