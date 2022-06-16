import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'cha-ang-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonComponent implements OnInit, AfterViewInit {
  @Input() options!: any[];

  @Output() optionChanged = new EventEmitter<string>();

  optionSelected = new UntypedFormControl();

  onOptionClick(option: any) {
    this.optionSelected.setValue(option.option.value);
  }

  ngOnInit(): void {
    this.optionSelected.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value: string) => {
        this.optionChanged.emit(value);
      });
  }

  ngAfterViewInit(): void {
    this.optionSelected.setValue(this.options[0].value);
  }
}
