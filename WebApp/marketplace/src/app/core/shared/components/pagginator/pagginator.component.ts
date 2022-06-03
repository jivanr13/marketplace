import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageModel} from '../../../models/page.model';
import {OfferModel} from '../../../marketplace-api/models/offer.model';

@Component({
  selector: 'app-pagginator',
  templateUrl: './pagginator.component.html',
  styleUrls: ['./pagginator.component.scss']
})
export class PagginatorComponent implements OnInit {
  @Input()
  listItems: any[];
  @Input()
  pageSize = 4;

  @Output() changePage: EventEmitter<any[]> = new EventEmitter();

  paggin: PageModel<OfferModel>;

  constructor() { }

  ngOnInit(): void {
    this.paggin = new PageModel<OfferModel>(this.listItems, 0, Math.ceil(this.listItems.length / this.pageSize));
    this.executeChangePage(0);
  }

  navigate(index: number): void {
    this.paggin = new PageModel<OfferModel>(this.listItems, index, this.paggin.PageCount);
    this.executeChangePage(index);
  }
  executeChangePage(index: number): void {
    const items: any[] = [];
    if (this.paggin.PageCount > 0 && this.listItems && this.listItems.length > 0) {
      const total = this.listItems.length;

      const iniIdx = this.pageSize * index;
      let endIdx = iniIdx + this.pageSize;

      if (endIdx >= total) {
        endIdx = iniIdx + (total - iniIdx);
      }
      for (let i = iniIdx; i < endIdx; i++) {
        items.push(this.listItems[i]);
      }
    }
    this.changePage.emit(items);
  }

  previousPage(): void {
    this.navigate(this.paggin.PreviousPageIndex);
  }

  nextPage(): void {
    this.navigate(this.paggin.NextPageIndex);
  }
}
