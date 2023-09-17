import React, { useEffect, useState } from "react";
import { useAppState } from '../../contexts/appState'
import { addKontak, getKontakList, updateKontak } from '../../actions/kontakAction'

function FormKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const [state, dispatch] = useAppState();
  const { addKontakResult, detailKontakResult, updateKontakResult } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("1. Masuk Handle Submit");
    if(id) {
      //update
      updateKontak(dispatch, {id: id, nama: nama, nohp: nohp})
    }else {
      //add
      addKontak(dispatch, {nama: nama, nohp: nohp}); 
    }
    
  }

  //add kontak
  useEffect(() => {

    if(addKontakResult) {
      getKontakList(dispatch);
      setNama('');
      setNohp('');
      setId('');
    }

  }, [addKontakResult, dispatch])

  //detail kontak
  useEffect(() => {
    if(detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult])


  //update kontak
  useEffect(() => {

    if(updateKontakResult) {
      console.log("5. Get Kontak List");
      getKontakList(dispatch);
      setNama('');
      setNohp('');
      setId('');
    }

  }, [updateKontakResult, dispatch])

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak" }</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" name="nama" placeholder="Nama . . ." value={nama} onChange={(event) => setNama(event.target.value)}/>

        <input type="text" name="nohp" placeholder="No. HP . . ." value={nohp} onChange={(event) => setNohp(event.target.value)}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormKontak;
