import { convertTime } from '.';

export const getTimestamp = (): string => {
  const time = convertTime(new Date().toLocaleTimeString('en-US', { hour12: true })) || '00:00:00';
  // const date = new Date().toLocaleDateString()
  const date = new Date().toLocaleDateString('default', { month: 'numeric', day: 'numeric' });

  return `${date} ${time}`;
};