import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import classes from "./FetchData.module.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const FetchData = () => {
  const navigate = useNavigate();
  const { logoutUser } = useUserContext();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://foodorderapp-c2463-default-rtdb.firebaseio.com/orders.json"
      );
      const responseData = await response.json();

      const loadedData = [];
      for (const key in responseData) {
        for (
          let index = 0;
          index < responseData[key].orderedItems.length;
          index++
        ) {
          loadedData.push({
            id: key,
            email: responseData[key].email,
            date: responseData[key].date,
            amount: responseData[key].orderedItems[index].amount,
            name: responseData[key].orderedItems[index].name,
            price: responseData[key].orderedItems[index].price,
          });
        }
      }
      setTableData(loadedData);
    };
    fetchData();
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const logout = (email, password) => {
    logoutUser(email, password).then(() => {
      navigate("/login");
    });
  };
  return (
    <div>
      <Fragment>
        <header className={classes.header}>
          <h1>Cantina USV</h1>
          <button onClick={logout} className={classes.btnLogout}>
            <span>Logout</span>
          </button>
        </header>
      </Fragment>
      <div className={classes.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell align="right">Data și ora</StyledTableCell>
                <StyledTableCell align="right">Cantitatea</StyledTableCell>
                <StyledTableCell align="right">Nume</StyledTableCell>
                <StyledTableCell align="right">Preț</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell component="th" scope="row">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">{row.name}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default FetchData;
