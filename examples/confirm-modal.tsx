import Modal, { Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";

import { Button } from "../src";
import Form from "../src/components/form";
import Steps from "../src/components/steps";
import { TrashIcon } from "@heroicons/react/outline";
import { ViewGridAddIcon } from "@heroicons/react/solid";

export const ConfirmModal = () => {
  const [open, setOpen] = useState(false);
  const [deleting,setDeleting] = useState(false);
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span><Button
        intent="destructive"
        onClick={() => setOpen(true)}
        startEnhancer={() => <TrashIcon />}
      >
        Delete
      </Button></span>
      </span>
      <Modal open={open} size="xs">
        <Form focus>
          <Header>
            <Title
              hero
              icon={<TrashIcon />}
              title="Delete"
              description="Are you sure you wish to delete this resource?"
            />
          </Header>
          <Footer>
            <span className="flex items-center justify-center flex-1 space-x-4">
              <span>
                <Button
                  variant="transparent"
                  intent="tertiary"
                  disabled={deleting}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </span>
              <span>
                <Button
                  intent="destructive"
                  loading={deleting}
                  startEnhancer={() => <TrashIcon />}
                  onClick={() => {
                    setDeleting(true);
                    setTimeout(()=>{
                      setDeleting(false);
                      setOpen(false)
                    },2000)
                  }}
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </Button>
              </span>
            </span>
          </Footer>
        </Form>
      </Modal>
    </>
  );
};
