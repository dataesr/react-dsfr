import React, { useState } from 'react';

import {
  Col, SimpleTable, Pagination, Row, Table,
} from '@dataesr/react-dsfr';

const data = [
  {
    id: 'PE',
    level: 1,
    name_fr: 'Sciences & Technologies',
    name_en: 'Physical Sciences and Engineering',
  },
  {
    id: 'LS',
    level: 1,
    name_fr: 'Vie & Santé',
    name_en: 'Life Sciences',
  },
  {
    id: 'SH',
    level: 1,
    name_fr: 'Sciences Humaines & Sociales',
    name_en: 'Social Sciences and Humanities',
  },
  {
    id: 'PE1',
    level: 2,
    name_fr: 'Mathématiques',
    name_en: 'Mathematics',
  },
  {
    id: 'PE2',
    level: 2,
    name_fr: 'Constituants fondamentaux de la matière',
    name_en: 'Fundamental Constituents of Matter',
  },
  {
    id: 'PE3',
    level: 2,
    name_fr: 'Physique de la matière condensée',
    name_en: 'Condensed Matter Physics',
  },
  {
    id: 'PE4',
    level: 2,
    name_fr: 'Chimie physique et analytique',
    name_en: 'Physical and Analytical Chemical Sciences',
  },
  {
    id: 'PE5',
    level: 2,
    name_fr: 'Chimie de synthèse et matériaux',
    name_en: 'Synthetic Chemistry and Materials',
  },
  {
    id: 'PE6',
    level: 2,
    name_fr: 'Sciences informatiques et informatique',
    name_en: 'Computer Science and Informatics',
  },
  {
    id: 'PE7',
    level: 2,
    name_fr: 'Ingénierie des systèmes et de la communication',
    name_en: 'Systems and Communication Engineering',
  },
  {
    id: 'PE8',
    level: 2,
    name_fr: 'Ingénierie des produits et des procédés',
    name_en: 'Products and Processes Engineering',
  },
  {
    id: 'PE9',
    level: 2,
    name_fr: 'Sciences de l\'Univers',
    name_en: 'Universe Sciences',
  },
  {
    id: 'PE10',
    level: 2,
    name_fr: 'Sciences de la Terre',
    name_en: 'Earth System Science',
  },
];

const columns = [
  // eslint-disable-next-line react/prop-types
  { name: 'level', label: 'Niveau', render: ({ level }) => `Niveau ${level}` },
  {
    name: 'name_fr',
    headerRender: () => (
      <div
        className="fr-fi-theme-fill fr-link--icon-left"
      >
        Français
        <div style={{ fontSize: 14, fontWeight: 'lighter' }}>
          avec un hint
        </div>
      </div>
    ),
    sortable: true,
  },
  { name: 'name_en', label: 'Anglais', sortable: true },
];

const TableExample = () => {
  const [page, setPage] = useState(1);
  return (
    <Col>
      <Row>
        <Col>
          <SimpleTable
            tableClassName="tableClassName"
            tableID="tableID-1"
            caption="Simple Table"
            data={data.slice((page - 1) * 3, page * 3)}
          />
          <Pagination
            currentPage={page}
            pageCount={5}
            onClick={setPage}
          />
        </Col>
      </Row>
      <Row>
        <Table
          caption="Complex Table"
          rowKey={(x) => x.id}
          data={data}
          columns={columns}
          pagination
          paginationPosition="center"
          perPage={3}
        />
      </Row>
    </Col>
  );
};

export default TableExample;
