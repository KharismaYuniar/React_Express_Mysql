import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',kota:'',karyawan:[]}
  }
  klik(){
    this.setState({
      nama: this.refs.nama.value,
      usia: this.refs.usia.value,
      kota: this.refs.kota.value
    });
  }
  klik2(){
    var x = this.state.nama;
    var y = this.state.usia;
    var z = this.state.kota;
    axios.post('http://localhost:3300/data',{
      nama : x,
      usia : y,
      kota:z
    })
  }
  klik3(){
    axios.get('http://localhost:3300/data')
    .then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        karyawan: ambilData.data,
      })
    })
  }

  render() {
    const data = this.state.karyawan.map((item, index)=>{
   
      var nama = [item.nama]
      var usia = [item.usia]
      var kota = [item.kota]
      return <tr key={index}><td>{nama}</td><td>{usia}</td><td>{kota}</td></tr>;
    })
    return (
      <div>
      <center>
      <h2>REACT - EXPRESS - MYSQL</h2><br/>  
      <h3>DATA KARYAWAN</h3>
      <div className="row">
              <input className="form-control" ref="nama" type="text" placeholder="Masukkan Nama" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="usia" type="number" placeholder="Masukkan Usia" onInput={()=>{this.klik();}}/><br/>
              <input className="form-control" ref="kota" type="text" placeholder="Masukkan kota" onInput={()=>{this.klik();}}/><br/>
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik2();}}>POST</button>&nbsp;&nbsp;
              <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.klik3();}}>GET</button>
            </div>
      <br/>
      <tr className="head">
            
            <td>Nama Karyawan</td>
            <td>Usia</td>
            <td>Kota</td>
          </tr>
      {data}
    
      </center>
      </div>
    );
  }
}

export default App;
