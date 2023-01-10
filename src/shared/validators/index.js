export const isRequired = (value) => (value ? undefined : 'Required');

export const isNumber = (value) => (isNaN(value) ? 'Must be a number' : undefined);

export const isYear = (value) => {
  if (value && (value.length < 4 || value.length > 4)) {
    return 'Must be 4 symbols';
  }

  if (value < 1850 || value > 2023) {
    return 'Must be in the range of "1850 - 2023"';
  }

  return undefined;
};

export const composeValidators =
  (...validators) =>
    (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined);
