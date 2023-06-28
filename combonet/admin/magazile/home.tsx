import { Input } from "@/combonet/Input/Input";
import { Box, Button, MenuItem, Paper, Select, TextField } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CommonUtils from "../../../ultil/CommonUtils";
import axios from "../../../axios/axios";
import { adddetaildes, addmagazile, getcategorymagazile } from "@/service";
import { useRouter } from "next/router";
import { Editor } from "@tinymce/tinymce-react";

export function Home() {
  let [id, setid] = React.useState(0);
  let [name, setname] = React.useState("");
  let [image, setimage] = React.useState("");
  let [categorymagazile, setcategorymagazile] = React.useState([]);
  const editorRefintroduce: any = React.useRef(null);
  const clickmagazile = async () => {
    if (editorRefintroduce.current) {
      let introduce = editorRefintroduce.current.getContent();
      let res = await addmagazile({
        magazilename: name,
        magaziledes: introduce,
        image: image,
        categorymagazile_id: id,
        date: new Date().getTime(),
      });
      console.log(res);
    }
  };
  async function getcategorymagaziles() {
    let res = await getcategorymagazile();
    if (res && res.status === 0) {
      setcategorymagazile(res.data);
    }
  }
  React.useEffect(() => {
    getcategorymagaziles();
  }, []);
  const handleChange = (e: any) => {
    setid(e);
  };
  const handleonchanimage = async (e: any) => {
    let files = e.target.files;

    let file = files[0];

    if (file) {
      setimage(await CommonUtils.getBase64(file));
    }
  };
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          width: "800px",
          mx: "auto",
          py: "40px",
          mt: "50px",
          textAlign: "center",
          px: "20px",
        }}>
        <select
          style={{ width: "400px", height: "50px" }}
          onChange={(e) => handleChange(e.target.value)}>
          <option>...Product_ID...</option>
          {categorymagazile &&
            categorymagazile.length &&
            categorymagazile.map((item: any, index: number) => {
              return (
                <option key={index} value={item.id}>
                  {item.categorymagazilename}
                </option>
              );
            })}
        </select>
        <br></br>
        <label htmlFor=''>Name</label>
        <TextField
          value={name}
          onChange={(e) => setname(e.target.value)}
          id='outlined-basic'
          fullWidth
          label='Name'
          variant='outlined'
        />
        <label htmlFor=''>Ảnh</label>
        <TextField
          onChange={handleonchanimage}
          id='outlined-basic'
          fullWidth
          type='file'
          variant='outlined'
        />
        <label htmlFor=''>Mô tả</label>
        <Box width={"100%"}>
          <Box>
            <Editor
              apiKey='your-api-key'
              onInit={(evt, editor) => (editorRefintroduce.current = editor)}
              initialValue='<p>Introduce</p>'
              init={{
                height: 150,
                width: "100%",

                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "casechange blocks bold italic textcolor emoticons alignleft aligncenter alignright alignjustify  bullist numlist checklist  image media | undo redo ",

                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
              }}
            />
          </Box>
        </Box>

        <Button
          onClick={clickmagazile}
          type='submit'
          variant='contained'
          fullWidth
          color='success'
          sx={{ mt: "20px", background: "blue", color: "black" }}>
          ADD Magazile
        </Button>
      </Paper>
    </Box>
  );
}
