import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import QueryProvider from "./contexts/QueryContext";
import Setting from "./containers/Setting";
import SearchResults from "./components/SearchResults";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      background: "#1F2023",
      display: isMobile ? "block" : "flex",
      overflow: isMobile ? "auto" : "hidden"
    }
  });
  const classes = useStyles({});
  const [images, setImages]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  return (
    <QueryProvider>
      <div className={classes.root}>
        <Setting setImages={setImages} setLoading={setLoading} />
        <SearchResults images={images} />
        {loading && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0",
              top: "0",
              backgroundColor: "#000",
              opacity: 0.5
            }}
          ></div>
        )}
      </div>
    </QueryProvider>
  );
};

export default App;
