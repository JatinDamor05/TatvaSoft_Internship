import {
  Component,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  templateUrl: './tab.html',
  styleUrl: './tab.css'
})
export class TabComponent {

  @Input() title: string = '';

  @ViewChild('content', { static: true })
  contentTemplate!: TemplateRef<unknown>;

}