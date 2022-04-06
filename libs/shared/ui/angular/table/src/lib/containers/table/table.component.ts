import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
} from '@angular/core';
import { TeamDto } from '@cha/shared/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'cha-ang-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() data: any;
  @Input() layout = 'scroll';
  @Input() tableColumns: any[] = [];
  @Input() tableType = 'draft';
  @Input() teams: TeamDto[] = [];
  @Input() filteringOptions: any[] = [];
  @Input() rows = 20;
  @Input() totalRecords = 0;

  @ViewChild('dt') dt: Table | undefined;

  loadedData!: any[];

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
}
