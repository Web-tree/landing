import { Component, OnInit } from '@angular/core';
import {Project} from './project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
const PROJECTS: Project[] = [
  {
    title: 'My stuff',
    link: 'https://mystuff.webtree.org',
    subtitle: 'What do I use in my life?',
    description: '<p>Sharing and accumulating information about all useful things you have helps you to benefit in life.</p>'
  },
  {
    title: 'Trust',
    subtitle: 'Can we trust you? Can you trust others?',
    description:
      '<p>We are looking for the reasonable objectives to trust.</p>\n' +
      '<p>The main point is our losses must be higher than our profits in case of betray.</p>'
  },
  {
    title: 'My data',
    subtitle: 'Who uses my data?',
    description: '<p>The aim of the project is to store your personal data in one place.</p>'
  }
];
