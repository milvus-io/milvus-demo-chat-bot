import React, { useRef } from "react";
import { makeStyles, Theme, Link } from "@material-ui/core";
import github from "../images/github.svg";
import slack from "../images/slack.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    left: "-130px",
    top: "50%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #eee",
    boxShadow: "3px 3px 5px rgba(0,0,0,0.02)",
    padding: "24px",
    background: "#fff",
    transform: "translatY(-50%)",
    transition: "all 0.2s linear",
    borderRadius: "0 4px 4px 0",

    "& img": {
      width: "32px",
      height: "32px",
      marginLeft: "24px",
    },

    "&:hover": {
      left: 0,
    },

    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      padding: "16px",
    },
  },
  iconButton: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "center",

    "&:first-child": {
      marginBottom: "24px",
    },
  },
}));

const getLink = (isFromZilliz: boolean) => ({
  git_link: isFromZilliz
    ? "https://github.com/milvus-io/bootcamp#readme"
    : "https://bit.ly/3htS3ma",
  slack_link: isFromZilliz
    ? "https://join.slack.com/t/milvusio/shared_invite/zt-e0u4qu3k-bI2GDNys3ZqX1YCJ9OM~GQ"
    : "https://bit.ly/3ooMQ0p",
});

const RegisterMenu = () => {
  const classes = useStyles();
  const menuRef = useRef<HTMLDivElement>(null!);
  const search = new URLSearchParams(window.location.search).get("isZilliz");
  const { slack_link } = getLink(search === "true");

  return (
    <div className={classes.root} ref={menuRef}>
      <div className={classes.iconButton}>
        <img src={github} alt="github-logo" />

        <Link
          href="https://github.com/milvus-io/bootcamp/tree/master/solutions/question_answering_system"
          className="link-btn"
          underline="none"
        >
          Milvus Github
        </Link>
      </div>
      <div className={classes.iconButton}>
        <img src={slack} alt="slack-logo" />
        <Link href={slack_link} underline="none" className="link-btn">
          Join Channel
        </Link>
      </div>
    </div>
  );
};

export default RegisterMenu;
