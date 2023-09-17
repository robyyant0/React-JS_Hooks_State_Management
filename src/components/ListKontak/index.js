import React, { useEffect } from 'react'
import { useAppState } from '../../contexts/appState'
import { deleteKontak, detailKontak, getKontakList } from '../../actions/kontakAction'

function ListKontak() {
    const [state, dispatch] = useAppState();
    const { getKontakResult, getKontakLoading, getKontakError, deleteKontakResult } = state

    useEffect(() => {
        getKontakList(dispatch);
    }, [dispatch])

    useEffect(() => {
        if(deleteKontakResult) {
            getKontakList(dispatch);
        }
    }, [dispatch, deleteKontakResult])

    return (
        <div>
            <h4>List Kontak</h4>
            {getKontakResult ? (
                getKontakResult.map((kontak) => {
                    return (
                        <p key={kontak.id}>
                            {kontak.nama} - 
                            {kontak.nohp} -
                            
                            <button style={{ marginRight: '10px' }} onClick={() => deleteKontak(dispatch, kontak.id)}>Delete</button>

                            <button onClick={() => detailKontak(dispatch, kontak)}>Edit</button>
                        </p>
                    )
                })
            ) : getKontakLoading ? (
                <p>Loading . . .</p>
            ) : (
                <p>{getKontakError ? getKontakError : "Data Kosong" }</p>
            )}
        </div>
    )
}

export default ListKontak
