export const emailFromInputRule = {
  required: true,
  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
};

export const passwordFromInputRule = {
  required: true,
  minLength: 6,
};
