import { Input } from "@/combonet/Input/Input";
import { Box, Button, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CommonUtils from "../../../ultil/CommonUtils";
import axios from "../../../axios/axios";
import { adddetaildes } from "@/service";
import { useRouter } from "next/router";
import { Editor } from "@tinymce/tinymce-react";

export interface IHomeProps {
  product: [
    {
      id: number;
      productname: string;
    }
  ];
}

export function Home({ product }: IHomeProps) {
  const [id, setid] = React.useState<any>(0);
  let router = useRouter();
  let name: string | undefined = router.query?.detail?.[1];
  const editorRefintroduce: any = React.useRef(null);
  const editorRefingredient: any = React.useRef(null);
  const editorRefuses: any = React.useRef(null);
  const editorRefuse: any = React.useRef(null);
  const editorRefparameter: any = React.useRef(null);
  const handleloginsubmit = async (value: any) => {
    if (
      editorRefintroduce.current &&
      editorRefingredient.current &&
      editorRefuses.current &&
      editorRefuse.current &&
      editorRefparameter.current
    ) {
      let introduce = editorRefintroduce.current.getContent();
      let ingredient = editorRefingredient.current.getContent();
      let uses = editorRefuses.current.getContent();
      let use = editorRefuse.current.getContent();
      let parameter = editorRefparameter.current.getContent();

      let res = await adddetaildes({
        types: name,
        introduce: introduce,
        ingredient: ingredient,
        user: uses,
        use: use,
        parameter: parameter,
        product_id: id,
      });
      console.log(res);
    }
  };
  const handleChange = (e: any) => {
    setid(e);
  };

  return (
    <Box>
      <select
        style={{ width: "400px", height: "50px" }}
        onChange={(e) => handleChange(e.target.value)}>
        <option>...Product_ID...</option>
        {product &&
          product.length &&
          product.map((item: any, index: number) => {
            return (
              <option key={index} value={item.id}>
                {item.productname}
              </option>
            );
          })}
      </select>
      <br></br>

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
        <Box>
          <Editor
            apiKey='your-api-key'
            onInit={(evt, editor) => (editorRefingredient.current = editor)}
            initialValue='<p>Ingredient.</p>'
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
        <Box>
          <Editor
            apiKey='your-api-key'
            onInit={(evt, editor) => (editorRefuses.current = editor)}
            initialValue='<p>Uses</p>'
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
        <Box>
          <Editor
            apiKey='your-api-key'
            onInit={(evt, editor) => (editorRefuse.current = editor)}
            initialValue='<p>Use</p>'
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
        <Box>
          <Editor
            apiKey='your-api-key'
            onInit={(evt, editor) => (editorRefparameter.current = editor)}
            initialValue='<p>Parameter</p>'
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
        onClick={handleloginsubmit}
        type='submit'
        variant='contained'
        fullWidth
        color='success'
        sx={{ mt: "20px", background: "blue", color: "black" }}>
        ADD Brand
      </Button>
    </Box>
  );
}
