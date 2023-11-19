'use client';

import { useState } from 'react';
import { type CodeData } from '~/components/code-demo';
import { Button, Modal, Select } from '~/src';

const code = `
'use client';

import { Button, Modal, Select } from 'flowbite-react';
import { useState } from 'react';

function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState<string>('md');

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="w-40">
          <Select defaultValue="md" onChange={(event) => setModalSize(event.target.value)}>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
            <option value="4xl">4xl</option>
            <option value="5xl">5xl</option>
            <option value="6xl">6xl</option>
            <option value="7xl">7xl</option>
          </Select>
        </div>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      </div>
      <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
`;

function Component() {
  const [openModal, setOpenModal] = useState(false);
  const [modalSize, setModalSize] = useState<string>('md');

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="w-40">
          <Select defaultValue="md" onChange={(event) => setModalSize(event.target.value)}>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="3xl">3xl</option>
            <option value="4xl">4xl</option>
            <option value="5xl">5xl</option>
            <option value="6xl">6xl</option>
            <option value="7xl">7xl</option>
          </Select>
        </div>
        <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      </div>
      <Modal show={openModal} size={modalSize} onClose={() => setOpenModal(false)}>
        <Modal.Header>Small modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export const sizes: CodeData = {
  type: 'single',
  code: {
    fileName: 'client',
    language: 'tsx',
    code,
  },
  githubSlug: 'modal/modal.sizes.tsx',
  component: <Component />,
};
