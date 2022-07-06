import RichTextEditor from 'react-rte';
import styled from "styled-components";
export default styled(RichTextEditor)`

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