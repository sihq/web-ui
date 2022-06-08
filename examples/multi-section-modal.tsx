import { Button, Input } from "../src";
import Modal, { Content, Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";
import { Section, Sections } from "../src/components/section";

import Form from "../src/components/form";
import Steps from "../src/components/steps";
import { ViewGridAddIcon } from "@heroicons/react/solid";

export const MultiSectionModal = () => {
  const [open, setOpen] = useState(false);
  const [creating,setCreating] = useState(false);
  return (
    <>
    <span className="flex-1 flex items-center justify-center">
      <span><Button
      intent="constructive"
      onClick={() => setOpen(true)}
      startEnhancer={() => <ViewGridAddIcon />}
    >
      Create
    </Button></span>
    </span>
    <Modal open={open}>
      <Sections sections={2}>
        <Form focus>
          <Header>
            <Title icon={<ViewGridAddIcon />} title="New tenant" />
          </Header>
          <Content>
            <Steps />
            <div className="p-5 flex flex-col space-y-3">
              <Section between={/[0]/}>
                <div className="flex space-x-3">
                  <div className="flex-1 flex flex-col">
                    Company name:
                    <Input type="textbox" />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1 flex flex-col">
                    First name:
                    <Input type="textbox" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    Last name:
                    <Input type="textbox" />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1 flex flex-col">
                    Email:
                    <Input type="textbox" />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="flex-1 flex flex-col">
                    Phone:
                    <Input type="textbox" />
                  </div>
                </div>
              </Section>
              <Section between={/[1]/}>
                <div className="flex space-x-3">
                  <div className="flex-1 flex flex-col">
                    Password:
                    <Input type="textbox" />
                  </div>
                </div>
              </Section>
            </div>
          </Content>
          <Footer>
            <span>
              <Button variant="transparent" intent="tertiary"  disabled={creating} onClick={()=> setOpen(false)}>
                Cancel
              </Button>
            </span>
            <Section between={/[1-2]/}>
              <span>
                <Button intent="secondary" disabled={creating}  onClick="back">
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
                <Button intent="constructive" loading={creating} onClick={()=> {
                  setCreating(true)
                  setTimeout(()=>{
                    setCreating(false)
                    setOpen(false)
                  },2000)
                }}>Save</Button>
              </span>
            </Section>
          </Footer>
        </Form>
      </Sections>
    </Modal>
    </>
  );
};
