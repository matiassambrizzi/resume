import { Typography, SxProps, Theme } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import React from "react"
import {Col} from "../layout/Flex"

type List<T> = readonly T[]

export type ResumeComponent =
  ResumeText |
  ResumeItem |
  ResumeList
  
type ResumeList = {type: "list", data: List<ResumeItem>}
type ResumeText = {type: "text", data: string} 
type ResumeItem = {type: "item", data: {title: string, subtilte: string, data: string}}

export type ResumeData = {

  header: {
    title: string,
    subtilte: string,
    picture: string,
  },

  body: {

    left: List<{
      title: string, 
      component: ResumeComponent
    }>,

    right: List<{
      title: string, 
      component: ResumeComponent
    }>

  }
}


const ResumeComponentElement = (
  props: ResumeComponent
) => (

  props.type === "text" ?
    <Typography
      sx={{textAlign: "justify"}}
      children={props.data}
    /> :
    props.type === "item" ?
      <ResumeItem
        title={props.data.title}
        subtitle={props.data.subtilte}
        data={props.data.data}
      /> :
      props.type === "list" ?
        <>
          {
            props.data.map((it, index) => (
              <ResumeComponentElement
                key={index}
                {...it}
              />
            ))
          }
        </> : <></>
)

const ResumeComponent = (
  props: {
    title: string,
    component: ResumeComponent
  }
) => 
  <ResumeText 
    title={props.title}
    children={
      <ResumeComponentElement {...props.component} />
    }
  />


export const ResumeLayout = (
  props: {
    leftContent: React.ReactNode,
    rightContent: React.ReactElement,
    sx?: SxProps<Theme>
  }
) => {

  return (
    <Grid2
      container
      sx={props.sx}
    >
      <Grid2
        xs={4}
      >
        {props.leftContent}
      </Grid2>

      <Grid2
        xs={8}
      >
        {props.rightContent}
      </Grid2>

    </Grid2>
  )

}

export const Resume = (
  props: {
    data: ResumeData
  }
) => {

  return (
    <Grid2
      width={"960px"}
      sx={{border: "2px solid #EFEFEF"}}
      container
    >
      <Grid2 
        xs={12}
      >
        <ResumeHeader data={props.data} />
      </Grid2>

      <Grid2 xs={12}>
        <ResumeBody data={props.data} />
      </Grid2>

    </Grid2>
  )

}

const ResumeBody = (
  props: {
    data: ResumeData
  }
) => {
  return (
    <ResumeLayout
      leftContent={
        <Col
          spacing={4}
          padding={"20px"}
        >
          {props.data.body.left.map(
            it => (
              <ResumeComponent 
                key={it.title}
                title={it.title}
                component={it.component}
              />
            )
          )}
        </Col>
      }
      rightContent={
        <Col
          spacing={4}
          padding={"20px"}
          sx={{
            backgroundColor: "#EFEFEF"
          }}
        >
          {props.data.body.right.map(
            it => (
              <ResumeComponent 
                key={it.title}
                title={it.title}
                component={it.component}
              />
            )
          )}
        </Col>
      }
    />

  )
}

const ResumeHeader = (
 props: {
    data: ResumeData
  }
) => {

  return (
    <ResumeLayout
      sx={{
        paddingTop: "100px",
        paddingBottom: "100px",
        background: "linear-gradient(90deg, rgba(0,0,0,1), rgba(115,115,115,1));",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      leftContent={
        <Col
          justifyContent="center"
          alignItems={"center"}
        >
          <img
            alt=""
            style={{
              borderRadius: "50%",
              width: "100%",
              maxWidth: "190px",
              height: "190px",
              objectFit: "cover",
              overflow: "hidden"
            }}
            src={props.data.header.picture}
          />
        </Col>
      }
      rightContent={
        <Col
        >
          <Typography
            fontWeight="bold"
            children={props.data.header.title}
            fontSize={"35px"}
            color={"white"}
          />
          <Typography
            variant="h5"
            sx={{whiteSpace: "pre-line"}}
            color={"white"}
            children={props.data.header.subtilte}
          />
        </Col>
      }
    />
  )
}

const ResumeText = (
  props: {
    title: string,
    children: React.ReactNode
    sx?: SxProps<Theme>
  }
) => {
  return (
    <Col
      spacing={2}
      sx={props.sx}
      padding={"20px"}
    >
      <Typography
        children={props.title}
        variant="h6"
        sx={{whiteSpace: "pre-line"}}
        fontWeight={"bold"}
        color={"#7C8587"}
      />

      <div
        style={{
          borderTop: "10px solid #7C8587",
          width: "50px"
        }}
      />
      <>
        {props.children}
      </>
    </Col>
  )

}

const ResumeItem = (
  props: {
    title: string,
    subtitle: string,
    data: string
  }
) => {

  return (
    <Col
      spacing={1}
    >

      <Typography 
        children={props.title}
        fontWeight="bold"
        color={"#484848"}
      />

      <Typography 
        children={props.subtitle}
      />

      <Typography 
        children={props.data}
        sx={{textAlign: "justify"}}
      />

    </Col>
  )



}
