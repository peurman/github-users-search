import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberSince',
})
export class MemberSincePipe implements PipeTransform {
  transform(value: Date): string {
    const yearsDifference =
      new Date().getFullYear() - new Date(value).getFullYear();
    const monthsDifference =
      yearsDifference * 12 + new Date().getMonth() - new Date(value).getMonth();
    const daysDifference = new Date().getDay() - new Date(value).getDay();
    // const message = `years: ${yearsDifference} - months: ${monthsDifference} - days: ${daysDifference}`;
    if (yearsDifference === 1 && monthsDifference >= 12) return `1 year ago`;
    else if (yearsDifference > 1) return `${yearsDifference} years ago`;
    else if (monthsDifference === 1) return `1 month ago`;
    else if (monthsDifference > 1) return `${monthsDifference} months ago`;
    else if (daysDifference === 0) return `today`;
    else if (daysDifference === 1) return `yesterday`;
    else return `${daysDifference} days ago`;
  }
}
