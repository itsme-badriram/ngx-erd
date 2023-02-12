import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Node, Edge } from '@swimlane/ngx-graph';
import { keys } from 'd3';

@Component({
  selector: 'app-create-modal-dialog',
  templateUrl: './create-modal-dialog.component.html',
  styleUrls: ['./create-modal-dialog.component.css']
})
export class CreateModalDialogComponent implements OnInit {
modal = '';
modals = [];
attributeList = [];
relationshipList = [];
CARDINALITIES = [
  'ONE-TO-ONE',
  'ONE-TO-MANY',
  'MANY-TO-MANY'
];
ORACLE_DATATYPES = [
  'LONG',
  'DATE',
  'BINARY_FLOAT',
  'BINARY_DOUBLE'
];
CONSTRAINTS = [
  'NOT  NULL',
  'UNIQUE',
  'PRIMARY KEY',
  'FOREIGN KEY',
  'CHECK',
  'DEFAULT',
  'INDEX'
];
REFERENCES = [];
KEYS = [];
CREATION: boolean;
  constructor(public dialogRef: MatDialogRef<CreateModalDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (!this.data.create) {
      this.modal = this.data.node.id;
      this.attributeList = this.data.node.data.keys;
      for (const relation of this.data.links) {
        if (relation.source === this.modal) {
          const rel = {
            relation: this.modal,
            relatedTo: relation.target,
            cardinality: relation.data.relationship
          };
          this.relationshipList.push(rel);
        }
      }
      this.CREATION = false;
    }
    else {
      this.CREATION = true;
    }
    const nodes = this.data.nodes.filter(m => m.id !== this.modal);
    for (const node of nodes) {
      const ref = {
        parentTable: node.id,
        keys: node.data.keys
      };
      this.REFERENCES.push(ref);
    }
    this.modals = this.data.modals;
  }
  addAttribute() {
    const attribute = {
      name: '',
      dataType: '',
      constraint: ''
    };
    this.attributeList.push(attribute);
  }
  addRelationship() {
    const relationship = {
      relation: this.modal,
      relatedTo: '',
      cardinality: ''
    };
    this.relationshipList.push(relationship);
  }
  deleteAttribute(attribute) {
    this.attributeList = this.attributeList.filter(a => a.name !== attribute);

  }
  deleteRelationship(relationship) {
    console.log(this.relationshipList, relationship);
    this.relationshipList = this.relationshipList.filter(a => a.relatedTo !== relationship);
  }
  createTable() {
    const node = {
      id: this.modal,
      label: this.modal,
      data: {
        type: 'table',
        keys: this.attributeList
      }
    };
    const links = [];
    for (const relation of this.relationshipList) {
      const link = {
        id: relation.relation + '_' + relation.relatedTo,
        source: relation.relation,
        target: relation.relatedTo,
        label: 'Label',
        data: {
          relationship: relation.cardinality,
          joinType: ''
        }
      };
      links.push(link);
    }
    const graph = {
      nodes: node,
      edges: links,
      create: this.CREATION
    };
    console.log(node);
    this.dialogRef.close(graph);
  }
  getForeignKeys() {
    return this.attributeList.filter(a => a.constraint === 'FOREIGN KEY' );
  }
  onModalChange(modal) {
    console.log(modal);
    const ref = this.REFERENCES.filter(r => r.parentTable === modal);
    this.KEYS = ref[0].keys;
  }
}
