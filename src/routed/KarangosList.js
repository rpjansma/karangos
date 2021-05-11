import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const API = "https://api.faustocintra.com.br/karangos/";

export default function KarangosList() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  const [karangos, setKarangos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(API + "by=?marca,modelo");
        setKarangos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1>Lista dos Karangos</h1>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Cód.</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Cor</TableCell>
              <TableCell align="center">Ano</TableCell>
              <TableCell align="center">Importado?</TableCell>
              <TableCell align="center">Placa</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="center">Editar</TableCell>
              <TableCell align="center">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {karangos.map((karango) => (
              <TableRow key={karango.id}>
                <TableCell align="right">{karango.id}</TableCell>
                <TableCell>{karango.marca}</TableCell>
                <TableCell>{karango.modelo}</TableCell>
                <TableCell>{karango.cor}</TableCell>
                <TableCell align="center">{karango.ano_fabricacao}</TableCell>
                <TableCell align="center">
                  <Checkbox checked={karango.importado == 1} readOnly />
                </TableCell>
                <TableCell align="center">{karango.placa}</TableCell>
                <TableCell align="right">
                  {Number(karango.preco).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell align="center"><EditIcon/></TableCell>
                <TableCell align="center"><DeleteIcon/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
