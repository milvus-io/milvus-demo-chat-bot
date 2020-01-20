import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, TextareaAutosize, Snackbar } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
const QA = props => {
  const textArea = useRef(null);
  const [qaList, setQaList] = useState([
    { type: "question", text: "问题" },
    { type: "answer", text: "回答" }
  ]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const isMobile = props.isMobile;

  const useStyles = makeStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: isMobile ? "0 0 60vh" : "0 0 72vh",
      overflowY: "auto",
      color: "#fff",
      padding: isMobile ? "20px" : "50px",
      fontSize: isMobile ? "12px" : "16px"
    },
    textarea: {
      position: "relative",
      flex: "0 0 200px",
      backgroundColor: "rgb(40, 41, 46)"
    },
    item: {
      display: "flex",
      marginTop: isMobile ? "20px" : " 60px"
    },
    avatar: {
      flex: "0 0 100x",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#000"
    },
    text: {
      position: "relative",
      display: "flex",
      marginLeft: "20px",
      alignItems: "center",
      maxWidth: "70%",
      backgroundColor: "#fff",
      padding: "10px 18px",
      color: "#000",
      borderRadius: "10px"
    },
    send: {
      position: "absolute",
      bottom: isMobile ? "20px" : "50px",
      right: "30px",
      height: "60px",
      width: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4FC4F9",
      borderRadius: "50%",
      color: "#fff",
      cursor: "pointer"
    },
    triangle: {
      position: "absolute",
      top: "16px",
      width: 0,
      height: 0,
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent"
    }
  });
  const classes = useStyles({});

  const handleSend = e => {
    const value = textArea.current.value;
    if (!value.trim()) {
      setMessage("请输入问题");
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 800);
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    setQaList(list => [
      ...list,
      { type: "question", text: textArea.current.value }
    ]);
    // setLoading(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <p>该 AI 问答系统包含12万条医疗相关的问答。</p>
        <p> 在下方对话框中输入问题，你的健康管家小M将会给出回答。</p>
        <p style={{ color: "#B0B0B9" }}>（Demo 仅支持中文问答）</p>

        {qaList.map((v, i) => {
          if (v.type === "answer") {
            return (
              <div className={classes.item} key={i}>
                <div className={classes.avatar}></div>
                <div className={classes.text}>
                  <div
                    className={classes.triangle}
                    style={{ left: "-10px", borderRight: "10px solid #fff" }}
                  ></div>
                  <p>{v.text}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className={classes.item}
                style={{ flexDirection: "row-reverse" }}
                key={i}
              >
                <div
                  className={classes.avatar}
                  style={{ backgroundColor: "green" }}
                ></div>
                <div className={classes.text} style={{ margin: "0 20px 0 0" }}>
                  <div
                    className={classes.triangle}
                    style={{ right: "-10px", borderLeft: "10px solid #fff" }}
                  ></div>
                  <p>{v.text}</p>
                </div>
              </div>
            );
          }
        })}
        {loading && (
          <div style={{ textAlign: "center" }}>正在查询相关问题,请稍后...</div>
        )}
      </div>
      <Divider
        variant="middle"
        style={{ backgroundColor: "#fff", margin: " 0" }}
      />
      <div className={classes.textarea}>
        <TextareaAutosize
          ref={textArea}
          aria-label="empty textarea"
          placeholder="Empty"
          rows={10}
          style={{
            width: "100%",
            boxSizing: "border-box",
            border: "none",
            backgroundColor: "#28292E",
            color: "#fff"
          }}
        />
        <div className={classes.send}>
          <SendIcon fontSize="large" onClick={handleSend}></SendIcon>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        key="top center"
        open={open}
        message={message}
      />
    </div>
  );
};

export default QA;
