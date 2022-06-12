import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Button, Input } from "../src";
import Modal, { Content, Footer, Header, Title } from "../src/components/modal";
import { Section, Sections } from "../src/components/section";

import Form from "../src/components/form";
import React from "react";
import Steps from "../src/components/steps";
import { ViewGridAddIcon } from "@heroicons/react/solid";

export const NewVersionModal = () => {
  return (
    <Modal isOpen size="lg">

        <Form focus>
          <Header>
            <div style={{ backgroundImage: 'url(https://cdn.dribbble.com/users/43762/screenshots/7500201/media/805738c6b51a76d3bb6a042900a90874.gif)'}} className="bg-cover bg-center border-2 border-slate-200 bg-slate-400 relative  rounded-lg h-64 -mb-14 m-5 flex-1 flex items-center justify-center"></div>
          </Header>
       
          <Content>
           
            <div className="p-5 pt-20 pb-20 flex flex-col space-y-3 justify-center items-center text-slate-600">
              <Section between={/[0]/}>
               <div className="font-semibold">Introducing dashboard</div>
               <div className="text-xs">The newest feature, check out how about</div>
              </Section>
              <Section between={/[1]/}>
                  All about the version
              </Section>
              <Section between={/[2]/}>
                  All about the version
              </Section>
            </div>
          </Content>
          <Footer>
           <span className="flex-1 flex">
           <span>
              <Button variant="transparent" intent="tertiary">
                Skip
              </Button>
            </span>
           </span>
           
           <span>
                <Button intent="primary" onClick="next" startEnhancer={()=><ArrowRightIcon />}>
                  Learn about dashboard
                </Button>
              </span>
           
          </Footer>
        </Form>
     
    </Modal>
  );
};
