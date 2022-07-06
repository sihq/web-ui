import textbox from "../textbox";
import tw from "tailwind-styled-components";

export const PinWrapper = tw.div`
    space-x-1
    flex
    items-center
    flex-1
`;


export const PinInput = tw(textbox)`text-center w-10 flex-1`