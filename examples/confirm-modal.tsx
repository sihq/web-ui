import Modal, { Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";
import { useApplication, useForm } from "../src/hooks";

import { Button } from "../src";
import { TrashIcon } from "@heroicons/react/outline";
import { useModal } from "../src/contexts/ModalContext";
import { withApplication } from "../src/contexts/ApplicationContext";

export const ConfirmModal = withApplication(() => {
  const { openModal } = useApplication();
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="destructive"
            onClick={() => {
              openModal(<ExampleModal />, { size: "xs" });
            }}
            startEnhancer={() => <TrashIcon />}
          >
            Delete
          </Button>
        </span>
      </span>
    </>
  );
});

const ExampleModal = () => {
  const { close } = useModal();
  const { isSubmitting, submit } = useForm();

  return (
    <>
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
              disabled={isSubmitting}
              onClick={() => close(true)}
            >
              Cancel
            </Button>
          </span>
          <span>
            <Button
              intent="destructive"
              loading={isSubmitting}
              startEnhancer={() => <TrashIcon />}
              onClick={() => submit().then(() => close())}
            >
              {isSubmitting ? "Deleting..." : "Delete"}
            </Button>
          </span>
        </span>
      </Footer>
    </>
  );
};
