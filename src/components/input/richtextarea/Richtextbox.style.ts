import RichTextEditor from 'react-rte';
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const InputWrapper = tw.div`
    border-solid p-1 px-2 flex items-center justify-center relative border-2 outline-none transition-all ease-in-out duration-200 flex-1
    bg-white border-gray-300    rounded text-gray-700
    
    focus-within:ring-2 focus-within:shadow-inner  focus-within:border-blue-400 focus-within:ring-blue-400 focus-within:ring-opacity-20
    
    
`;

export const Editor = styled(RichTextEditor)`

  border:0px;
  display:flex;
  flex-direction: column;
  flex:1;

  font-family:inherit;
  font-size: inherit;

  .EditorToolbar__root___3_Aqz{
    order:2;
    border-top: 1px solid #ccc;
    border-bottom:0px;
    padding-bottom:0px;
  }
  .public-DraftEditor-content{
    order:1;
    margin-bottom:5px;
    min-height: 50px;
    max-height: 200px;
    overflow: auto;
  }
  .public-DraftEditor-content{
    padding:0px;
  }
  .EditorToolbar__root___3_Aqz{
    margin:0px;
    z-index:1;
  }


  a{
    text-decoration:underline;
    color: rgb(7 89 133);
  }
`;