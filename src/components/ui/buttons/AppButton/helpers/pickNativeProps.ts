const CUSTOM_KEYS = new Set([
  'isLoading',
  'isDisabled',
  'icon',
  'iconPosition',
  'size',
  'variant',
  'fullWidth',
  'href',
  'to',
  'children',
  'className',
  'isUppercase'
]);

function pickNativeProps(
  props: Record<string, unknown>,
): Record<string, unknown> {
  const native: Record<string, unknown> = {};
  for (const key of Object.keys(props)) {
    if (!CUSTOM_KEYS.has(key)) {
      native[key] = props[key];
    }
  }
  return native;
}
export default pickNativeProps;