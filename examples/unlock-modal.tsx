import { Button, Input } from "../src";
import { DeviceMobileIcon, LockClosedIcon } from "@heroicons/react/outline";
import Modal, { Content, Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";

import Form from "../src/components/form";

export const UnlockModal = () => {
  const [open, setOpen] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="secondary"
            onClick={() => setOpen(true)}
            startEnhancer={() => <LockClosedIcon />}
          >
            Authorise
          </Button>
        </span>
      </span>
      <Modal dismissable onClose={()=>setOpen(false)} open={open} size="sm">
       
          <Header>
            <Title
              hero
              icon={<DeviceMobileIcon />}
              title="Authorisation required"
              description="Please enter your 2FA code below to access."
            />
          </Header>
          <Content>
            <div className="max-w-full md:w-64 m-auto">
              <Input type="pin" autofocus />
            </div>
          </Content>
          <Footer>
            <span className="flex-1 flex">
              <span className="flex m-auto w-1/2">
                <Button
                  intent="primary"
                  loading={unlocking}
                  onClick={() => {
                    setUnlocking(true);
                    setTimeout(() => {
                      setUnlocking(false);
                      setOpen(false);
                    }, 2000);
                  }}
                >
                  Login
                </Button>
              </span>
            </span>
          </Footer>
    
      </Modal>
    </>
  );
};
