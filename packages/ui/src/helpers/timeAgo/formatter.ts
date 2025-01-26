/**
 * Formats a given time value with its unit and suffix.
 *
 * @param value - The numerical value representing the time.
 * @param _unit - The unit of time (e.g., "minute", "hour").
 * @param suffix - The suffix to append (e.g., "ago", "from now").
 * @returns A formatted string combining the value, unit, and suffix.
 */
export default function defaultFormatter(value: number, _unit: string, suffix: string): string {
  const unit = value !== 1 ? `${_unit}s` : _unit;

  return `${value} ${unit} ${suffix}`;
}
