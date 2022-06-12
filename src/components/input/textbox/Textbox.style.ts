import tw from "tailwind-styled-components";

export const HtmlTextbox = tw.input`
    border-solid 
    p-1 
    px-2 
    flex
    items-center
    justify-center
    relative border-2
    outline-none
    transition-all
    ease-in-out
    duration-200
    flex-1
    bg-white
    border-gray-300
    rounded text-gray-700
    focus-within:ring-2
    focus-within:shadow-inner
    focus-within:border-blue-400
    focus-within:ring-blue-400
    focus-within:ring-opacity-20
`;