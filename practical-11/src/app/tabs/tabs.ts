import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

import { TabComponent } from '../tab/tab';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css'
})

export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  activeTab: TabComponent | null = null;

  ngAfterContentInit(): void {
    console.log('Tabs found:', this.tabs.length);

    if (this.tabs.length > 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): void {
    this.activeTab = tab;

    console.log('Active tab:', tab.title);
  }
}