import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { TeamDto } from '@cha/shared/api';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-ang-lazy-load-table',
  templateUrl: './lazy-load-table.component.html',
  styleUrls: ['./lazy-load-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyLoadTableComponent implements OnInit {
  @Input() data: any;
  @Input() layout = 'scroll';
  @Input() tableColumns: any[] = [];
  @Input() tableType = 'draft';
  @Input() teams: TeamDto[] = [];
  @Input() filteringOptions: any[] = [];
  @Input() rows = 20;
  @Input() totalRecords = 0;
  @Input() sortField!: string;

  @Output() updateData = new EventEmitter<LazyLoadEvent>();

  @ViewChild('dt') dt: Table | undefined;

  loadedData!: any[];

  loading = false;

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.totalRecords);
  }

  getLogo(item: any) {
    if (this.teams.length > 0) {
      const found = this.teams.find(
        (team: TeamDto) => team.id === item
      )?.teamlogo;

      if (found) {
        return this.getString(found);
      } else {
        return;
      }
    } else {
      return;
    }
  }

  // TODO TEMP WILL NEED TO ADJUST USER TEAM LOGO STRING WHEN READY
  getString(urlString: string) {
    const temp = urlString.split('/');
    return `assets/${temp[temp.length - 1]}`;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }

  clear(table: Table) {
    table.clear();
  }

  onSelectionChange(event: any) {
    console.log(event);
  }

  loadData(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.updateData.emit(event);
      this.loading = false;
    }, 1000);
  }
}
