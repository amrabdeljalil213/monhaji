import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function formatDate(date: Date, format: string = 'ar-SA'): string {
  return new Intl.DateTimeFormat(format, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('ar-SA', {
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('ar-SA', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getDateDifference(date: Date): string {
  const now = new Date();
  const diffTime = Math.abs(date.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'اليوم';
  if (diffDays === 1) return 'غدًا';
  if (diffDays < 7) return `خلال ${diffDays} أيام`;
  if (diffDays < 30) return `خلال ${Math.floor(diffDays / 7)} أسابيع`;
  if (diffDays < 365) return `خلال ${Math.floor(diffDays / 30)} أشهر`;

  return `خلال ${Math.floor(diffDays / 365)} سنوات`;
}

export function isOverdue(date: Date): boolean {
  return date < new Date();
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function isThisWeek(date: Date): boolean {
  const today = new Date();
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDay = new Date(today.setDate(today.getDate() + 6));
  return date >= firstDay && date <= lastDay;
}

export function getWeekStart(date: Date = new Date()): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day;
  return new Date(d.setDate(diff));
}

export function getWeekEnd(date: Date = new Date()): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + 6;
  return new Date(d.setDate(diff));
}

export function minutesToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}د`;
  if (mins === 0) return `${hours}س`;
  return `${hours}س ${mins}د`;
}

export const AR_DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
export const AR_MONTHS = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

export function getArabicDay(date: Date): string {
  return AR_DAYS[date.getDay()];
}

export function getArabicMonth(date: Date): string {
  return AR_MONTHS[date.getMonth()];
}

export function formatDateArabic(date: Date): string {
  return `${getArabicDay(date)} ${date.getDate()} ${getArabicMonth(date)} ${date.getFullYear()}`;
}
