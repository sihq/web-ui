import { Button, Input } from "../src";
import Modal, { Content, Footer, Header, Title } from "../src/components/modal";
import React, { useState } from "react";

import { QrcodeIcon } from "@heroicons/react/outline";

export const AttachQR = () => {
  const [open, setOpen] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="secondary"
            onClick={() => setOpen(true)}
            startEnhancer={() => <QrcodeIcon />}
          >
            Attach
          </Button>
        </span>
      </span>
      <Modal dismissable onClose={()=>setOpen(false)} open={open} size="sm">
       
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
                disabled={unlocking}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </span>
            <span>
              <Button
                intent="primary"
                loading={unlocking}
                startEnhancer={() => <QrcodeIcon />}
                onClick={() => {
                  setUnlocking(true);
                  setTimeout(() => {
                    setUnlocking(false);
                    setOpen(false);
                  }, 2000);
                }}
              >
                {unlocking ? "Saving..." : "Save"}
              </Button>
            </span>
          </span>


           
          </Footer>
    
      </Modal>
    </>
  );
};
