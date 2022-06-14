import { LocationMarkerIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const StartEnhancer = tw(LocationMarkerIcon)`
    text-gray-500
    ml-2
    flex-shrink-0
    w-4
`;

export const AddressWrapper = tw.div`
   flex 
   flex-col
`;


