
export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-CA', {dateStyle: 'medium'}).format(new Date(dateString))
}
