import { Button, Input } from "../src";
import  { Content, Footer, Header, Title } from "../src/components/modal";
import { DeviceMobileIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useApplication, useForm } from "../src/hooks";

import React from "react";
import { useModal } from "../src/contexts/ModalContext";
import { withApplication } from "../src/contexts/ApplicationContext";

export const UnlockModal = withApplication(() => {

  const { openModal } = useApplication()

  return (
    <>
      <span className="flex-1 flex items-center justify-center">
        <span>
          <Button
            intent="secondary"
            onClick={() => {
              openModal(<ExampleModal />,{ size:"sm", dismissable:true })
            }}
            startEnhancer={() => <LockClosedIcon />}
          >
            Authorise
          </Button>
        </span>
      </span>
    </>
  );
});

const ExampleModal = () => {
  const { close } = useModal();
  const { isSubmitting, submit } = useForm();

  const { openModal } = useApplication()

  // useEffect(()=>{
  //   openModal(<ExampleCancelModal />,{ size:"sm", dismissable:true })
  // },[])

  return (
    <>
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
              loading={isSubmitting}
              onClick={() => submit().then(()=>close())}
            >
              Login
            </Button>
          </span>
        </span>
      </Footer>
    </>
  );
};
