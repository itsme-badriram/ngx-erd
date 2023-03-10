import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'dbm_mrd_btl',
    label: 'dbm_mrd_btl',
    data: {
      type: 'table',
      keys: [
        {name: 'productcode', dataType: 'number', constraint: 'foreign_key' },{name : 'accountkey', constraint : 'primary_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key', dataType: 'string'},
        {name : 'key_23', constraint : 'field', dataType: 'integer'},
        {name : 'key_1', constraint : 'field', dataType: 'double'},
        {name : 'key_2', constraint : 'field', dataType: 'string'},
        {name : 'key_23', constraint : 'field' , dataType: 'integer'},
        {name : 'key_23', constraint : 'field', dataType: 'integer'},
        {name : 'key_1', constraint : 'field', dataType: 'double'},
        {name : 'key_2', constraint : 'field', dataType: 'string'},
        {name : 'key_23', constraint : 'field' , dataType: 'integer'}
      ]
    }
  },
  {
    id: 'table_211',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_2111',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_2112',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_212',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_2121',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_2122',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'table_2',
    label: 'table_2',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  }, {
    id: 'table_3',
    label: 'table_3',
    data: {
      type: 'table',
      keys: [
        {name : 'gsn', constraint : 'foreign_key' , dataType: 'number'},
        {name : 'cob_dt', constraint : 'foreign_key', dataType: 'number'},
        {name : 'key_5keykey', constraint : 'primary_key', dataType: 'string'},
        {name : 'key_5', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'dbm_mrd_btl1',
    label: 'dbm_mrd_btl1',
    data: {
      type: 'table',
      keys: [
        {name: 'productcode', dataType: 'number', constraint: 'foreign_key' },{name : 'accountkey', constraint : 'primary_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key', dataType: 'string'},
        {name : 'key_23', constraint : 'field', dataType: 'integer'},
        {name : 'key_1', constraint : 'field', dataType: 'double'},
        {name : 'key_2', constraint : 'field', dataType: 'string'},
        {name : 'key_23', constraint : 'field' , dataType: 'integer'}
      ]
    }
  }, {
    id: 'table_21',
    label: 'table_21',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  }, {
    id: 'table_31',
    label: 'table_31',
    data: {
      type: 'table',
      keys: [
        {name : 'gsn', constraint : 'foreign_key' , dataType: 'number'},
        {name : 'cob_dt', constraint : 'foreign_key', dataType: 'number'},
        {name : 'key_5keykey', constraint : 'primary_key', dataType: 'string'},
        {name : 'key_5', constraint : 'field', dataType: 'double'}
      ]
    }
  },
  {
    id: 'dbm_mrd_btl2',
    label: 'dbm_mrd_btl2',
    data: {
      type: 'table',
      keys: [
        {name: 'productcode', dataType: 'number', constraint: 'foreign_key' },{name : 'accountkey', constraint : 'primary_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key', dataType: 'string'},
        {name : 'key_23', constraint : 'field', dataType: 'integer'},
        {name : 'key_1', constraint : 'field', dataType: 'double'},
        {name : 'key_2', constraint : 'field', dataType: 'string'},
        {name : 'key_23', constraint : 'field' , dataType: 'integer'}
      ]
    }
  }, {
    id: 'table_22',
    label: 'table_22',
    data: {
      type: 'table',
      keys: [
        {name : 'accountkey', constraint : 'foreign_key', dataType: 'number'},
        {name : 'reporting_month', constraint : 'foreign_key' , dataType: 'string'},
        {name : 'key_3', constraint : 'field', dataType: 'integer'},
        {name : 'key_4', constraint : 'field', dataType: 'double'}
      ]
    }
  }, {
    id: 'table_32',
    label: 'table_32',
    data: {
      type: 'table',
      keys: [
        {name : 'gsn', constraint : 'foreign_key' , dataType: 'number'},
        {name : 'cob_dt', constraint : 'foreign_key', dataType: 'number'},
        {name : 'key_5keykey', constraint : 'primary_key', dataType: 'string'},
        {name : 'key_5', constraint : 'field', dataType: 'double'}
      ]
    }
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2']
  }
];
export const links: Edge[] = [
  {
    id: 'a',
    source: 'dbm_mrd_btl',
    target: 'table_2',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'aba',
    source: 'dbm_mrd_btl',
    target: 'table_211',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'abaf',
    source: 'dbm_mrd_btl',
    target: 'table_212',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'abaab',
    source: 'table_211',
    target: 'table_2111',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'abaabfg',
    source: 'table_211',
    target: 'table_2112',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'abacbc',
    source: 'table_212',
    target: 'table_2121',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
  {
    id: 'abacbcf',
    source: 'table_212',
    target: 'table_2122',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  },
   {
    id: 'b',
    source: 'dbm_mrd_btl',
    target: 'table_3',
    label: 'custom label',
    data: {
      relationship: 'ManyToMany',
      joinType : 'Left',
	masterkey: [{name: 'productcode'}, {name: 'reporting_month'}],
      slavekey: [{name: 'gsn'}, {name: 'cob_dt'}]
    }
  },
  {
    id: 'aa',
    source: 'dbm_mrd_btl1',
    target: 'table_21',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
      masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  }, {
    id: 'bb',
    source: 'dbm_mrd_btl1',
    target: 'table_31',
    label: 'custom label',
    data: {
      relationship: 'ManyToMany',
      joinType : 'Left',
      masterkey: [{name: 'productcode'}, {name: 'reporting_month'}],
      slavekey: [{name: 'gsn'}, {name: 'cob_dt'}]
    }
  },
  {
    id: 'aaa',
    source: 'dbm_mrd_btl2',
    target: 'table_22',
    label: 'is parent of',
    data: {
      relationship: 'OneToOne',
      joinType : 'Left',
       masterkey: [{name: 'accountkey'}, {name: 'reporting_month'}],
      slavekey: [{name: 'accountkey'}, {name: 'reporting_month'}],
    }
  }, {
    id: 'bbb',
    source: 'dbm_mrd_btl2',
    target: 'table_32',
    label: 'custom label',
    data: {
      relationship: 'ManyToMany',
      joinType : 'Left',
      masterkey: [{name: 'productcode'}, {name: 'reporting_month'}],
      slavekey: [{name: 'gsn'}, {name: 'cob_dt'}]
    }
  }
];
