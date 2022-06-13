import { Button, Input } from "../src";
import Modal, { Content, Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";
import { useApplication, useForm } from "../src/hooks";

import { BanIcon } from "@heroicons/react/outline";
import { useModal } from "../src/contexts/ModalContext";
import { withApplication } from "../src/contexts/ApplicationContext";

export const CancelModal = withApplication(() => {
  const {openModal} =  useApplication()
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="consumptive"
            onClick={() => openModal(<ExampleCancelModal />,{size:"sm"})}
            startEnhancer={() => <BanIcon />}
          >
            Cancel
          </Button>
        </span>
      </span>
    </>
  );
});

export const ExampleCancelModal = () => {
  const { close } = useModal();
  const { isSubmitting, submit } = useForm();
  return (
    <>
      <Header>
        <Title
          hero
          icon={<BanIcon />}
          title="Cancel"
          description="Are you sure you wish to cancel this resource?"
        />
      </Header>
      <Content>
        <div className="px-2">
          <div className="flex flex-col divide-y divide-slate-200">
            <div>
              <div className="py-2 px-8 flex items-center space-x-2">
                <Input type="toggle">
                  <span className="text-xs text-slate-600">
                    Send notification to Customer
                  </span>
                </Input>
              </div>
            </div>
            <div>
              <div className="py-2 px-8 flex items-center space-x-2">
                <Input type="toggle">
                  <span className="text-xs text-slate-600">
                    Send notification to Counsellor
                  </span>
                </Input>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer>
        <span className="flex items-center justify-center flex-1 space-x-4">
          <span>
            <Button
              variant="transparent"
              intent="tertiary"
              disabled={isSubmitting}
              onClick={() => close()}
            >
              Cancel
            </Button>
          </span>
          <span>
            <Button
              intent="consumptive"
              loading={isSubmitting}
              startEnhancer={() => <BanIcon />}
              onClick={() => submit().then(() => close())}
            >
              {isSubmitting ? "Canceling..." : "Cancel"}
            </Button>
          </span>
        </span>
      </Footer>
    </>
  );
};
