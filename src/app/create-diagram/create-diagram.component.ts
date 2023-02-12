import { Component, OnInit } from '@angular/core';
import { Node, Edge, ClusterNode, Layout, DagreLayout, Orientation } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';
import { CreateModalDialogComponent } from '../create-modal-dialog/create-modal-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-create-diagram',
  templateUrl: './create-diagram.component.html',
  styleUrls: ['./create-diagram.component.css']
})
export class CreateDiagramComponent implements OnInit {
modals = [];
nodes = [];
links = [];
layout: Layout = new DagreLayout();

// Graph Configuration
draggingEnabled: boolean = false;
panningEnabled: boolean = true;
zoomEnabled: boolean = true;
panOnZoom: boolean = true;
autoZoom: boolean = true;
autoCenter: boolean = true;
update$: Subject<boolean> = new Subject();
center$: Subject<boolean> = new Subject();
zoomToFit$: Subject<boolean> = new Subject();
panToNode$: Subject<string> = new Subject();
zoom = 0.3;
zoomSpeed: number = 0.1;


  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  openCreateModalDialog() {
    let dialogRef = this.dialog.open(CreateModalDialogComponent, {
      data: {
        modals: this.modals,
        nodes: this.nodes,
        create: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.nodes) {
        console.log(result);
        this.nodes = this.nodes.concat(result.nodes);
        this.modals.push(result.nodes.id);
      }
      if (result.edges) {
        this.links = this.links.concat(result.edges);
      }
    });
  }
  checkConstraint(constraint) {
    if (constraint === 'PRIMARY KEY') {
      return '../assets/' + 'primary_key' + '.png';
    }
    else if (constraint === 'FOREIGN KEY') {
      return '../assets/' + 'foreign_key' + '.png';
    }
    return '../assets/' + 'field' + '.png';
  }
  openNodeModal(node) {
    let dialogRef = this.dialog.open(CreateModalDialogComponent, {
      data: {
        modals: this.modals,
        create: false,
        nodes: this.nodes,
        node,
        links: this.links
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.nodes) {
        console.log(result);
        this.nodes = this.nodes.filter(m => m.id !== node.id);
        this.nodes = this.nodes.concat(result.nodes);
        this.modals = this.modals.filter(m => m !== node.id);
        this.modals.push(result.nodes.id);
      }
      if (result.edges) {
        this.links = this.links.filter(m => m.source !== node.id);
        this.links = this.links.concat(result.edges);
      }
    });
  }
}
