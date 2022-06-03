import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

export class PageModel<T> {
  constructor(items, pageIndex, pageCount) {
    this.Items = items;
    this.PageIndex = pageIndex;
    this.PageCount = pageCount;

    this.NextPageIndex = pageIndex === (pageCount - 1) ? null : pageIndex + 1;
    this.PreviousPageIndex = pageIndex === 0 ? null : pageIndex - 1;
  }

  Items: T[];
  NextPageIndex: number;
  PageCount: number;
  PageIndex: number;
  PreviousPageIndex: number;

  public get NextPageIndexes(): number[] {
    return this.GetNextPageIndexes();
  }
  public get PreviousPageIndexes(): number[] {
    return this.GetPreviousPageIndexes();
  }

  GetNextPageIndexes(): number[] {
    const idxs: number[] = [];
    if (isNotNullOrUndefined(this.NextPageIndex)) {
      for (let i = this.PageIndex + 1; i < this.PageCount && idxs.length < 3; i++) {
        idxs.push(i);
      }
    }
    return idxs;
  }
  GetPreviousPageIndexes(): number[] {
    const idxs: number[] = [];
    if (isNotNullOrUndefined(this.PreviousPageIndex)) {
      for (let i = this.PageIndex - 1; i >= 0 && idxs.length < 3; i--) {
        idxs.unshift(i);
      }
    }
    return idxs;
  }
}
