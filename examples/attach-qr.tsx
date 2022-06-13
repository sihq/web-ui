import { Button, Input } from "../src";
import { Content, Footer, Header, Title } from "../src/components/modal";
import { useApplication, useForm } from "../src/hooks";

import { QrcodeIcon } from "@heroicons/react/outline";
import React from "react";
import { useModal } from "../src/contexts/ModalContext";
import {
withApplication,
} from "../src/contexts/ApplicationContext";

export const AttachQR = withApplication(() => {
  const { openModal } = useApplication();
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="secondary"
            onClick={() => {
              openModal(<ExampleModal />, { size: "sm", dismissable: true });
            }}
            startEnhancer={() => <QrcodeIcon />}
          >
            Attach
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
          icon={<QrcodeIcon />}
          title="Attach QR Code"
          description="Please enter the QR Code ID to attach"
        />
      </Header>
      <Content>
        <div className="max-w-full md:w-64 m-auto">
          <Input type="pin" autofocus mask={false} alphanumeric size={5} />
        </div>
      </Content>
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
              intent="primary"
              loading={isSubmitting}
              startEnhancer={() => <QrcodeIcon />}
              onClick={() => submit().then(() => close())}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </span>
        </span>
      </Footer>
    </>
  );
};
