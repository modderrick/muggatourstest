import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LatestBookingsTableDataSource, LatestBookingsTableItem } from './latest-bookings-table-datasource';

@Component({
  selector: 'app-latest-bookings-table',
  templateUrl: './latest-bookings-table.component.html',
  styleUrls: ['./latest-bookings-table.component.css']
})
export class LatestBookingsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<LatestBookingsTableItem>;
  dataSource: LatestBookingsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new LatestBookingsTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
