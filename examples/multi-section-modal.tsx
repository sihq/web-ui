import { Button, Input } from "../src";
import  { Content, Footer, Header, Title } from "../src/components/modal";
import { Section, Sections } from "../src/components/section";
import { useApplication, useForm, useModal } from "../src/hooks";
import {
withApplication,
withForm,
} from "../src/hocs";

import Label from "../src/components/label";
import React from "react";
import Steps from "../src/components/steps";
import { ViewGridAddIcon } from "@heroicons/react/solid";

export const MultiSectionModal = withApplication(() => {
  const { openModal } = useApplication();
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="constructive"
            onClick={() => {
              openModal(<ExampleModal autofocus />, { size: "sm" });
            }}
            startEnhancer={() => <ViewGridAddIcon />}
          >
            Create
          </Button>
        </span>
      </span>
    </>
  );
});

const ExampleModal = withForm(() => {
  const { close } = useModal();
  const { isSubmitting, submit } = useForm();

  return (
    <>
      <Sections sections={2}>
        <Header>
          <Title icon={<ViewGridAddIcon />} title="New tenant" />
        </Header>
        <Content>
          <Steps />
          <div className="p-5 flex flex-col space-y-3">
            <Section between={/[0]/}>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>Company name:</Label>
                  <Input type="textbox" />
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>First name:</Label>
                  <Input type="textbox" />
                </div>
                <div className="flex-1 flex flex-col">
                  <Label>Last name:</Label>
                  <Input type="textbox" />
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>Email:</Label>
                  <Input type="email" />
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>Phone:</Label>
                  <Input type="phone" />
                </div>
              </div>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>Address:</Label>
                  <Input type="address" />
                </div>
              </div>
            </Section>
            <Section between={/[1]/}>
              <div className="flex space-x-3">
                <div className="flex-1 flex flex-col">
                  <Label>Profile:</Label>
                  <Input type="richtextarea" />
                </div>
              </div>
            </Section>
          </div>
        </Content>
        <Footer>
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
          <Section between={/[1-2]/}>
            <span>
              <Button intent="secondary" disabled={isSubmitting} onClick="back">
                Back
              </Button>
            </span>
          </Section>
          <Section between={/[0-1]/}>
            <span>
              <Button intent="primary" onClick="next">
                Next
              </Button>
            </span>
          </Section>
          <Section between={/[2]/}>
            <span>
              <Button
                intent="constructive"
                loading={isSubmitting}
                onClick={() => submit().then(() => close())}
              >
                Save
              </Button>
            </span>
          </Section>
        </Footer>
      </Sections>
    </>
  );
});
