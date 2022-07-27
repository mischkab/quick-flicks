import { createTheme, Pagination, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChangePage = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination 
        onChange={(e) => handleChangePage(e.target.textContent)}
        count={numOfPages}
        />
      </ThemeProvider>    
    </div>
  );
};

export default CustomPagination;