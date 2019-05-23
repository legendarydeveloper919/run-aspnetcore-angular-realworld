import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Tabulator from 'tabulator-tables';
import { ITabulatorTableOptions } from './tabulator-table';

@Component({
  selector: 'app-tabulator-table',
  templateUrl: './tabulator-table.component.html',
  styleUrls: ['./tabulator-table.component.scss']
})
export class TabulatorTableComponent implements OnChanges {

  @Input() options: ITabulatorTableOptions;
  table: Tabulator;
  tab = document.createElement('div');

  @Input()
  set data(data) {
    this.options.data = data;
    if (this.table)
      this.table.setData(this.options.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.drawTable();
  }

  private drawTable(): void {
    this.table = new Tabulator(this.tab, {
      data: this.options.data,
      reactiveData: true,
      columns: this.options.columns,
      layout: 'fitColumns',
    });
    document.getElementById('tabular-table').appendChild(this.tab);
  }
}