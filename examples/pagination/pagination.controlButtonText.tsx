'use client';
import React from 'react';

import { useState } from 'react';
import { Pagination } from '~/src';

const code = `
'use client';

import { Pagination } from 'pol-ui';
import { useState } from 'react';

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={1000}
        onPageChange={onPageChange}
        previousLabel="Go back"
        nextLabel="Go forward"
        showIcons
      />
    </div>
  );
}
`;

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        layout="pagination"
        currentPage={currentPage}
        totalPages={1000}
        onPageChange={onPageChange}
        previousLabel="Go back"
        nextLabel="Go forward"
        showIcons
      />
    </div>
  );
}

export const controlButtonText = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'pagination/pagination.controlButtonText.tsx',
  component: <Component />,
};
